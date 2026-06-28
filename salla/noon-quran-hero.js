(function() {
  'use strict';
  const PRODUCT_URL = "https://YOUR-STORE-DOMAIN.com/products/PRODUCT-SLUG";
  const ASSET_BASE_URL = "https://YOUR-CDN-OR-SALLA-MEDIA-URL/";
  const ASSETS = {
    logo: "aswak-logo-white-yellow.png",
    productCollage: "hero-quran-product-collage.png",
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

  function getUrl(name) {
    return (ASSET_BASE_URL.endsWith('/') ? ASSET_BASE_URL : ASSET_BASE_URL + '/') + ASSETS[name];
  }

  function isHome() {
    const p = window.location.pathname;
    return p === '/' || p === '/ar' || p === '/en';
  }

  function render() {
    if (!isHome() || document.getElementById('noon-quran-hero') || PRODUCT_URL.includes('YOUR-STORE')) return;

    const s = document.createElement('style');
    s.id = 'noon-quran-hero-styles';
    s.textContent = `#noon-quran-hero{--color-purple-dark:#5a3a8a;--color-yellow-bright:#f4b917;--color-ivory-warm:#f5f1ed;direction:rtl;display:flex;flex-direction:column;margin:0;padding:0;background-color:var(--color-ivory-warm);min-height:600px;position:relative;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.6;text-decoration:none;color:inherit}#noon-quran-hero *{box-sizing:border-box}#noon-quran-hero::before{content:"";position:absolute;inset:0;background-color:rgba(255,255,255,.4);pointer-events:none;z-index:1}#noon-quran-hero::after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 800px 600px at 30% 50%,rgba(255,255,255,.3),transparent);pointer-events:none;z-index:2}.noon-quran-hero__writing-overlay{position:absolute;inset:0;opacity:.15;pointer-events:none;z-index:1}.noon-quran-hero__writing-overlay img{position:absolute;bottom:0;right:0;width:100%;height:100%;object-fit:cover;object-position:right center}.noon-quran-hero__container{position:relative;z-index:3;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:clamp(1rem,5vw,4rem);padding:clamp(2rem,8vw,5rem);margin:0 auto;width:100%;min-height:600px}.noon-quran-hero__product{flex:0 0 auto;width:clamp(280px,45%,500px);height:auto;order:1}.noon-quran-hero__product img{width:100%;height:auto;display:block;border-radius:2rem}.noon-quran-hero__content{flex:1;min-width:280px;display:flex;flex-direction:column;gap:clamp(1rem,3vw,2rem);order:2}.noon-quran-hero__logo-wrapper{position:relative;width:fit-content;margin-inline-start:auto}.noon-quran-hero__logo-container{background-color:var(--color-purple-dark);border-radius:2rem 2rem 0 0;padding:1rem;display:flex;align-items:center;justify-content:center}.noon-quran-hero__logo-container img{height:auto;width:clamp(80px,12vw,120px);display:block}.noon-quran-hero__verse{margin-inline-start:auto;text-align:center;padding-inline:1rem}.noon-quran-hero__verse img{max-width:100%;height:auto;display:block}.noon-quran-hero__title-wrapper{display:flex;justify-content:flex-end}.noon-quran-hero__title-pill{display:inline-flex;align-items:center;justify-content:center;background-color:var(--color-yellow-bright);border-radius:3rem;padding:.75rem 1.5rem;box-shadow:0 4px 12px rgba(244,185,23,.2)}.noon-quran-hero__title-pill img{height:auto;width:clamp(120px,18vw,200px);display:block}.noon-quran-hero__description{margin-inline-start:auto;max-width:400px;text-align:right;padding-inline:1rem}.noon-quran-hero__description img{width:100%;height:auto;display:block}.noon-quran-hero__benefits{background-color:var(--color-purple-dark);border-radius:2rem;padding:1.5rem;display:flex;flex-direction:row;justify-content:space-around;align-items:center;gap:1rem;margin-inline-start:auto;flex-wrap:wrap;box-shadow:0 8px 24px rgba(90,58,138,.15);list-style:none}.noon-quran-hero__benefit{display:flex;flex-direction:column;align-items:center;gap:.5rem;flex:1;min-width:80px;text-align:center}.noon-quran-hero__benefit-icon{width:40px;height:40px;display:flex;align-items:center;justify-content:center}.noon-quran-hero__benefit-icon img{width:100%;height:100%;object-fit:contain}.noon-quran-hero__benefit-text img{max-width:100%;height:auto;display:block;width:clamp(60px,14vw,100px)}.noon-quran-hero__cta{display:none;margin-inline-start:auto;background-color:var(--color-yellow-bright);color:#2d1b4e;border:none;border-radius:1.5rem;padding:1rem 2rem;font-size:1rem;font-weight:600;cursor:pointer;box-shadow:0 4px 12px rgba(244,185,23,.3);text-decoration:none}#noon-quran-hero a{cursor:pointer;text-decoration:none;color:inherit}@media(max-width:1024px){.noon-quran-hero__container{gap:clamp(1rem,4vw,2.5rem);padding:clamp(1.5rem,6vw,3rem);min-height:auto}.noon-quran-hero__product{width:clamp(240px,40%,420px)}.noon-quran-hero__logo-container img{width:clamp(70px,10vw,100px)}.noon-quran-hero__title-pill img{width:clamp(100px,16vw,160px)}.noon-quran-hero__benefit-text img{width:clamp(50px,12vw,80px)}.noon-quran-hero__benefits{gap:.75rem;padding:1.25rem}.noon-quran-hero__benefit{min-width:70px}}@media(max-width:768px){#noon-quran-hero{min-height:auto}.noon-quran-hero__container{flex-direction:column;align-items:center;gap:1.5rem;padding:1.5rem 1rem;min-height:auto}.noon-quran-hero__product{width:100%;max-width:380px;order:1}.noon-quran-hero__content{width:100%;order:2;gap:1rem;align-items:center;text-align:center}.noon-quran-hero__logo-wrapper,.noon-quran-hero__verse,.noon-quran-hero__title-wrapper,.noon-quran-hero__description,.noon-quran-hero__benefits{width:100%;margin-inline-start:0;margin-inline-end:0}.noon-quran-hero__logo-container{width:fit-content;margin:0 auto}.noon-quran-hero__title-wrapper{justify-content:center}.noon-quran-hero__verse img,.noon-quran-hero__title-pill img,.noon-quran-hero__description img{margin:0 auto}.noon-quran-hero__benefits{justify-content:center;gap:.5rem;padding:1rem;margin-inline-start:0}.noon-quran-hero__benefit{min-width:60px}.noon-quran-hero__benefit-icon{width:32px;height:32px}.noon-quran-hero__benefit-text img{width:clamp(45px,10vw,70px)}}@media(max-width:480px){.noon-quran-hero__container{padding:1rem;gap:1rem}.noon-quran-hero__product{max-width:100%}.noon-quran-hero__benefits{flex-wrap:wrap;gap:.75rem;padding:.75rem}.noon-quran-hero__benefit{flex:0 0 calc(50% - .375rem);min-width:unset}.noon-quran-hero__benefit-icon{width:28px;height:28px}.noon-quran-hero__benefit-text img{width:clamp(40px,8vw,60px)}}@media print{#noon-quran-hero{display:none}}`;
    document.head.appendChild(s);

    const h = document.createElement('a');
    h.id = 'noon-quran-hero';
    h.href = PRODUCT_URL;
    h.dir = 'rtl';
    h.lang = 'ar';
    h.setAttribute('role', 'region');
    h.setAttribute('aria-label', 'مجموعة نون التعليمية - انقر للمزيد عن مصحف نون المظلل');
    h.style.display = 'block';
    h.style.textDecoration = 'none';
    h.style.color = 'inherit';
    h.innerHTML = `<div class="noon-quran-hero__writing-overlay" aria-hidden="true"><img src="${getUrl('writingOverlay')}" alt="" loading="lazy" style="display:block;"></div><div class="noon-quran-hero__container"><div class="noon-quran-hero__product"><img src="${getUrl('productCollage')}" alt="مصحف نون المظلل" loading="eager" fetchpriority="high" width="500" height="600" style="width:100%;height:auto;display:block;"></div><div class="noon-quran-hero__content"><div class="noon-quran-hero__logo-wrapper"><div class="noon-quran-hero__logo-container"><img src="${getUrl('logo')}" alt="شعار نون" loading="eager" width="120" height="60" style="height:auto;display:block;"></div></div><div class="noon-quran-hero__verse"><img src="${getUrl('quranVerse')}" alt="ن والقلم وما يسطرون" loading="eager" width="200" height="60" style="max-width:100%;height:auto;display:block;"></div><div class="noon-quran-hero__title-wrapper"><div class="noon-quran-hero__title-pill"><img src="${getUrl('noonTitle')}" alt="مجموعة نون" loading="eager" width="200" height="60" style="height:auto;display:block;"></div></div><div class="noon-quran-hero__description"><img src="${getUrl('description')}" alt="وصف المنتج" loading="lazy" width="350" height="140" style="max-width:100%;height:auto;display:block;"></div><div class="noon-quran-hero__benefits" role="list"><div class="noon-quran-hero__benefit" role="listitem"><div class="noon-quran-hero__benefit-icon"><img src="${getUrl('qualityIcon')}" alt="" loading="lazy" width="40" height="40" aria-hidden="true" style="width:100%;height:auto;display:block;"></div><div class="noon-quran-hero__benefit-text"><img src="${getUrl('qualityText')}" alt="جودة عالية" loading="lazy" width="100" height="40" style="max-width:100%;height:auto;display:block;"></div></div><div class="noon-quran-hero__benefit" role="listitem"><div class="noon-quran-hero__benefit-icon"><img src="${getUrl('shippingIcon')}" alt="" loading="lazy" width="40" height="40" aria-hidden="true" style="width:100%;height:auto;display:block;"></div><div class="noon-quran-hero__benefit-text"><img src="${getUrl('shippingText')}" alt="شحن سريع" loading="lazy" width="100" height="40" style="max-width:100%;height:auto;display:block;"></div></div><div class="noon-quran-hero__benefit" role="listitem"><div class="noon-quran-hero__benefit-icon"><img src="${getUrl('securityIcon')}" alt="" loading="lazy" width="40" height="40" aria-hidden="true" style="width:100%;height:auto;display:block;"></div><div class="noon-quran-hero__benefit-text"><img src="${getUrl('securityText')}" alt="تسوق آمنة" loading="lazy" width="100" height="40" style="max-width:100%;height:auto;display:block;"></div></div></div></div></div>`;

    const main = document.querySelector('main') || document.querySelector('[role="main"]') || document.body;
    if (main.firstElementChild) {
      main.insertBefore(h, main.firstElementChild);
    } else {
      main.appendChild(h);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
