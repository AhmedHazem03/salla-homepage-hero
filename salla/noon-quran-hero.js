(function () {
  'use strict';

  /* Replace only these two values before pasting into Salla Custom JavaScript. */
  const PRODUCT_URL = 'https://YOUR-STORE-DOMAIN.com/products/PRODUCT-SLUG';
  const ASSET_BASE_URL = 'https://YOUR-CDN-OR-SALLA-MEDIA-URL/';

  const ASSETS = {
    paper: 'hero-paper-background-texture.png',
    radial: 'optional-hero-radial-light-overlay.png',
    writing: 'hero-writing-hand-background-overlay.png',
    product: 'hero-quran-product-collage.png',
    logo: 'aswak-logo-white-yellow.png',
    verse: 'quran-verse-ar.png',
    title: 'noon-educational-group-title-ar.png',
    description: 'hero-description-ar.png',
    qualityIcon: 'benefit-quality-medal-icon.png',
    qualityText: 'benefit-quality-text-ar.png',
    shippingIcon: 'benefit-fast-shipping-truck-icon.png',
    shippingText: 'benefit-fast-shipping-text-ar.png',
    securityIcon: 'benefit-secure-shopping-icon.png',
    securityText: 'benefit-secure-shopping-text-ar.png'
  };

  const HERO_ID = 'noon-quran-hero';

  function isConfigured() {
    return !PRODUCT_URL.includes('YOUR-STORE-DOMAIN') &&
      !ASSET_BASE_URL.includes('YOUR-CDN-OR-SALLA-MEDIA-URL');
  }

  function isHomepage() {
    const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
    return pathname === '/' || pathname === '/ar' || pathname === '/en';
  }

  function assetUrl(key) {
    const baseUrl = ASSET_BASE_URL.endsWith('/') ? ASSET_BASE_URL : ASSET_BASE_URL + '/';
    return baseUrl + ASSETS[key];
  }

  function image(key, alt, width, height, attributes) {
    return '<img src="' + assetUrl(key) + '" alt="' + alt + '" width="' + width + '" height="' + height + '" decoding="async"' + (attributes || '') + '>';
  }

  function benefit(iconKey, textKey, alt, iconWidth, iconHeight, textWidth, textHeight) {
    return '<div class="noon-quran-hero__benefit" role="listitem">' +
      '<span class="noon-quran-hero__benefit-icon">' + image(iconKey, '', iconWidth, iconHeight, ' aria-hidden="true" loading="lazy"') + '</span>' +
      '<span class="noon-quran-hero__benefit-copy">' + image(textKey, alt, textWidth, textHeight, ' loading="lazy"') + '</span>' +
      '</div>';
  }

  function render() {
    if (!isConfigured() || !isHomepage() || document.getElementById(HERO_ID)) return;

    const main = document.querySelector('main') || document.querySelector('[role="main"]');
    if (!main) return;

    const section = document.createElement('section');
    section.id = HERO_ID;
    section.dir = 'rtl';
    section.lang = 'ar';
    section.setAttribute('aria-label', 'مجموعة نون التعليمية');

    section.innerHTML =
      '<a class="noon-quran-hero__link" href="' + PRODUCT_URL + '" aria-label="مجموعة نون التعليمية - عرض مصحف نون المظلل">' +
        '<span class="noon-quran-hero__layer noon-quran-hero__paper" aria-hidden="true">' + image('paper', '', 1500, 750, '') + '</span>' +
        '<span class="noon-quran-hero__layer noon-quran-hero__radial" aria-hidden="true">' + image('radial', '', 1272, 750, ' loading="lazy"') + '</span>' +
        '<span class="noon-quran-hero__layer noon-quran-hero__writing" aria-hidden="true">' + image('writing', '', 342, 741, ' loading="lazy"') + '</span>' +
        '<div class="noon-quran-hero__product">' + image('product', 'مصحف نون المظلل', 731, 750, ' loading="eager" fetchpriority="high"') + '</div>' +
        '<div class="noon-quran-hero__content">' +
          '<div class="noon-quran-hero__logo-panel">' + image('logo', 'شعار أسواق', 223, 44, '') + '</div>' +
          '<div class="noon-quran-hero__verse">' + image('verse', 'ن والقلم وما يسطرون', 349, 44, '') + '</div>' +
          '<div class="noon-quran-hero__title">' + image('title', 'مجموعة نون التعليمية', 411, 47, '') + '</div>' +
          '<div class="noon-quran-hero__description">' + image('description', 'مصحف نون المظلل، فكرة إبداعية تساعد على الالتزام بتلاوة وحفظ وتدبر القرآن الكريم', 594, 286, '') + '</div>' +
          '<div class="noon-quran-hero__benefits" role="list">' +
            benefit('qualityIcon', 'qualityText', 'طباعة فاخرة عالية الجودة', 30, 40, 84, 40) +
            benefit('shippingIcon', 'shippingText', 'شحن سريع لكافة المناطق', 43, 25, 94, 38) +
            benefit('securityIcon', 'securityText', 'كفالة ذهبية وتسوق آمن', 29, 41, 83, 39) +
          '</div>' +
        '</div>' +
      '</a>';

    main.insertBefore(section, main.firstElementChild || null);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render, { once: true });
  } else {
    render();
  }
}());
