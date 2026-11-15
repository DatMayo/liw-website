// /voice (vercel.json rewrite): straight to the newest release file of the Mumble plugin. The file
// name carries the version (liw_proximity-<version>.mumble_plugin), so it is looked up on GitHub;
// the CDN keeps the answer 5 minutes. If GitHub does not answer: the page of the newest release.
const REPO = 'DatMayo/liw-voice';
const FALLBACK = `https://github.com/${REPO}/releases/latest`;

export default async function handler(req, res) {
    let target = FALLBACK;
    try {
        const answer = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
            headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'playliw.com' },
        });
        if (answer.ok) {
            const release = await answer.json();
            const file = (release.assets || []).find((asset) => asset.name.endsWith('.mumble_plugin'));
            if (file) target = file.browser_download_url;
        }
    } catch {
        // GitHub not reachable: the release page.
    }
    res.statusCode = 302;
    res.setHeader('Location', target);
    res.setHeader('Cache-Control', target === FALLBACK ? 'no-store' : 'public, s-maxage=300, stale-while-revalidate=600');
    res.end();
}
