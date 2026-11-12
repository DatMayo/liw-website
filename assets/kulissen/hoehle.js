// Cave mode of the territory editor: an animal walks through a made-up cave, rings of level rays
// measure the walls, the ceiling ray measures the height, and stopping the scan builds the outline.
// The data (assets/kulissen/hoehle-data.js) comes from running the server's outline logic
// (liw_territory/shared/cave.lua) on that cave; the 3D view loads three.js from assets/vendor on demand.
(() => {
    const T = {
        de: {
            top: 'Draufsicht', d3: '3D', play: 'Abspielen', pause: 'Pause', resume: 'Weiter', again: 'Nochmal abspielen',
            toScan: 'Zum Scan', toBuild: 'F5: Umriss erzeugen', scrub: 'Zeitpunkt der Animation',
            editor: 'Revier-Editor', name: 'Bärenhöhle', points: '{n} Punkte (mindestens 3)', ha: '{n} ha',
            scanning: 'Höhlenscan läuft · {n} Wandtreffer', scanned: 'Höhlenscan: {n} Wandtreffer', range: 'Höhlenrevier: Höhe {low} bis {high} m',
            keyAdd: 'Punkt hier setzen', keySave: 'Speichern', keyCave: 'Höhlenmodus: Wände beim Laufen scannen', keyStop: 'Scan beenden, Umriss erzeugen',
            surface: 'Berg über der Höhle zeigen', ceiling: 'Höhlendecke zeigen', hint: 'Ziehen: drehen · Rad: zoomen',
            loading: '3D wird geladen …', failed: 'Die 3D-Ansicht lässt sich in diesem Browser nicht anzeigen (kein WebGL).',
            lRock: 'Fels', lHits: 'Wandtreffer', lOpen: 'Als Höhle erkannte Fläche', lOutline: 'Erzeugter Umriss', lPath: 'Gelaufener Weg',
            lCeil: 'Strahl zur Decke', lBody: 'Revier: Umriss × Höhenbereich', lTop: 'Tier oben auf dem Berg: nicht im Revier', entrance: 'Eingang',
            note: '<b>So arbeitet der Höhlenmodus:</b> Im Revier-Editor drückt ein Admin F5 und läuft durch die Höhle. Zwei Ringe aus je 36 waagerechten Strahlen in 0,4 und 1,4 m Höhe messen dabei alle Viertelsekunde die Wände, ein Strahl nach oben die Decke. Jeder Strahl markiert die Fläche, die er durchquert, als Höhle. Ein zweites F5 schließt Lücken, behält nur den mit dem Weg verbundenen Teil, füllt Löcher (die Säule gehört dazu) und vereinfacht den Rand auf höchstens 40 Ecken. Der Höhenbereich reicht 4 m unter den tiefsten Punkt des Wegs und 3 m über die höchste Decke – wer oben auf dem Berg steht, ist nicht im Revier. Am Eingang treffen Strahlen ins Leere und zählen nur 4 m weit. Die Höhle hier ist erfunden, der Umriss kommt aus derselben Logik wie im Spiel.',
        },
        en: {
            top: 'Top view', d3: '3D', play: 'Play', pause: 'Pause', resume: 'Resume', again: 'Play again',
            toScan: 'Jump to the scan', toBuild: 'F5: build the outline', scrub: 'Point in the animation',
            editor: 'Territory editor', name: 'Bear cave', points: '{n} points (at least 3)', ha: '{n} ha',
            scanning: 'Cave scan running · {n} wall hits', scanned: 'Cave scan: {n} wall hits', range: 'Cave territory: height {low} to {high} m',
            keyAdd: 'Set point here', keySave: 'Save', keyCave: 'Cave mode: scan the walls while you walk', keyStop: 'Stop scanning, build the outline',
            surface: 'Show the mountain above', ceiling: 'Show the cave ceiling', hint: 'Drag: turn · wheel: zoom',
            loading: 'Loading 3D …', failed: 'This browser cannot show the 3D view (no WebGL).',
            lRock: 'Rock', lHits: 'Wall hits', lOpen: 'Area recognised as cave', lOutline: 'Built outline', lPath: 'Path walked',
            lCeil: 'Ray to the ceiling', lBody: 'Territory: outline × height range', lTop: 'Animal on top of the mountain: not in the territory', entrance: 'Entrance',
            note: '<b>How cave mode works:</b> in the territory editor an admin presses F5 and walks through the cave. Two rings of 36 level rays each, at 0.4 and 1.4 m, measure the walls every quarter second, one ray upwards measures the ceiling. Every ray marks the area it crosses as cave. A second F5 closes gaps, keeps only the part connected to the path, fills holes (the pillar belongs to it) and simplifies the border to at most 40 corners. The height range reaches 4 m below the lowest point walked and 3 m above the highest ceiling – an animal standing on the mountain above is not in the territory. At the entrance rays hit nothing and only count for 4 m. The cave is made up; the outline comes from the same logic as in the game.',
        },
    };

    const loaded = {};
    function load(src) {
        if (!loaded[src]) {
            loaded[src] = new Promise((resolve, reject) => {
                const s = document.createElement('script');
                s.src = src; s.onload = resolve; s.onerror = reject;
                document.head.append(s);
            });
        }
        return loaded[src];
    }

    const STYLE = `
.sim-hoehle .cave-panel .name { font-weight: 600; font-size: 1.1rem; }
.sim-hoehle .cave-status { border-left: 2px solid var(--gold); padding: 0.15rem 0.6rem; color: var(--muted); display: grid; }
.sim-hoehle .cave-status.scanning { border-left-color: #78dcff; color: #aae6ff; }
.sim-hoehle .cave-keys { display: grid; gap: 0.35rem; font-size: 1rem; }
.sim-hoehle .cave-keys div { display: grid; grid-template-columns: 3.2rem 1fr; gap: 0.6rem; align-items: center; }
.sim-hoehle kbd { font: 600 0.8rem var(--body); text-align: center; padding: 0.05rem 0; border: 1px solid var(--cap-edge); border-bottom-width: 2px; border-radius: 0.3rem; background: var(--cap); color: var(--ink); }
.sim-hoehle kbd.hot { border-color: #78dcff; color: #78dcff; }
.sim-hoehle .scrub { flex: 1 1 12rem; min-width: 0; accent-color: var(--gold); }
.sim-hoehle .view3d { aspect-ratio: 4 / 3; }
.sim-hoehle .view3d canvas { height: 100%; touch-action: none; }
.sim-hoehle .hint { position: absolute; right: 0.6rem; bottom: 0.4rem; font-size: 0.85rem; color: var(--muted); pointer-events: none; }
.sim-hoehle .msg { position: absolute; inset: 0; display: grid; place-items: center; color: var(--muted); padding: 1rem; text-align: center; }
.sim-hoehle .scale { position: absolute; left: 0.6rem; bottom: 0.4rem; font-size: 0.85rem; color: var(--muted); display: flex; align-items: center; gap: 0.4rem; white-space: nowrap; }
.sim-hoehle .scale i { display: block; height: 2px; background: var(--muted); }
`;

    function el(tag, props, children) {
        const e = document.createElement(tag);
        Object.assign(e, props || {});
        (children || []).forEach((c) => e.append(c));
        return e;
    }
    const fmt = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k]);

    window.LIW_SIMS = window.LIW_SIMS || [];
    window.LIW_SIMS.push({
        id: 'hoehle',
        order: 20,
        title: { de: 'Höhlenscan', en: 'Cave scan' },
        teaser: { de: 'Wie ein Revier in eine Höhle kommt', en: 'How a territory gets into a cave' },
        lede: {
            de: 'In Höhlen lassen sich Grenzpunkte kaum von Hand setzen. Der Revier-Editor tastet die Wände deshalb beim Durchlaufen ab und baut daraus den Umriss – hier von oben und in 3D.',
            en: 'In caves border points are hard to set by hand. So the territory editor measures the walls while you walk through and builds the outline from them – here from above and in 3D.',
        },
        mount(root, lang) {
            const t = T[lang];
            let destroyed = false, raf = 0, playing = false, last = 0, time = 1, mode = 'top';
            let view3d = null;
            root.append(el('style', { textContent: STYLE }));
            const status = el('div', { className: 'cave-status' });
            const points = el('div', { className: 'muted' });
            const f5 = el('kbd', { textContent: 'F5' });
            const f5text = el('span');
            const playBtn = el('button', { type: 'button', className: 'sim-btn ghost', textContent: t.play });
            const scrub = el('input', { type: 'range', min: 0, max: 1000, value: 1000, className: 'scrub' });
            scrub.setAttribute('aria-label', t.scrub);
            const topBtn = el('button', { type: 'button', className: 'sim-btn ghost', textContent: t.top });
            const d3Btn = el('button', { type: 'button', className: 'sim-btn ghost', textContent: t.d3 });
            const scanBtn = el('button', { type: 'button', className: 'sim-btn ghost', textContent: t.toScan });
            const buildBtn = el('button', { type: 'button', className: 'sim-btn ghost', textContent: t.toBuild });
            const view = el('div', { className: 'sim-view' });
            const toggles = el('div', { className: 'sim-box' });
            const legend = el('div', { className: 'sim-legend' });
            root.append(
                el('div', { className: 'sim-row' }, [topBtn, d3Btn, playBtn, scanBtn, buildBtn, scrub]),
                el('div', { className: 'sim-grid' }, [view, el('div', { className: 'sim-side' }, [
                    el('div', { className: 'sim-box cave-panel' }, [
                        el('h3', { textContent: t.editor }), el('div', { className: 'name', textContent: t.name }), points, status,
                        el('div', { className: 'cave-keys' }, [
                            el('div', {}, [el('kbd', { textContent: lang === 'de' ? 'Einfg' : 'Ins' }), el('span', { textContent: t.keyAdd })]),
                            el('div', {}, [el('kbd', { textContent: lang === 'de' ? 'Ende' : 'End' }), el('span', { textContent: t.keySave })]),
                            el('div', {}, [f5, f5text]),
                        ]),
                    ]),
                    toggles,
                ])]),
                legend,
                el('p', { className: 'sim-note', innerHTML: t.note }),
            );
            const msg = el('div', { className: 'msg', textContent: t.loading });
            view.append(msg);

            const SCAN_END = 0.72;
            let D = null;
            function phase() {
                const N = D.steps.length;
                const k = Math.min(N - 1, Math.floor(Math.min(1, time / SCAN_END) * (N - 1)));
                const build = time > SCAN_END ? (time - SCAN_END) / (1 - SCAN_END) : 0;
                return { k, build, scanning: build === 0 && time > 0 };
            }
            function panel() {
                const { k, build, scanning } = phase();
                const hits = D.dotsUpTo[k], done = build >= 0.8;
                status.hidden = time === 0;
                status.classList.toggle('scanning', scanning);
                const lines = [build === 0 ? fmt(t.scanning, { n: hits }) : fmt(t.scanned, { n: D.dots.length })];
                if (done) lines.push(fmt(t.range, { low: Math.floor(D.minZ), high: Math.ceil(D.maxZ) }));
                status.replaceChildren(...lines.map((l) => el('div', { textContent: l })));
                const ha = (D.area / 10000).toLocaleString(lang, { maximumFractionDigits: 2 });
                points.textContent = fmt(t.points, { n: done ? D.outline.length : 0 }) + (done ? ` · ${fmt(t.ha, { n: ha })}` : '');
                f5.classList.toggle('hot', scanning);
                f5text.textContent = scanning ? t.keyStop : t.keyCave;
            }

            // ---- Top view (canvas) ----
            function topView() {
                const W = 1560, H = 1400, M = 20, X0 = -8;
                const cv = el('canvas', { width: W, height: H });
                cv.setAttribute('aria-label', t.top);
                const g = cv.getContext('2d');
                const px = (x) => (x - X0) * M, py = (y) => H - y * M;
                const bar = el('i');
                const scale = el('div', { className: 'scale' }, [bar, el('span', { textContent: '10 m' })]);
                const rock = el('canvas', { width: W, height: H });
                const r = rock.getContext('2d');
                r.fillStyle = '#2a2620'; r.fillRect(0, 0, W, H);
                D.rock.forEach((row, iy) => {
                    for (let ix = 0; ix < row.length; ix++) {
                        if (row[ix] !== '1') continue;
                        const n = ((ix * 73856093) ^ (iy * 19349663)) & 15;
                        r.fillStyle = n < 3 ? '#433c31' : '#3a342b';
                        r.fillRect(ix * 10, H - (iy + 1) * 10, 10, 10);
                    }
                });
                r.fillStyle = 'rgba(70, 90, 55, 0.35)'; r.fillRect(0, 0, px(0), H);
                r.fillStyle = '#9f927e'; r.font = '30px Georgia, serif'; r.fillText(t.entrance, 10, py(36));
                function draw() {
                    const { k, build, scanning } = phase();
                    g.drawImage(rock, 0, 0);
                    if (build > 0) {
                        g.fillStyle = `rgba(120, 220, 255, ${0.28 * Math.min(1, build * 2.5)})`;
                        for (const [ix, iy] of D.cells) g.fillRect(px(ix), py(iy + 1), M, M);
                    }
                    g.strokeStyle = 'rgba(214, 174, 94, 0.8)'; g.lineWidth = 4; g.setLineDash([10, 8]); g.beginPath();
                    for (let i = 0; i <= k; i++) { const s = D.steps[i]; if (i) g.lineTo(px(s.x), py(s.y)); else g.moveTo(px(s.x), py(s.y)); }
                    g.stroke(); g.setLineDash([]);
                    if (scanning) {
                        const s = D.steps[k];
                        for (const [hx, hy, , hit] of s.rays) {
                            g.strokeStyle = hit ? 'rgba(120, 220, 255, 0.22)' : 'rgba(239, 231, 216, 0.22)';
                            g.lineWidth = 2; g.beginPath(); g.moveTo(px(s.x), py(s.y)); g.lineTo(px(hx), py(hy)); g.stroke();
                        }
                    }
                    g.fillStyle = build > 0 ? '#d6ae5e' : '#78dcff';
                    for (const [x, y, , step] of D.dots) if (step <= k) { g.beginPath(); g.arc(px(x), py(y), 4, 0, 6.3); g.fill(); }
                    if (scanning) { const s = D.steps[k]; g.fillStyle = '#efe7d8'; g.strokeStyle = '#0f0d0b'; g.lineWidth = 4; g.beginPath(); g.arc(px(s.x), py(s.y), 13, 0, 6.3); g.fill(); g.stroke(); }
                    if (build > 0.25) {
                        const f = Math.min(1, (build - 0.25) / 0.6), n = D.outline.length, upto = Math.floor(f * n);
                        g.strokeStyle = '#8fb878'; g.lineWidth = 6; g.lineJoin = 'round'; g.beginPath();
                        for (let i = 0; i <= upto; i++) { const p = D.outline[i % n]; if (i) g.lineTo(px(p[0]), py(p[1])); else g.moveTo(px(p[0]), py(p[1])); }
                        if (f >= 1) { g.closePath(); g.fillStyle = 'rgba(143, 184, 120, 0.16)'; g.fill(); }
                        g.stroke();
                        for (let i = 0; i < Math.min(n, upto + 1); i++) { const p = D.outline[i]; g.fillStyle = '#efe7d8'; g.strokeStyle = '#3d5e2e'; g.lineWidth = 3; g.beginPath(); g.arc(px(p[0]), py(p[1]), 8, 0, 6.3); g.fill(); g.stroke(); }
                    }
                }
                const fit = () => { bar.style.width = `${10 * M * cv.clientWidth / W}px`; };
                window.addEventListener('resize', fit);
                return { nodes: [cv, scale], draw, fit, destroy() { window.removeEventListener('resize', fit); } };
            }

            // ---- 3D view (three.js) ----
            function threeView() {
                const THREE = window.THREE;
                const box = el('div', { className: 'view3d' });
                const hint = el('div', { className: 'hint', textContent: t.hint });
                let renderer;
                try { renderer = new THREE.WebGLRenderer({ antialias: true }); } catch (e) { return null; }
                renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
                box.append(renderer.domElement);
                const floorZ = (x, y) => 40 + 0.06 * x + 0.6 * Math.sin(x * 0.3) * Math.cos(y * 0.25);
                const ceilZ = (x, y) => floorZ(x, y) + 3.0 + 4.5 * Math.exp(-((x - 26) ** 2 + (y - 32) ** 2) / 70) + 3.0 * Math.exp(-((x - 50) ** 2 + (y - 54) ** 2) / 40) + 0.4 * Math.sin(x * 0.8 + y * 0.5);
                const surfZ = (x, y) => 58 + 0.06 * x + 2.2 * Math.sin(x * 0.12) * Math.cos(y * 0.1) + 1.2 * Math.sin(y * 0.21 + 1);
                const V = (x, y, z) => [x - 30, z - 46, -(y - 35)];
                const scene = new THREE.Scene();
                scene.background = new THREE.Color(0x0b0a08);
                scene.fog = new THREE.Fog(0x0b0a08, 90, 190);
                const camera = new THREE.PerspectiveCamera(42, 4 / 3, 0.5, 500);
                camera.position.set(-34, 36, 44);
                const controls = new THREE.OrbitControls(camera, renderer.domElement);
                controls.target.set(2, -2, -4); controls.enableDamping = true; controls.maxPolarAngle = Math.PI * 0.49;
                scene.add(new THREE.HemisphereLight(0xd8e4ff, 0x2a2218, 0.85));
                const sun = new THREE.DirectionalLight(0xfff0d8, 0.7); sun.position.set(-40, 80, 30); scene.add(sun);
                const R = D.rock, NY = R.length, NX = R[0].length, C = 0.5, X0 = -8;
                const isRock = (ix, iy) => (ix < 0 || iy < 0 || ix >= NX || iy >= NY ? true : R[iy][ix] === '1');
                const cellX = (ix) => X0 + ix * C;
                const jitter = (ix, iy) => 0.88 + (((ix * 73856093) ^ (iy * 19349663)) & 15) / 70;
                function quads(build, color, opts) {
                    const pos = [], col = [], c = new THREE.Color(color);
                    build((a, b, cc, d, shade) => {
                        for (const p of [a, b, cc, a, cc, d]) { pos.push(...p); col.push(c.r * shade, c.g * shade, c.b * shade); }
                    });
                    const geo = new THREE.BufferGeometry();
                    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
                    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
                    geo.computeVertexNormals();
                    return new THREE.Mesh(geo, new THREE.MeshLambertMaterial(Object.assign({ vertexColors: true, side: THREE.DoubleSide }, opts || {})));
                }
                const cellQuad = (q, ix, iy, f, shade) => {
                    const x = cellX(ix), y = iy * C;
                    q(V(x, y, f(x, y)), V(x + C, y, f(x + C, y)), V(x + C, y + C, f(x + C, y + C)), V(x, y + C, f(x, y + C)), shade);
                };
                scene.add(quads((q) => { for (let iy = 0; iy < NY; iy++) for (let ix = 0; ix < NX; ix++) if (!isRock(ix, iy)) cellQuad(q, ix, iy, floorZ, jitter(ix, iy)); }, 0x6b5a44));
                scene.add(quads((q) => { for (let iy = 0; iy < NY; iy++) for (let ix = 0; ix < 16; ix++) cellQuad(q, ix, iy, (x, y) => floorZ(x, y) - 0.02, jitter(ix, iy)); }, 0x4d5e3a));
                scene.add(quads((q) => {
                    for (let iy = 0; iy < NY; iy++) for (let ix = 16; ix < NX; ix++) {
                        if (isRock(ix, iy)) continue;
                        const x = cellX(ix), y = iy * C;
                        for (const [dx, dy, ax, ay, bx, by] of [[0, -1, x, y, x + C, y], [1, 0, x + C, y, x + C, y + C], [0, 1, x + C, y + C, x, y + C], [-1, 0, x, y + C, x, y]]) {
                            if (isRock(ix + dx, iy + dy)) q(V(ax, ay, floorZ(ax, ay)), V(bx, by, floorZ(bx, by)), V(bx, by, ceilZ(bx, by)), V(ax, ay, ceilZ(ax, ay)), jitter(ix, iy) * 0.9);
                        }
                    }
                }, 0x8a7a63));
                scene.add(quads((q) => {
                    for (let iy = 0; iy < NY; iy++) {
                        if (!isRock(16, iy)) continue;
                        const x = cellX(16), y = iy * C;
                        q(V(x, y, floorZ(x, y)), V(x, y + C, floorZ(x, y + C)), V(x, y + C, surfZ(0, y + C)), V(x, y, surfZ(0, y)), 0.9);
                    }
                }, 0x8a7a63, { transparent: true, opacity: 0.28, depthWrite: false }));
                const ceil = quads((q) => { for (let iy = 0; iy < NY; iy++) for (let ix = 16; ix < NX; ix++) if (!isRock(ix, iy)) cellQuad(q, ix, iy, ceilZ, jitter(ix, iy) * 0.8); }, 0x7a6b55);
                ceil.visible = false; scene.add(ceil);
                const surface = new THREE.Group();
                {
                    const S = 2, pos = [];
                    for (let y = 0; y < 70; y += S) for (let x = 0; x < 70; x += S) {
                        for (const [qx, qy] of [[x, y], [x + S, y], [x + S, y + S], [x, y], [x + S, y + S], [x, y + S]]) pos.push(...V(qx, qy, surfZ(qx, qy)));
                    }
                    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.computeVertexNormals();
                    surface.add(new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: 0x5d6b47, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false })));
                    surface.add(new THREE.LineSegments(new THREE.WireframeGeometry(geo), new THREE.LineBasicMaterial({ color: 0x8fa070, transparent: true, opacity: 0.18 })));
                }
                scene.add(surface);
                const topAnimal = new THREE.Mesh(new THREE.SphereGeometry(0.9, 20, 14), new THREE.MeshLambertMaterial({ color: 0xc8694a }));
                topAnimal.position.set(...V(26, 32, surfZ(26, 32) + 0.9)); scene.add(topAnimal);
                const steps = D.steps, N = steps.length;
                const pathGeo = new THREE.BufferGeometry().setFromPoints(steps.map((s) => new THREE.Vector3(...V(s.x, s.y, s.z + 0.08))));
                const path = new THREE.Line(pathGeo, new THREE.LineDashedMaterial({ color: 0xd6ae5e, dashSize: 0.8, gapSize: 0.5 }));
                path.computeLineDistances(); scene.add(path);
                const dotPos = []; D.dots.forEach(([x, y, z]) => dotPos.push(...V(x, y, z)));
                const dotGeo = new THREE.BufferGeometry(); dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(dotPos, 3));
                const dotMat = new THREE.PointsMaterial({ color: 0x78dcff, size: 0.5 });
                scene.add(new THREE.Points(dotGeo, dotMat));
                const rayGeo = new THREE.BufferGeometry(); rayGeo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(80 * 6), 3));
                const rays = new THREE.LineSegments(rayGeo, new THREE.LineBasicMaterial({ color: 0x9fe6ff, transparent: true, opacity: 0.7 })); scene.add(rays);
                const ceilGeo = new THREE.BufferGeometry(); ceilGeo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(6), 3));
                const ceilRay = new THREE.Line(ceilGeo, new THREE.LineBasicMaterial({ color: 0xff9f5a })); scene.add(ceilRay);
                const animal = new THREE.Mesh(new THREE.SphereGeometry(0.75, 20, 14), new THREE.MeshLambertMaterial({ color: 0xefe7d8 })); scene.add(animal);
                const terr = new THREE.Group(); scene.add(terr);
                {
                    const o = D.outline, n = o.length, pos = [];
                    for (let i = 0; i < n; i++) {
                        const a = o[i], b = o[(i + 1) % n];
                        for (const [x, y, z] of [[a[0], a[1], D.minZ], [b[0], b[1], D.minZ], [b[0], b[1], D.maxZ], [a[0], a[1], D.minZ], [b[0], b[1], D.maxZ], [a[0], a[1], D.maxZ]]) pos.push(...V(x, y, z));
                    }
                    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
                    terr.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x8fb878, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false })));
                    for (const z of [D.minZ, D.maxZ]) {
                        const pts = o.map(([x, y]) => new THREE.Vector3(...V(x, y, z))); pts.push(pts[0].clone());
                        terr.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x8fb878, transparent: true })));
                    }
                    const vp = []; o.forEach(([x, y]) => vp.push(...V(x, y, D.minZ), ...V(x, y, D.maxZ)));
                    const vg = new THREE.BufferGeometry(); vg.setAttribute('position', new THREE.Float32BufferAttribute(vp, 3));
                    terr.add(new THREE.LineSegments(vg, new THREE.LineBasicMaterial({ color: 0x8fb878, transparent: true, opacity: 0.55 })));
                }
                function draw() {
                    const { k, build, scanning } = phase();
                    pathGeo.setDrawRange(0, k + 1);
                    dotGeo.setDrawRange(0, D.dotsUpTo[k]);
                    dotMat.color.set(build > 0 ? 0xd6ae5e : 0x78dcff);
                    const s = steps[k];
                    animal.position.set(...V(s.x, s.y, s.z + 0.75)); animal.visible = build === 0;
                    const rp = rayGeo.attributes.position.array; let i = 0;
                    for (const [hx, hy, hz] of s.rays) { rp.set(V(s.x, s.y, hz), i); rp.set(V(hx, hy, hz), i + 3); i += 6; }
                    rayGeo.attributes.position.needsUpdate = true; rayGeo.setDrawRange(0, s.rays.length * 2); rays.visible = scanning;
                    const cp = ceilGeo.attributes.position.array; cp.set(V(s.x, s.y, s.z + 0.5), 0); cp.set(V(s.x, s.y, s.ceil || s.z + 0.5), 3);
                    ceilGeo.attributes.position.needsUpdate = true; ceilRay.visible = scanning && !!s.ceil;
                    const f = Math.max(0, Math.min(1, (build - 0.2) / 0.6));
                    terr.visible = f > 0;
                    terr.children.forEach((c) => { c.material.opacity = (c.type === 'Mesh' ? 0.16 : c.type === 'LineSegments' ? 0.55 : 1) * f; });
                    topAnimal.visible = f >= 1;
                }
                const resize = () => { const w = box.clientWidth, h = box.clientHeight; if (w && h) { renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); } };
                const ro = new ResizeObserver(resize); ro.observe(box);
                let loop = 0;
                const frame = () => { controls.update(); renderer.render(scene, camera); loop = requestAnimationFrame(frame); };
                loop = requestAnimationFrame(frame);
                const sCheck = el('input', { type: 'checkbox', checked: true });
                const cCheck = el('input', { type: 'checkbox' });
                sCheck.addEventListener('change', () => { surface.visible = sCheck.checked; });
                cCheck.addEventListener('change', () => { ceil.visible = cCheck.checked; });
                return {
                    nodes: [box, hint], draw, fit: resize,
                    toggles: [el('label', { className: 'sim-check' }, [sCheck, el('span', { textContent: t.surface })]),
                        el('label', { className: 'sim-check' }, [cCheck, el('span', { textContent: t.ceiling })])],
                    destroy() { cancelAnimationFrame(loop); ro.disconnect(); controls.dispose(); renderer.dispose(); },
                };
            }

            let current = null;
            function legendFor(m) {
                const item = (c, text) => el('span', {}, [Object.assign(el('i'), { style: `--c:${c}` }), text]);
                legend.replaceChildren(...(m === 'top'
                    ? [item('#3a342b', t.lRock), item('#78dcff', t.lHits), item('rgba(120,220,255,.35)', t.lOpen), item('#8fb878', t.lOutline), item('#d6ae5e', t.lPath)]
                    : [item('#78dcff', t.lHits), item('#ff9f5a', t.lCeil), item('#d6ae5e', t.lPath), item('#8fb878', t.lBody), item('#c8694a', t.lTop)]));
            }
            async function setMode(m) {
                mode = m;
                topBtn.setAttribute('aria-pressed', String(m === 'top'));
                d3Btn.setAttribute('aria-pressed', String(m === '3d'));
                if (current) { current.destroy(); current = null; }
                view.replaceChildren(msg);
                toggles.hidden = true;
                legendFor(m);
                let made = null;
                if (m === '3d') {
                    try {
                        await load('assets/vendor/three.min.js');
                        await load('assets/vendor/OrbitControls.js');
                    } catch (e) { msg.textContent = t.failed; return; }
                    if (destroyed || mode !== m) return;
                    made = threeView();
                    if (!made) { msg.textContent = t.failed; return; }
                } else {
                    made = topView();
                }
                current = made;
                view.replaceChildren(...made.nodes);
                if (made.toggles) { toggles.replaceChildren(...made.toggles); toggles.hidden = false; }
                made.fit(); made.draw(); panel();
            }
            function set(v) {
                time = Math.max(0, Math.min(1, v));
                scrub.value = Math.round(time * 1000);
                if (current) current.draw();
                panel();
            }
            function tick(now) {
                if (!playing || destroyed) return;
                const dt = last ? (now - last) / 1000 : 0; last = now;
                set(time + dt / 16);
                if (time >= 1) { playing = false; playBtn.textContent = t.again; return; }
                raf = requestAnimationFrame(tick);
            }
            const stop = (label) => { playing = false; cancelAnimationFrame(raf); playBtn.textContent = label; };
            playBtn.addEventListener('click', () => {
                if (playing) return stop(t.resume);
                if (time >= 1) set(0);
                playing = true; last = 0; playBtn.textContent = t.pause;
                raf = requestAnimationFrame(tick);
            });
            scrub.addEventListener('input', () => { stop(t.play); set(scrub.value / 1000); });
            scanBtn.addEventListener('click', () => { stop(t.resume); set(SCAN_END * 0.45); });
            buildBtn.addEventListener('click', () => { stop(t.again); set(1); });
            topBtn.addEventListener('click', () => setMode('top'));
            d3Btn.addEventListener('click', () => setMode('3d'));

            load('assets/kulissen/hoehle-data.js').then(() => {
                if (destroyed) return;
                D = window.LIW_CAVE_DATA;
                if (!D.dotsUpTo) {
                    const N = D.steps.length;
                    D.dotsUpTo = new Array(N).fill(0);
                    D.dots.forEach((d) => { for (let i = d[3]; i < N; i++) D.dotsUpTo[i]++; });
                }
                setMode('top');
            }, () => { msg.textContent = t.failed; });

            return {
                destroy() {
                    destroyed = true; playing = false; cancelAnimationFrame(raf);
                    if (current) current.destroy();
                },
            };
        },
    });
})();
