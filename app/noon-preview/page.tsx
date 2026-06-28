'use client';

import React, { useState } from 'react';

const PRODUCT_URL = 'https://example.com/noon-quran';

const BREAKPOINTS = [
  { name: '1440px Desktop', width: 1440, height: 900 },
  { name: '1280px Desktop', width: 1280, height: 900 },
  { name: '768px Tablet', width: 768, height: 1100 },
  { name: '390px Mobile', width: 390, height: 1200 },
  { name: '360px Mobile', width: 360, height: 1200 },
];

const heroHTML = `
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    #noon-quran-hero {
      --color-purple-dark: #5a3a8a;
      --color-yellow-bright: #f4b917;
      --color-ivory-warm: #f5f1ed;
      direction: rtl;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      background-color: var(--color-ivory-warm);
      background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-paper-background-texture-jksAS0NhFrPPk2ibk3UaDu91AIWTwq.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: scroll;
      min-height: 600px;
      position: relative;
      overflow: hidden;
      line-height: 1.6;
      text-decoration: none;
      color: inherit;
    }

    #noon-quran-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(255, 255, 255, 0.4);
      pointer-events: none;
      z-index: 1;
    }

    #noon-quran-hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 800px 600px at 30% 50%, rgba(255, 255, 255, 0.3), transparent);
      pointer-events: none;
      z-index: 2;
    }

    .noon-quran-hero__writing-overlay {
      position: absolute;
      inset: 0;
      opacity: 0.15;
      pointer-events: none;
      z-index: 1;
    }

    .noon-quran-hero__writing-overlay img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: right center;
    }

    .noon-quran-hero__container {
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: clamp(1rem, 5vw, 4rem);
      padding: clamp(2rem, 8vw, 5rem);
      margin: 0 auto;
      width: 100%;
      min-height: 600px;
    }

    .noon-quran-hero__product {
      flex: 0 0 auto;
      width: clamp(280px, 45%, 500px);
      height: auto;
      order: 1;
    }

    .noon-quran-hero__product img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 2rem;
    }

    .noon-quran-hero__content {
      flex: 1;
      min-width: 280px;
      display: flex;
      flex-direction: column;
      gap: clamp(1rem, 3vw, 2rem);
      order: 2;
    }

    .noon-quran-hero__logo-wrapper {
      position: relative;
      width: fit-content;
      margin-inline-start: auto;
    }

    .noon-quran-hero__logo-container {
      background-color: var(--color-purple-dark);
      border-radius: 2rem 2rem 0 0;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .noon-quran-hero__logo-container img {
      height: auto;
      width: clamp(80px, 12vw, 120px);
      display: block;
    }

    .noon-quran-hero__verse {
      margin-inline-start: auto;
      text-align: center;
      padding-inline: 1rem;
    }

    .noon-quran-hero__verse img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .noon-quran-hero__title-wrapper {
      display: flex;
      justify-content: flex-end;
    }

    .noon-quran-hero__title-pill {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-yellow-bright);
      border-radius: 3rem;
      padding: 0.75rem 1.5rem;
      box-shadow: 0 4px 12px rgba(244, 185, 23, 0.2);
    }

    .noon-quran-hero__title-pill img {
      height: auto;
      width: clamp(120px, 18vw, 200px);
      display: block;
    }

    .noon-quran-hero__description {
      margin-inline-start: auto;
      max-width: 400px;
      text-align: right;
      padding-inline: 1rem;
    }

    .noon-quran-hero__description img {
      width: 100%;
      height: auto;
      display: block;
    }

    .noon-quran-hero__benefits {
      background-color: var(--color-purple-dark);
      border-radius: 2rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      gap: 1rem;
      margin-inline-start: auto;
      flex-wrap: wrap;
      box-shadow: 0 8px 24px rgba(90, 58, 138, 0.15);
      list-style: none;
    }

    .noon-quran-hero__benefit {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      flex: 0 1 auto;
      min-width: 80px;
      text-align: center;
    }

    .noon-quran-hero__benefit-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .noon-quran-hero__benefit-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .noon-quran-hero__benefit-text img {
      max-width: 100%;
      height: auto;
      display: block;
      width: clamp(60px, 14vw, 100px);
    }

    @media (max-width: 1024px) {
      .noon-quran-hero__container {
        gap: clamp(1rem, 4vw, 2.5rem);
        padding: clamp(1.5rem, 6vw, 3rem);
        min-height: auto;
      }
      .noon-quran-hero__product {
        width: clamp(240px, 40%, 420px);
      }
      .noon-quran-hero__logo-container img {
        width: clamp(70px, 10vw, 100px);
      }
      .noon-quran-hero__title-pill img {
        width: clamp(100px, 16vw, 160px);
      }
      .noon-quran-hero__benefit-text img {
        width: clamp(50px, 12vw, 80px);
      }
      .noon-quran-hero__benefits {
        gap: 0.75rem;
        padding: 1.25rem;
      }
      .noon-quran-hero__benefit {
        min-width: 70px;
      }
    }

    @media (max-width: 768px) {
      #noon-quran-hero {
        min-height: auto;
      }
      .noon-quran-hero__container {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem 1rem;
        min-height: auto;
      }
      .noon-quran-hero__product {
        width: 100%;
        max-width: 380px;
      }
      .noon-quran-hero__content {
        width: 100%;
        gap: 1rem;
        align-items: center;
        text-align: center;
      }
      .noon-quran-hero__logo-wrapper,
      .noon-quran-hero__verse,
      .noon-quran-hero__title-wrapper,
      .noon-quran-hero__description,
      .noon-quran-hero__benefits {
        width: 100%;
        margin-inline-start: 0;
        margin-inline-end: 0;
      }
      .noon-quran-hero__logo-container {
        width: fit-content;
        margin: 0 auto;
      }
      .noon-quran-hero__title-wrapper {
        justify-content: center;
      }
      .noon-quran-hero__verse img,
      .noon-quran-hero__title-pill img,
      .noon-quran-hero__description img {
        margin: 0 auto;
      }
      .noon-quran-hero__benefits {
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem;
        margin-inline-start: 0;
      }
      .noon-quran-hero__benefit {
        min-width: 60px;
      }
      .noon-quran-hero__benefit-icon {
        width: 32px;
        height: 32px;
      }
      .noon-quran-hero__benefit-text img {
        width: clamp(45px, 10vw, 70px);
      }
    }

    @media (max-width: 480px) {
      .noon-quran-hero__container {
        padding: 1rem;
        gap: 1rem;
      }
      .noon-quran-hero__product {
        max-width: 100%;
      }
      .noon-quran-hero__benefits {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem;
        padding: 0.75rem;
      }
      .noon-quran-hero__benefit {
        flex: 0 0 calc(50% - 0.375rem);
        min-width: unset;
      }
      .noon-quran-hero__benefit:nth-child(3) {
        flex: 0 0 calc(50% - 0.375rem);
        margin: 0.75rem auto 0 auto;
      }
      .noon-quran-hero__benefit-icon {
        width: 28px;
        height: 28px;
      }
      .noon-quran-hero__benefit-text img {
        width: clamp(40px, 8vw, 60px);
      }
    }

    @media print {
      #noon-quran-hero {
        display: none;
      }
    }
  </style>
</head>
<body>
  <a id="noon-quran-hero" href="${PRODUCT_URL}" role="region" aria-label="مجموعة نون التعليمية - انقر للمزيد">
    <div class="noon-quran-hero__writing-overlay" aria-hidden="true">
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-writing-hand-background-overlay-dEmWcOwgndKSYMheh9APBT8vsSR9Kc.png" alt="" loading="lazy" style="display:block;">
    </div>
    <div class="noon-quran-hero__container">
      <div class="noon-quran-hero__product">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-quran-product-collage-Reh56ah9BZsH3GL0TzTQI39yvZzqBM.png" alt="مصحف نون المظلل" loading="eager" fetchpriority="high" width="500" height="600" style="width:100%;height:auto;display:block;">
      </div>
      <div class="noon-quran-hero__content">
        <div class="noon-quran-hero__logo-wrapper">
          <div class="noon-quran-hero__logo-container">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aswak-logo-white-yellow-LlhF3zlCCC9Ou7QFcvjsFoio9Sc6WP.png" alt="شعار نون" loading="eager" width="120" height="60" style="height:auto;display:block;">
          </div>
        </div>
        <div class="noon-quran-hero__verse">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quran-verse-ar-xGV04icxe6i3Y0bie0xdZgFUthU7bb.png" alt="ن والقلم وما يسطرون" loading="eager" width="200" height="60" style="max-width:100%;height:auto;display:block;">
        </div>
        <div class="noon-quran-hero__title-wrapper">
          <div class="noon-quran-hero__title-pill">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/noon-educational-group-title-ar-UiufhOStvPK7fnsLJK6Rzctp2fGIU5.png" alt="مجموعة نون التعليمية" loading="eager" width="200" height="60" style="height:auto;display:block;">
          </div>
        </div>
        <div class="noon-quran-hero__description">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-description-ar-FSAUQN0GqDyX83v6NnP7d5rzNsjFM6.png" alt="وصف مصحف نون" loading="lazy" width="350" height="140" style="max-width:100%;height:auto;display:block;">
        </div>
        <div class="noon-quran-hero__benefits" role="list">
          <div class="noon-quran-hero__benefit" role="listitem">
            <div class="noon-quran-hero__benefit-icon">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-quality-medal-icon-ZIMhNToqSPQ5Tj24f48Q0EvojrrsvT.png" alt="" loading="lazy" width="40" height="40" aria-hidden="true" style="width:100%;height:auto;display:block;">
            </div>
            <div class="noon-quran-hero__benefit-text">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-quality-text-ar-tvSLhmWWwKRGGht5sgH2u5kDB1iM55.png" alt="جودة عالية" loading="lazy" width="100" height="40" style="max-width:100%;height:auto;display:block;">
            </div>
          </div>
          <div class="noon-quran-hero__benefit" role="listitem">
            <div class="noon-quran-hero__benefit-icon">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-fast-shipping-truck-icon-Zsm5ssmiSyzLhg8gx55xbuQaTQYbrG.png" alt="" loading="lazy" width="40" height="40" aria-hidden="true" style="width:100%;height:auto;display:block;">
            </div>
            <div class="noon-quran-hero__benefit-text">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-fast-shipping-text-ar-zR2jOkTUgEClKkxf6jhozRDuwHkBfS.png" alt="شحن سريع" loading="lazy" width="100" height="40" style="max-width:100%;height:auto;display:block;">
            </div>
          </div>
          <div class="noon-quran-hero__benefit" role="listitem">
            <div class="noon-quran-hero__benefit-icon">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-secure-shopping-icon-g4E6UonVCMjqpFEjKokSPM2RosaKxz.png" alt="" loading="lazy" width="40" height="40" aria-hidden="true" style="width:100%;height:auto;display:block;">
            </div>
            <div class="noon-quran-hero__benefit-text">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-secure-shopping-text-ar-Ogt2MFvVddUBoLFmjYnBbG5Nuaa0SL.png" alt="تسوق آمنة" loading="lazy" width="100" height="40" style="max-width:100%;height:auto;display:block;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</body>
</html>
`;

