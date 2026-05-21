# Drive Discoveries — Website

> Single-page travel agency website. Dark amber/orange theme. Bilingual (English + Marathi). Mobile-first.

---

## 📁 Folder Structure

```
drive-discoveries/
├── index.html      ← Main page (all sections)
├── style.css       ← All styles + responsive
├── script.js       ← Language switcher, animations, slider, counters
└── README.md       ← This file
```

---

## 🚀 Deploy to GitHub Pages (Free Hosting)

1. Create a free account at https://github.com
2. Click **New Repository** → name it `drive-discoveries` → Public → Create
3. Upload the 3 files: `index.html`, `style.css`, `script.js`
4. Go to **Settings → Pages**
5. Under *Source*, select **Deploy from a branch** → Branch: `main` → Folder: `/ (root)` → Save
6. In ~2 minutes your site is live at:
   `https://YOUR-USERNAME.github.io/drive-discoveries/`

---

## 🖼️ How to Replace Images

Gallery images use Unsplash URLs. To use your own photos:

1. Upload your `.jpg` / `.webp` images to the same GitHub repository folder.
2. In `index.html`, find the gallery section and replace URLs like:
   ```html
   style="background-image:url('https://images.unsplash.com/...')"
   ```
   with:
   ```html
   style="background-image:url('your-photo.jpg')"
   ```

Hero background is in `style.css`:
```css
.hero-bg {
  background-image: url('YOUR_ROAD_IMAGE.jpg');
}
```

---

## ✏️ How to Change Text

All text is stored in `script.js` inside the `translations` object.

```js
const translations = {
  en: {
    hero_tagline: "Travel now with Comfortable, Safe and Reliable Service.",
    // ... more keys
  },
  mr: {
    hero_tagline: "आता प्रवास करा आरामदायी, सुरक्षित...",
    // ... Marathi translations
  }
};
```

- Edit the English value in `en: { ... }`
- Edit the Marathi value in `mr: { ... }`
- Each `data-key` attribute in `index.html` maps to a key in this object.

---

## 📞 Changing Phone Numbers

In `index.html`, search for `9757237003` and `8956723703` and replace with new numbers.
Also update the WhatsApp links:
```
https://wa.me/919757237003
```
Replace `919757237003` with `91` + your 10-digit number (country code 91 for India).

---

## 🎨 Changing Colors

In `style.css`, edit the CSS variables at the top:
```css
:root {
  --gold:      #f5a623;   /* Main amber/gold */
  --gold-dark: #c47d0e;   /* Darker shade */
  --dark:      #0d0d0d;   /* Background */
}
```

---

## 📱 Features Checklist

- [x] Sticky navbar with hamburger menu
- [x] Hero with animated SVG vehicles
- [x] Language toggle (English ↔ Marathi)
- [x] Services section (6 cards)
- [x] Features section (6 cards with numbers)
- [x] Animated stat counters
- [x] Gallery with hover zoom (masonry grid)
- [x] Testimonials auto-slider with dots
- [x] Contact form (opens WhatsApp on submit)
- [x] Google Maps embed placeholder
- [x] Floating WhatsApp button
- [x] Scroll-to-top button
- [x] Scroll-reveal animations
- [x] Mobile fully responsive
- [x] SEO meta tags
- [x] No backend required
