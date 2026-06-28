'use client';

import { useState, useEffect } from 'react';

const ASSETS = {
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aswak-logo-white-yellow-LlhF3zlCCC9Ou7QFcvjsFoio9Sc6WP.png',
  productCollage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-quran-product-collage-Reh56ah9BZsH3GL0TzTQI39yvZzqBM.png',
  writingOverlay: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-writing-hand-background-overlay-dEmWcOwgndKSYMheh9APBT8vsSR9Kc.png',
  quranVerse: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quran-verse-ar-xGV04icxe6i3Y0bie0xdZgFUthU7bb.png',
  noonTitle: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/noon-educational-group-title-ar-UiufhOStvPK7fnsLJK6Rzctp2fGIU5.png',
  description: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-description-ar-FSAUQN0GqDyX83v6NnP7d5rzNsjFM6.png',
  qualityIcon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-quality-medal-icon-ZIMhNToqSPQ5Tj24f48Q0EvojrrsvT.png',
  qualityText: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-quality-text-ar-tvSLhmWWwKRGGht5sgH2u5kDB1iM55.png',
  shippingIcon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-fast-shipping-truck-icon-Zsm5ssmiSyzLhg8gx55xbuQaTQYbrG.png',
  shippingText: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-fast-shipping-text-ar-zR2jOkTUgEClKkxf6jhozRDuwHkBfS.png',
  securityIcon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-secure-shopping-icon-g4E6UonVCMjqpFEjKokSPM2RosaKxz.png',
  securityText: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benefit-secure-shopping-text-ar-Ogt2MFvVddUBoLFmjYnBbG5Nuaa0SL.png',
};

const BREAKPOINTS = [
  { name: '1440px (Desktop)', width: 1440, label: 'xl' },
  { name: '1280px (Desktop)', width: 1280, label: 'lg' },
  { name: '768px (Tablet)', width: 768, label: 'md' },
  { name: '390px (Mobile)', width: 390, label: 'sm' },
  { name: '360px (Mobile)', width: 360, label: 'xs' },
];

