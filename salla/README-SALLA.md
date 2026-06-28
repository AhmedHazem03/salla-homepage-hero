# Hero مصحف نون — تركيب سلة

## قبل التركيب

ارفع هذه الملفات الـ14 إلى مجلد عام واحد في R2 أو Cloudinary أو أي CDN، **بنفس الأسماء**:

```text
aswak-logo-white-yellow.png
hero-paper-background-texture.png
optional-hero-radial-light-overlay.png
hero-writing-hand-background-overlay.png
hero-quran-product-collage.png
quran-verse-ar.png
noon-educational-group-title-ar.png
hero-description-ar.png
benefit-quality-medal-icon.png
benefit-quality-text-ar.png
benefit-fast-shipping-truck-icon.png
benefit-fast-shipping-text-ar.png
benefit-secure-shopping-icon.png
benefit-secure-shopping-text-ar.png
```

مثال لقيمة `ASSET_BASE_URL`:

```text
https://cdn.example.com/noon-hero/
```

## التركيب داخل سلة

1. افتح تخصيص الثيم في سلة، ثم خانة **Custom CSS** والصق محتوى `noon-quran-hero.css` كاملًا واحفظ.
2. افتح خانة **Custom JavaScript** والصق محتوى `noon-quran-hero.js` كاملًا.
3. داخل ملف JavaScript غيّر القيمتين فقط:

```js
const PRODUCT_URL = 'https://YOUR-STORE-DOMAIN.com/products/PRODUCT-SLUG';
const ASSET_BASE_URL = 'https://YOUR-CDN-OR-SALLA-MEDIA-URL/';
```

4. احفظ ثم افتح معاينة المتجر. القسم يظهر في الصفحة الرئيسية فقط، في أول عنصر داخل `main`.

## فحص قبل النشر

- Desktop: الكولاج يسار، والنصوص يمين، وشريط المزايا أسفل اليمين.
- Tablet: الكولاج أعلى والمحتوى تحته دون قص أو تداخل.
- Mobile 390px و360px: لا يوجد تمرير أفقي، والمزايا تظهر عنصرين ثم عنصرًا في المنتصف.
- اضغط الـHero وتأكد أنه يفتح صفحة المنتج الصحيحة.
- افتح DevTools → Console وتأكد أنه لا توجد أخطاء أو صور 404.

## الإزالة

احذف كود CSS وكود JavaScript من تخصيص سلة ثم احفظ. لن يغير هذا أي جزء آخر من الثيم.
