<!-- Night-sky head of the inner pages (styles in src/assets/site.css); the slot holds eyebrow, title and lede. -->
<template>
  <section class="page-hero">
    <div class="moon" aria-hidden="true"></div>
    <svg class="scene" viewBox="0 0 1600 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path d="M0 150 L110 100 L230 135 L360 60 L480 120 L600 80 L740 135 L880 50 L1010 110 L1150 70 L1290 125 L1420 85 L1600 125 V420 H0z" fill="#3a3a3c" opacity="0.55" />
      <path d="M0 230 L120 195 L260 222 L400 170 L540 212 L700 182 L860 225 L1020 178 L1180 215 L1340 186 L1480 220 L1600 195 V420 H0z" fill="#2c2721" />
      <path d="M0 320 L30 280 L45 296 L60 255 L80 292 L100 264 L120 305 L150 272 L170 300 L200 250 L225 296 L260 284 L300 312 L360 300 L430 320 L520 308 L600 328 L700 316 L800 332 L900 318 L1000 328 L1080 312 L1130 280 L1150 296 L1175 248 L1200 292 L1225 260 L1250 300 L1280 268 L1305 304 L1340 276 L1370 308 L1420 292 L1480 316 L1540 300 L1600 312 V420 H0z" fill="#1a1611" />
      <path d="M0 390 C200 374 400 386 600 378 C800 370 1000 390 1200 378 C1400 370 1500 382 1600 375 V420 H0z" fill="#0f0d0b" />
    </svg>
    <div class="wrap">
      <slot />
    </div>
  </section>
</template>