export default function NoonPreview() {
  const [activeBreakpoint, setActiveBreakpoint] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const bp = BREAKPOINTS[activeBreakpoint];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <style>{`
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
          min-height: 600px;
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          line-height: 1.6;
        }

        #noon-quran-hero * {
          box-sizing: border-box;
        }

        #noon-quran-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.4);
          pointer-events: none;
          z-index: 1;
        }

        #noon-quran-hero::after {
          content: "";
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
          flex-direction: row-reverse;
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
          align-items: center;
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
          flex: 1;
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

        .noon-quran-hero__cta {
          display: none;
          margin-inline-start: auto;
          background-color: var(--color-yellow-bright);
          color: #2d1b4e;
          border: none;
          border-radius: 1.5rem;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(244, 185, 23, 0.3);
          text-decoration: none;
        }

        #noon-quran-hero a {
          cursor: pointer;
          text-decoration: none;
          color: inherit;
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
            order: 1;
          }
          .noon-quran-hero__content {
            width: 100%;
            order: 2;
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
            flex-wrap: wrap;
            gap: 0.75rem;
            padding: 0.75rem;
          }
          .noon-quran-hero__benefit {
            flex: 0 0 calc(50% - 0.375rem);
            min-width: unset;
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
      `}</style>

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Noon Quran Hero Preview
        </h1>
        <p className="text-gray-600 mb-6">
          Visual testing across responsive breakpoints. All assets loaded from Vercel Blob storage.
        </p>
      </div>

      {/* Viewport Selector */}
      <div className="max-w-6xl mx-auto mb-8 bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Viewport</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
          {BREAKPOINTS.map((breakpoint, idx) => (
            <button
              key={idx}
              onClick={() => setActiveBreakpoint(idx)}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                activeBreakpoint === idx
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-sm md:text-base">{breakpoint.name}</div>
              <div className="text-xs opacity-80">{breakpoint.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Preview Container */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-gray-300 relative">
          {/* Viewport Size Indicator */}
          <div className="absolute top-3 right-3 z-50 bg-black text-white px-3 py-1 rounded-full text-sm font-mono">
            {bp.width}px
          </div>

          {/* Hero Section in iframe-like container */}
          <div
            style={{ width: `${bp.width}px` }}
            className="mx-auto bg-white overflow-x-hidden"
          >
            <section
              id="noon-quran-hero"
              dir="rtl"
              lang="ar"
              role="region"
              aria-label="مجموعة نون التعليمية"
            >
              <div className="noon-quran-hero__writing-overlay" aria-hidden="true">
                <img
                  src={ASSETS.writingOverlay}
                  alt=""
                  loading="lazy"
                  style={{ display: 'block' }}
                />
              </div>

              <div className="noon-quran-hero__container">
                {/* Product Collage */}
                <div className="noon-quran-hero__product">
                  <img
                    src={ASSETS.productCollage}
                    alt="مصحف نون المظلل"
                    loading="eager"
                    fetchPriority="high"
                    width="500"
                    height="600"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>

                {/* Content */}
                <div className="noon-quran-hero__content">
                  {/* Logo */}
                  <div className="noon-quran-hero__logo-wrapper">
                    <div className="noon-quran-hero__logo-container">
                      <img
                        src={ASSETS.logo}
                        alt="شعار نون"
                        loading="eager"
                        width="120"
                        height="60"
                        style={{ height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>

                  {/* Verse */}
                  <div className="noon-quran-hero__verse">
                    <img
                      src={ASSETS.quranVerse}
                      alt="ن والقلم وما يسطرون"
                      loading="eager"
                      width="200"
                      height="60"
                      style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>

                  {/* Title */}
                  <div className="noon-quran-hero__title-wrapper">
                    <div className="noon-quran-hero__title-pill">
                      <img
                        src={ASSETS.noonTitle}
                        alt="مجموعة نون"
                        loading="eager"
                        width="200"
                        height="60"
                        style={{ height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="noon-quran-hero__description">
                    <img
                      src={ASSETS.description}
                      alt="وصف المنتج"
                      loading="lazy"
                      width="350"
                      height="140"
                      style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>

                  {/* Benefits */}
                  <div className="noon-quran-hero__benefits" role="list">
                    {/* Quality */}
                    <div className="noon-quran-hero__benefit" role="listitem">
                      <div className="noon-quran-hero__benefit-icon">
                        <img
                          src={ASSETS.qualityIcon}
                          alt=""
                          loading="lazy"
                          width="40"
                          height="40"
                          aria-hidden="true"
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                      <div className="noon-quran-hero__benefit-text">
                        <img
                          src={ASSETS.qualityText}
                          alt="جودة عالية"
                          loading="lazy"
                          width="100"
                          height="40"
                          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                    </div>

                    {/* Shipping */}
                    <div className="noon-quran-hero__benefit" role="listitem">
                      <div className="noon-quran-hero__benefit-icon">
                        <img
                          src={ASSETS.shippingIcon}
                          alt=""
                          loading="lazy"
                          width="40"
                          height="40"
                          aria-hidden="true"
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                      <div className="noon-quran-hero__benefit-text">
                        <img
                          src={ASSETS.shippingText}
                          alt="شحن سريع"
                          loading="lazy"
                          width="100"
                          height="40"
                          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                    </div>

                    {/* Security */}
                    <div className="noon-quran-hero__benefit" role="listitem">
                      <div className="noon-quran-hero__benefit-icon">
                        <img
                          src={ASSETS.securityIcon}
                          alt=""
                          loading="lazy"
                          width="40"
                          height="40"
                          aria-hidden="true"
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                      <div className="noon-quran-hero__benefit-text">
                        <img
                          src={ASSETS.securityText}
                          alt="تسوق آمنة"
                          loading="lazy"
                          width="100"
                          height="40"
                          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Inspection Checklist */}
      <div className="max-w-6xl mx-auto mt-12 bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Inspection Checklist</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">🖥️</span> 1440px Desktop
            </h3>
            <ul className="space-y-2 text-gray-700 ml-8">
              <li>✓ Product collage on left (RTL right visual position)</li>
              <li>✓ Logo, verse, title, description stacked on right</li>
              <li>✓ 3 benefit icons with Arabic text aligned horizontally</li>
              <li>✓ Purple background for benefits bar</li>
              <li>✓ No horizontal scrolling</li>
              <li>✓ All Arabic text clearly readable</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">📱</span> 768px Tablet
            </h3>
            <ul className="space-y-2 text-gray-700 ml-8">
              <li>✓ Product collage moves to top, full width</li>
              <li>✓ Content reflows below, centered</li>
              <li>✓ All sections remain aligned center</li>
              <li>✓ Benefits bar centered with 3 items visible</li>
              <li>✓ No horizontal scrolling</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">📱</span> 390px Mobile
            </h3>
            <ul className="space-y-2 text-gray-700 ml-8">
              <li>✓ Product collage 100% width, top positioned</li>
              <li>✓ All content sections centered below</li>
              <li>✓ Logo, verse, title, description visually balanced</li>
              <li>✓ Benefit items 2x2 grid (quality + shipping on top row, security below)</li>
              <li>✓ No overlap or clipping</li>
              <li>✓ Arabic text readable without zooming</li>
              <li>✓ No horizontal scrollbar</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">📱</span> 360px Mobile (Extra Small)
            </h3>
            <ul className="space-y-2 text-gray-700 ml-8">
              <li>✓ Same layout as 390px (stacked vertical)</li>
              <li>✓ Product collage responsive to 360px width</li>
              <li>✓ Text remains readable at small size</li>
              <li>✓ Benefit grid adapts (2 columns maintain spacing)</li>
              <li>✓ All images have proper width/height to prevent CLS</li>
              <li>✓ No horizontal scrolling whatsoever</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Before Export — Verify:</h3>
            <ul className="space-y-2 text-gray-700 ml-8">
              <li>✓ All 12 images load without 404 errors</li>
              <li>✓ Product collage renders with proper aspect ratio</li>
              <li>✓ Logo background is dark purple (#5a3a8a)</li>
              <li>✓ Yellow title pill (#f4b917) is visible</li>
              <li>✓ Benefits bar background matches purple</li>
              <li>✓ No layout shift as images load (CLS prevention working)</li>
              <li>✓ Entire hero is clickable (cursor pointer on container)</li>
              <li>✓ Arabic text is right-aligned everywhere</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-12 mb-8 text-center text-gray-600">
        <p className="text-sm">
          This is a v0 preview only. The final Salla files (CSS + vanilla JS) remain unchanged in /salla/ directory.
        </p>
      </div>
    </div>
  );
}
