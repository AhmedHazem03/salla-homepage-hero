# Visual Inspection Checklist — Verify Before Export

Open `/noon-preview` in v0 and check each viewport using this guide.

---

## STEP 1: Open Preview

Navigate to: **http://localhost:3000/noon-preview**

You'll see 5 viewport buttons at the top. The preview shows real iframe rendering—each button loads the exact same HTML/CSS/JS that will be in Salla.

---

## STEP 2: Test 1440px Desktop

**Click: "1440px Desktop" button**

### What you should see:

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Quran Collage]    [Logo in Purple Box]            │
│  [Images & Pen]     [ن والقلم وما يسطرون]          │
│                     [Yellow Pill: مجموعة نون]       │
│                     [Description Text]              │
│                     [3 Benefits in Purple Bar]       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Verify:
- [ ] Product collage clearly on **LEFT side** ← CRITICAL
- [ ] Arabic content (logo, verse, title, desc) on **RIGHT side** ← CRITICAL
- [ ] 3 benefits (medal, truck, shield icons) fit **horizontally** in purple bar
- [ ] No horizontal scrolling (scroll area indicator at top shows "Scroll horizontally to verify no overflow")
- [ ] Background has warm paper texture visible
- [ ] Purple logo box has white/yellow logo inside
- [ ] Yellow title pill has rounded dark background
- [ ] All text is right-aligned (Arabic RTL)

---

## STEP 3: Test 1280px Desktop

**Click: "1280px Desktop" button**

### What you should see:
- Same as 1440px but with proportional scaling
- All elements use `clamp()` so they scale fluidly
- No jumping or reflow

### Verify:
- [ ] Layout is **identical to 1440px** (just scaled down)
- [ ] Product still LEFT, content still RIGHT
- [ ] All 3 benefits still horizontal
- [ ] No horizontal scrolling

---

## STEP 4: Test 768px Tablet

**Click: "768px Tablet" button**

### What you should see:

```
┌──────────────────────┐
│                      │
│  [Quran Collage]     │  ← Full width product
│  [Images & Pen]      │
│                      │
│  [Logo Box Purple]   │  ← Content centered below
│  [Verse Arabic]      │
│  [Yellow Pill]       │
│  [Description]       │
│  [3 Benefits Bar]    │  ← Benefits still horizontal
│                      │
└──────────────────────┘
```

