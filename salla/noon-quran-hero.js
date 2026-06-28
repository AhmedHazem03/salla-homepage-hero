/**
 * Noon Quran Hero Section - Salla Integration
 * Vanilla JavaScript + CSS injection for Salla e-commerce stores
 * 
 * Production-ready, scoped, safe, RTL-aware, performance-optimized
 */

(function() {
  'use strict';

  // ==================== CONFIGURATION ====================
  
  const PRODUCT_URL = "https://YOUR-STORE-DOMAIN.com/products/PRODUCT-SLUG";
  const ASSET_BASE_URL = "https://YOUR-CDN-OR-SALLA-MEDIA-URL/";
  const INSERT_BEFORE_SELECTOR = ""; // Leave empty to auto-detect
  const SHOW_CTA = false; // Set to true to display the CTA button
  
  // Asset filenames
  const ASSETS = {
    logo: "aswak-logo-white-yellow.png",
    productCollage: "hero-quran-product-collage.png",
    paperTexture: "hero-paper-background-texture.png",
    radialOverlay: "optional-hero-radial-light-overlay.png",
    writingOverlay: "hero-writing-hand-background-overlay.png",
    quranVerse: "quran-verse-ar.png",
    noonTitle: "noon-educational-group-title-ar.png",
    description: "hero-description-ar.png",
    qualityIcon: "benefit-quality-medal-icon.png",
    qualityText: "benefit-quality-text-ar.png",
    shippingIcon: "benefit-fast-shipping-truck-icon.png",
    shippingText: "benefit-fast-shipping-text-ar.png",
    securityIcon: "benefit-secure-shopping-icon.png",
    securityText: "benefit-secure-shopping-text-ar.png"
  };

  // ==================== UTILITIES ====================

  /**
   * Build full asset URL with base URL
   */
  function getAssetUrl(filename) {
    if (!filename) return "";
    const base = ASSET_BASE_URL.endsWith("/") ? ASSET_BASE_URL : ASSET_BASE_URL + "/";
    return base + filename;
  }

  /**
   * Check if element exists and is visible
   */
  function elementExists(selector) {
    const el = document.querySelector(selector);
    return el && el.offsetParent !== null;
  }

  /**
   * Find safe insertion point
   */
  function findInsertionPoint() {
    // Try custom selector first
    if (INSERT_BEFORE_SELECTOR) {
      const custom = document.querySelector(INSERT_BEFORE_SELECTOR);
      if (custom && custom.parentElement) {
        return { parent: custom.parentElement, before: custom };
      }
    }

    // Try main element (semantic)
    const main = document.querySelector("main");
    if (main) {
      const firstChild = main.firstElementChild;
      return { parent: main, before: firstChild };
    }

    // Try common homepage wrappers
    const selectors = [
      '[role="main"]',
      ".page-content",
      "#page-content",
      ".homepage-content",
      ".site-content"
    ];

    for (const selector of selectors) {
      const parent = document.querySelector(selector);
      if (parent) {
        return { parent, before: parent.firstElementChild };
      }
    }

    // Fallback: insert after body (before other content)
    const body = document.body;
    if (body) {
      return { parent: body, before: body.firstElementChild };
    }

    return null;
  }

  /**
   * Check if we're on homepage
   */
  function isHomepage() {
    const path = window.location.pathname;
    return path === "/" || path === "/ar" || path === "/en";
  }

  /**
   * Create hero HTML structure
   */
  function createHeroHTML() {
    const container = document.createElement("section");
    container.id = "noon-quran-hero";
    container.dir = "rtl";
    container.lang = "ar";
    container.setAttribute("role", "region");
    container.setAttribute("aria-label", "مجموعة نون التعليمية - الكتاب المقدس للقرآن الكريم");

    container.innerHTML = `
      <div class="noon-quran-hero__writing-overlay" aria-hidden="true">
        <img 
          src="${getAssetUrl(ASSETS.writingOverlay)}"
          alt=""
          loading="lazy"
          decoding="async"
          style="display:block;"
        />
      </div>

      <div class="noon-quran-hero__container">
        <!-- Product Collage (Left / RTL Right) -->
        <div class="noon-quran-hero__product">
          <img
            src="${getAssetUrl(ASSETS.productCollage)}"
            alt="مصحف نون المظلل مع فنان وكتاب الكتاب الكريم"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="500"
            height="600"
            style="width:100%;height:auto;display:block;"
          />
        </div>

        <!-- Content (Right / RTL Left) -->
        <div class="noon-quran-hero__content">
          <!-- Logo -->
          <div class="noon-quran-hero__logo-wrapper">
            <div class="noon-quran-hero__logo-container">
              <img
                src="${getAssetUrl(ASSETS.logo)}"
                alt="شعار مجموعة نون التعليمية"
                loading="eager"
                decoding="async"
                width="120"
                height="60"
                style="height:auto;display:block;"
              />
            </div>
          </div>

          <!-- Quran Verse -->
          <div class="noon-quran-hero__verse">
            <img
              src="${getAssetUrl(ASSETS.quranVerse)}"
              alt="آية قرآنية: ن والقلم وما يسطرون"
              loading="eager"
              decoding="async"
              width="200"
              height="60"
              style="max-width:100%;height:auto;display:block;"
            />
          </div>

          <!-- Title Pill -->
          <div class="noon-quran-hero__title-wrapper">
            <div class="noon-quran-hero__title-pill">
              <img
                src="${getAssetUrl(ASSETS.noonTitle)}"
                alt="مجموعة نون التعليمية"
                loading="eager"
                decoding="async"
                width="200"
                height="60"
                style="height:auto;display:block;"
              />
            </div>
          </div>

          <!-- Description -->
          <div class="noon-quran-hero__description">
            <img
              src="${getAssetUrl(ASSETS.description)}"
              alt="وصف مصحف نون المظلل: فكرة إبداعية في عالم القراءات الكريمة يساعدك بطريقة تحفيظية على الالتزام بتلاوة وحفظ القرآن الكريم والتدبر في معانيه والعيش في رحابه بخشوع واطمئنان"
              loading="lazy"
              decoding="async"
              width="350"
              height="140"
              style="max-width:100%;height:auto;display:block;"
            />
          </div>

          <!-- Benefits Bar -->
          <div class="noon-quran-hero__benefits" role="list">
            <!-- Quality -->
            <div class="noon-quran-hero__benefit" role="listitem">
              <div class="noon-quran-hero__benefit-icon">
                <img
                  src="${getAssetUrl(ASSETS.qualityIcon)}"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                  aria-hidden="true"
                  style="width:100%;height:auto;display:block;"
                />
              </div>
              <div class="noon-quran-hero__benefit-text">
                <img
                  src="${getAssetUrl(ASSETS.qualityText)}"
                  alt="جودة عالية"
                  loading="lazy"
                  decoding="async"
                  width="100"
                  height="40"
                  style="max-width:100%;height:auto;display:block;"
                />
              </div>
            </div>

            <!-- Shipping -->
            <div class="noon-quran-hero__benefit" role="listitem">
              <div class="noon-quran-hero__benefit-icon">
                <img
                  src="${getAssetUrl(ASSETS.shippingIcon)}"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                  aria-hidden="true"
                  style="width:100%;height:auto;display:block;"
                />
              </div>
              <div class="noon-quran-hero__benefit-text">
                <img
                  src="${getAssetUrl(ASSETS.shippingText)}"
                  alt="شحن سريع"
                  loading="lazy"
                  decoding="async"
                  width="100"
                  height="40"
                  style="max-width:100%;height:auto;display:block;"
                />
              </div>
            </div>

            <!-- Security -->
            <div class="noon-quran-hero__benefit" role="listitem">
              <div class="noon-quran-hero__benefit-icon">
                <img
                  src="${getAssetUrl(ASSETS.securityIcon)}"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                  aria-hidden="true"
                  style="width:100%;height:auto;display:block;"
                />
              </div>
              <div class="noon-quran-hero__benefit-text">
                <img
                  src="${getAssetUrl(ASSETS.securityText)}"
                  alt="تسوق آمنة"
                  loading="lazy"
                  decoding="async"
                  width="100"
                  height="40"
                  style="max-width:100%;height:auto;display:block;"
                />
              </div>
            </div>
          </div>

          <!-- CTA Button (hidden by default) -->
          <a href="${PRODUCT_URL}" class="noon-quran-hero__cta" ${SHOW_CTA ? '' : 'style="display:none;"'}>
            اطلب الآن
          </a>
        </div>
      </div>
    `;

    return container;
  }

  /**
   * Inject CSS into document
   */
  function injectCSS() {
    // Check if already injected
    if (document.getElementById("noon-quran-hero-styles")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "noon-quran-hero-styles";
    style.textContent = `
/* Noon Quran Hero Section - Salla Integration */
#noon-quran-hero {
  --color-purple-dark: #5a3a8a;
  --color-yellow-bright: #f4b917;
  --color-ivory-warm: #f5f1ed;
  --color-text-dark: #2d1b4e;
  --color-text-light: #ffffff;
  --radius-lg: 2rem;
  --radius-md: 1.5rem;
  --spacing-base: 1rem;
  direction: rtl;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: var(--color-ivory-warm);
  min-height: 600px;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  border: none;
  box-sizing: border-box;
}

#noon-quran-hero * {
  box-sizing: border-box;
}

#noon-quran-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("${getAssetUrl(ASSETS.paperTexture)}");
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.4;
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
  right: 0;
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
  max-width: 100%;
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
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  width: auto;
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
  border-radius: var(--radius-lg);
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
  color: var(--color-text-dark);
  border: none;
  border-radius: var(--radius-md);
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(244, 185, 23, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  display: inline-block;
}

.noon-quran-hero__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(244, 185, 23, 0.4);
}

.noon-quran-hero__cta:active {
  transform: translateY(0);
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
    padding: 0;
  }
  #noon-quran-hero::before {
    background-attachment: scroll;
  }
  .noon-quran-hero__container {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
    max-width: 100%;
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

@media (prefers-reduced-motion: reduce) {
  .noon-quran-hero__cta {
    transition: none;
  }
  .noon-quran-hero__cta:hover {
    transform: none;
  }
}

@media print {
  #noon-quran-hero {
    display: none;
  }
}
    `;
    document.head.appendChild(style);
  }

  /**
   * Initialize and render hero
   */
  function init() {
    // Safety checks
    if (!isHomepage()) {
      return;
    }

    if (document.getElementById("noon-quran-hero")) {
      return; // Already rendered
    }

    // Validate URLs
    if (PRODUCT_URL.includes("YOUR-STORE-DOMAIN") || ASSET_BASE_URL.includes("YOUR-CDN-OR-SALLA")) {
      console.warn("[Noon Quran Hero] Please configure PRODUCT_URL and ASSET_BASE_URL before deployment.");
      return;
    }

    // Inject styles
    injectCSS();

    // Create hero element
    const hero = createHeroHTML();

    // Find insertion point
    const insertionPoint = findInsertionPoint();
    if (!insertionPoint) {
      console.warn("[Noon Quran Hero] Could not find safe insertion point.");
      return;
    }

    // Insert hero
    if (insertionPoint.before) {
      insertionPoint.parent.insertBefore(hero, insertionPoint.before);
    } else {
      insertionPoint.parent.appendChild(hero);
    }

    // Add click handler to make entire hero clickable to product
    hero.addEventListener("click", function(e) {
      if (e.target.tagName !== "A") {
        window.location.href = PRODUCT_URL;
      }
    }, false);
  }

  // ==================== LIFECYCLE ====================

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
