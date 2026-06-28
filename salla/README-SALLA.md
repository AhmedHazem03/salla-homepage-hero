# Noon Quran Hero Section - Salla Integration Guide

## Overview
This is a production-ready RTL Arabic hero section for Salla e-commerce stores, featuring the Noon Quran educational product with responsive mobile layout and performance optimization.

---

## Installation

### 1. Add CSS to Salla

1. Go to your Salla store admin dashboard
2. Navigate to **Customization → Design → Custom CSS**
3. Paste the entire content of `noon-quran-hero.css` into the CSS field
4. **Save changes**

### 2. Add JavaScript to Salla

1. Go to your Salla store admin dashboard
2. Navigate to **Customization → Themes → Custom JavaScript** (or **Custom Code**)
3. Paste the entire content of `noon-quran-hero.js` into the JavaScript field
4. **Save changes**

---

## Configuration (Required)

Before deploying, you **must** edit two constants in `noon-quran-hero.js`:

### `PRODUCT_URL`
Replace the placeholder with your actual product URL:
```javascript
const PRODUCT_URL = "https://YOUR-STORE-DOMAIN.com/products/PRODUCT-SLUG";
```
**Example:**
```javascript
const PRODUCT_URL = "https://mystore.salla.sa/products/noon-quran-deluxe";
```

### `ASSET_BASE_URL`
Replace with the URL where your assets are hosted:
```javascript
const ASSET_BASE_URL = "https://YOUR-CDN-OR-SALLA-MEDIA-URL/";
```
**Example (Salla Media):**
```javascript
const ASSET_BASE_URL = "https://salla.sa/media/";
```

**Example (Custom CDN):**
```javascript
const ASSET_BASE_URL = "https://cdn.example.com/noon-assets/";
```

---

## Asset Deployment

Upload all 14 image files to your CDN or Salla media server:

1. `aswak-logo-white-yellow.png`
2. `hero-quran-product-collage.png`
3. `hero-paper-background-texture.png`
4. `optional-hero-radial-light-overlay.png`
5. `hero-writing-hand-background-overlay.png`
6. `quran-verse-ar.png`
7. `noon-educational-group-title-ar.png`
8. `hero-description-ar.png`
9. `benefit-quality-medal-icon.png`
10. `benefit-quality-text-ar.png`
11. `benefit-fast-shipping-truck-icon.png`
12. `benefit-fast-shipping-text-ar.png`
13. `benefit-secure-shopping-icon.png`
14. `benefit-secure-shopping-text-ar.png`

Ensure all files are accessible at the base URL you configured in `ASSET_BASE_URL`.

---

## Optional Configuration

### Display CTA Button
By default, the Call-to-Action button is hidden to match the design reference. To display it:

1. Open `noon-quran-hero.js`
2. Change this line:
   ```javascript
   const SHOW_CTA = false;
   ```
   To:
   ```javascript
   const SHOW_CTA = true;
   ```
3. Re-paste the updated JavaScript into Salla

---

## Testing Checklist

### Desktop (1280px+)
- [ ] Logo appears in dark purple rounded top box
- [ ] Quran verse displays below logo
- [ ] Yellow "Noon Educational Group" pill is centered
- [ ] Description text is readable and right-aligned
- [ ] Benefits bar shows 3 items horizontally (Quality, Shipping, Security)
- [ ] Product collage is on the left with proper spacing
- [ ] Background has subtle paper texture
- [ ] Writing hand overlay is very faint on the right edge
- [ ] Entire section is clickable and navigates to product URL
- [ ] No horizontal scrolling

### Tablet (768px)
- [ ] Layout adjusts gracefully
- [ ] Product collage scales appropriately
- [ ] Text remains readable
- [ ] Benefits bar spacing works
- [ ] No layout shifts as page loads

### Mobile (390px - 480px)
- [ ] Product collage is centered and full-width
- [ ] Content is stacked vertically
- [ ] All text is readable (minimum 16px)
- [ ] Benefits wrap into 2 rows
- [ ] No horizontal scrolling
- [ ] Tap target for click area is adequate
- [ ] Luxury feeling is preserved despite mobile layout

### Accessibility
- [ ] Page is readable with RTL direction
- [ ] All images have meaningful alt text or are properly marked as decorative
- [ ] Section is keyboard navigable
- [ ] Text has good contrast

### Performance
- [ ] Hero loads without layout shift (CLS optimized)
- [ ] Product collage image loads eagerly
- [ ] Decorative images load lazily
- [ ] No JavaScript errors in browser console

---

## Customization

### Colors
Edit the CSS custom properties in `noon-quran-hero.css`:
```css
--color-purple-dark: #5a3a8a;     /* Primary purple */
--color-yellow-bright: #f4b917;   /* Accent yellow */
--color-ivory-warm: #f5f1ed;      /* Background */
```

### Spacing
Modify `--spacing-base` or adjust `clamp()` values for padding/gaps.

### Border Radius
Change `--radius-lg` and `--radius-md` for different roundedness.

---

## Troubleshooting

### Hero doesn't appear
- Verify you are on the homepage (`/`)
- Check browser console for errors
- Ensure `ASSET_BASE_URL` is correct
- Confirm all image files exist at the specified URL

### Images don't load
- Check the full image URL in browser DevTools Network tab
- Verify `ASSET_BASE_URL` ends with `/` or doesn't (be consistent)
- Ensure images are not blocked by CORS policies
- Check file names match exactly (case-sensitive)

### Layout looks wrong on mobile
- Clear browser cache and hard-refresh (Cmd+Shift+R or Ctrl+Shift+R)
- Test in incognito/private mode to eliminate extensions
- Verify CSS was pasted completely

### Styles conflict with Salla theme
- All selectors are scoped under `#noon-quran-hero`
- If conflicts persist, check for `!important` overrides in your Salla theme
- Contact Salla support if CSS specificity issues occur

---

## Performance Notes

- **Image loading**: Product collage uses `loading="eager"` for above-the-fold performance
- **CLS prevention**: All images have explicit width/height or aspect ratios
- **CSS optimization**: Uses CSS custom properties and `clamp()` for fluid responsive design
- **No animations**: Hero renders immediately without JavaScript animation
- **RTL support**: Uses CSS logical properties for proper RTL layout

---

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify all configuration values are correct
3. Test in an incognito window (rules out cache/extensions)
4. Review browser console for error messages
5. Contact your Salla support team if the issue persists

---

## Files Included

- `noon-quran-hero.css` - All styling (scope-safe, no global pollution)
- `noon-quran-hero.js` - JavaScript initialization (vanilla, no dependencies)
- `README-SALLA.md` - This guide

---

**Version**: 1.0.0  
**Last Updated**: June 2026  
**Status**: Production Ready