### Verify:
- [ ] Product moved to **TOP, full-width**
- [ ] All content **CENTERED** (no right-align)
- [ ] 3 benefits still fit horizontally (don't wrap)
- [ ] No horizontal scrolling
- [ ] Logo box centered at top of content
- [ ] Title pill centered (not pill-shaped anymore, maybe rounded rect)
- [ ] Description text centered
- [ ] Benefits bar centered with 3 items horizontal

---

## STEP 5: Test 390px Mobile

**Click: "390px Mobile" button** (scroll down within the preview)

### What you should see:

```
┌────────────────┐
│ [Collage img]  │  ← Full width, responsive
│                │
│ [Logo Box]     │
│ [Verse]        │
│ [Yellow Pill]  │
│ [Desc]         │
│                │
│ [Icon] [Icon]  │  ← TWO benefits horizontal (1st row)
│ Quality Shipping
│                │
│  [Icon]        │  ← ONE benefit centered (2nd row)
│  Security      │
│                │
└────────────────┘
```

### Verify:
- [ ] Product 100% width at top
- [ ] All content centered vertically
- [ ] **Benefits in 2 columns top, 1 centered bottom** (2×1 grid)
- [ ] First benefit (quality medal icon + text) LEFT of row
- [ ] Second benefit (shipping truck icon + text) RIGHT of row
- [ ] Third benefit (security shield icon + text) **CENTERED below**, not in a third column
- [ ] **NO horizontal scrolling** ← CRITICAL
- [ ] Arabic text readable without zoom
- [ ] Logo box still has purple background and white/yellow logo

---

## STEP 6: Test 360px Mobile (Smallest)

**Click: "360px Mobile" button** (scroll down within the preview)

### What you should see:
- **Identical to 390px** (intentionally not further compressed)
- Same 2×1 benefits layout
- Everything fits in 360px width

### Verify:
- [ ] Product 100% width, not clipped
- [ ] Content centered, not cut off
- [ ] 2×1 benefits grid unchanged
- [ ] **ZERO horizontal scrolling** ← CRITICAL FOR EXPORT
- [ ] All images scale down smoothly
- [ ] Text remains readable
- [ ] No overlap or stacking issues

---

## STEP 7: Asset Verification (All Viewports)

While inspecting each viewport, verify all 12 assets are visible:

### Images visible in hero section:
- [ ] Product collage (Quran, book, pen, materials)
- [ ] Logo (white + yellow on purple box)
- [ ] Quran verse (Arabic text)
- [ ] Title (مجموعة نون in yellow pill)
- [ ] Description (Arabic text with artwork)
- [ ] Quality icon (medal, round)
- [ ] Quality text (Arabic)
- [ ] Shipping icon (truck, round)
- [ ] Shipping text (Arabic)
- [ ] Security icon (shield, round)
- [ ] Security text (Arabic)
- [ ] Writing hand overlay (visible as light background layer)

### CSS backgrounds:
- [ ] Paper texture visible (warm beige with paper grain)
- [ ] Radial light overlay visible (subtle white glow from upper-left)
- [ ] Purple logo box has rounded corners
- [ ] Yellow title pill has rounded corners and shadow
- [ ] Purple benefits bar has rounded corners and shadow

---

## STEP 8: Horizontal Scrolling Test

**Most critical verification:**

For each viewport (1440px, 1280px, 768px, 390px, 360px):

1. Look at the status bar at top: "Scroll horizontally to verify no overflow"
2. Try scrolling right using the horizontal scrollbar at bottom of preview
3. **No scrollbar should appear** (or scrollbar should be inactive)

### Verify:
- [ ] 1440px: No horizontal scrollbar
- [ ] 1280px: No horizontal scrollbar
- [ ] 768px: No horizontal scrollbar
- [ ] 390px: No horizontal scrollbar ← CRITICAL
- [ ] 360px: No horizontal scrollbar ← CRITICAL

---

## STEP 9: Color & Design Verification

Across all viewports, verify brand colors:

- [ ] Dark purple `#5a3a8a`: Logo box background, benefits bar background
- [ ] Bright yellow `#f4b917`: Title pill background, accents
- [ ] Ivory `#f5f1ed`: Hero section background (paper color)
- [ ] White/purple overlays: Subtle effect over entire hero

---

## STEP 10: Semantic HTML Verification (Technical)

Open browser DevTools (F12) on the 1440px preview:

1. Right-click on the hero section → "Inspect"
2. Look at the HTML structure

### Verify:
- [ ] Root element is `<a id="noon-quran-hero" href="...">` (semantic anchor, not div)
- [ ] `dir="rtl"` attribute on root
- [ ] `lang="ar"` attribute on root
- [ ] `role="region"` attribute present
- [ ] `aria-label` contains Arabic description
- [ ] No nested `<a>` tags inside
- [ ] All images have `alt` text (alt="" for decorative, descriptive for content)
- [ ] Benefit icons have `aria-hidden="true"` (they're decorative, text carries meaning)

---

## Summary: All Checks Green?

If you've verified everything above across all 5 viewports, the hero is **ready for Salla export**.

### Files ready to download:
```
/salla/noon-quran-hero.css      ← Vanilla CSS, fully scoped
/salla/noon-quran-hero.js       ← Vanilla JS, zero dependencies
/salla/README-SALLA.md          ← Installation guide
```

### What happens at export:
1. Copy CSS into Salla admin (or style tag in header)
2. Copy JS into Salla admin (or script tag in header)
3. Upload 12 images to your CDN
4. Replace `PRODUCT_URL` and `ASSET_BASE_URL` in JS
5. Deploy to production

**No other changes needed.**

---

## Troubleshooting Inspection Issues

### Q: Hero isn't rendering in preview
A: Check browser console (F12) for errors. Iframes may have blocked Blob storage access.

### Q: Images show as broken/404
A: The preview uses Vercel Blob URLs. These only work in v0. When you export to Salla, you'll replace these URLs with your own CDN URLs.

### Q: Layout looks different than I remember
A: This is the **actual final layout**. All changes have been applied. Desktop has product on LEFT (not RTL-reversed), mobile benefits are 2×1 grid.

### Q: Can I see the raw files before export?
A: Yes, open `/salla/noon-quran-hero.css` and `/salla/noon-quran-hero.js` to review the production code.

---

## Next Steps After Verification

1. **Confirm all checks pass** above
2. **Tell me:** "Visual inspection complete ✓"
3. **Download files** from `/salla/` directory:
   - noon-quran-hero.css
   - noon-quran-hero.js
   - README-SALLA.md
4. **Follow README** for Salla integration
5. **Test in production** after upload

---

**Preview URL:** http://localhost:3000/noon-preview  
**Export Directory:** /salla/  
**Status:** Ready for production deployment
