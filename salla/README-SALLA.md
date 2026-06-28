# Noon Quran Hero - Salla Integration

## Installation

### 1. Add CSS
- Go to Salla Admin → **Customization → Design → Custom CSS**
- Paste entire content of `noon-quran-hero.css`
- Save

### 2. Add JavaScript
- Go to Salla Admin → **Customization → Custom Code / Custom JavaScript**
- Paste entire content of `noon-quran-hero.js`
- Save

## Configuration

Edit these **2 constants** in `noon-quran-hero.js`:

```javascript
const PRODUCT_URL = "https://YOUR-STORE.salla.sa/products/PRODUCT-SLUG";
const ASSET_BASE_URL = "https://YOUR-CDN-URL/";
```

## Asset Deployment

Upload all 12 image files to your CDN/Salla media and ensure the URL prefix matches `ASSET_BASE_URL`:
- aswak-logo-white-yellow.png
- hero-quran-product-collage.png
- hero-writing-hand-background-overlay.png
- quran-verse-ar.png
- noon-educational-group-title-ar.png
- hero-description-ar.png
- benefit-quality-medal-icon.png
- benefit-quality-text-ar.png
- benefit-fast-shipping-truck-icon.png
- benefit-fast-shipping-text-ar.png
- benefit-secure-shopping-icon.png
- benefit-secure-shopping-text-ar.png

## Testing Checklist

✓ Desktop (1280px): Logo, verse, title pill, description, 3 benefits aligned, product collage left  
✓ Tablet (768px): Layout adjusts, responsive spacing  
✓ Mobile (480px): Product centered, content stacked, benefits wrap 2x2  
✓ RTL direction works  
✓ Click hero → navigates to product URL  
✓ No horizontal scroll at 360px, 390px, 768px, 1280px  

## Troubleshooting

**Hero doesn't appear:**
- Verify on homepage (`/`)
- Check PRODUCT_URL and ASSET_BASE_URL are updated
- Verify images exist at CDN URLs

**Images missing:**
- Check CSS scoped under `#noon-quran-hero` only
- Verify ASSET_BASE_URL ends with `/` consistently
- Clear cache and test in incognito

**Styles conflict:**
- All CSS is scoped under `#noon-quran-hero`
- No global selectors or resets

## Removal

Delete the CSS from Salla Custom CSS and the JavaScript from Salla Custom Code sections.