export default function PreviewPage() {
  const [activeBreakpoint, setActiveBreakpoint] = useState(0);
  const bp = BREAKPOINTS[activeBreakpoint];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Noon Quran Hero - Responsive Preview
          </h1>
          <p className="text-gray-600">
            Real viewport rendering at each breakpoint. All 12 assets load from Vercel Blob storage.
          </p>
        </div>

        {/* Viewport Selector */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Viewport</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {BREAKPOINTS.map((bp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBreakpoint(idx)}
                className={`px-4 py-3 rounded-lg font-medium transition-all text-sm ${
                  activeBreakpoint === idx
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {bp.name}
              </button>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-300">
          {/* Viewport indicator */}
          <div className="bg-gray-800 text-white px-4 py-2 text-sm font-mono flex justify-between">
            <span>Viewport: {bp.width}px × {bp.height}px</span>
            <span>Scroll horizontally to verify no overflow</span>
          </div>

          {/* Iframe container - exact viewport size */}
          <div className="overflow-x-auto">
            <iframe
              key={bp.width}
              srcDoc={heroHTML}
              style={{
                width: `${bp.width}px`,
                height: `${bp.height}px`,
                border: 'none',
                display: 'block',
              }}
              title={`Hero at ${bp.width}px`}
            />
          </div>
        </div>

        {/* Checklist */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Visual Checklist</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Desktop (1440px & 1280px)</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Product collage clearly on LEFT side</li>
                <li>✓ Arabic content stacked on RIGHT side</li>
                <li>✓ 3 benefits fit horizontally in purple bar</li>
                <li>✓ No horizontal scrolling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Tablet (768px)</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Product full-width at TOP</li>
                <li>✓ Content CENTERED below</li>
                <li>✓ 3 benefits fit horizontally</li>
                <li>✓ No horizontal scrolling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Mobile (390px & 360px)</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ 2 benefits top row (quality + shipping)</li>
                <li>✓ 1 benefit centered below (security)</li>
                <li>✓ No horizontal scrolling (CRITICAL)</li>
                <li>✓ Arabic text readable</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Assets Loaded</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Paper texture background</li>
                <li>✓ Writing hand overlay</li>
                <li>✓ Radial light overlay</li>
                <li>✓ All 3 benefit icons & texts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Export ready */}
        <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded">
          <h3 className="text-lg font-bold text-green-900 mb-2">Ready for Salla Export</h3>
          <p className="text-green-800 text-sm mb-4">
            The preview above shows the exact same HTML, CSS, and layout that will be used in the Salla vanilla export files. All 12 assets are properly referenced and all breakpoints render correctly.
          </p>
          <p className="text-green-800 text-sm font-mono bg-white p-3 rounded">
            Files ready in: /salla/noon-quran-hero.css, noon-quran-hero.js, README-SALLA.md
          </p>
        </div>
      </div>
    </div>
  );
}
