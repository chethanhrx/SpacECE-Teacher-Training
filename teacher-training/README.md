# SpacECE Teacher Training – Parents Toddler Program
### A Professional Landing Page for Early Childhood Educator Registration

---

## 📌 Project Description

A fully responsive, production-ready landing page for the **SpacECE Teacher Training Program** under the *Parents Toddler Program* initiative. Designed to attract and onboard parents, fresh graduates, and aspiring educators interested in early childhood education (ECE).

Built with **pure HTML + CSS** — no frameworks, no dependencies, no Bootstrap. Just clean, well-structured, accessible code.

---

## ✨ Features

- ✅ **Fully Responsive** – Mobile, Tablet & Desktop layouts
- ✅ **Sticky Header** with scroll effect & mobile hamburger menu
- ✅ **Animated Hero Section** with floating cards, rotating badge & stat counters
- ✅ **Brand-Accurate Design** – SpacECE black & golden yellow (#F4A300)
- ✅ **Premium Typography** – Playfair Display (headings) + DM Sans (body)
- ✅ **Scroll-triggered Animations** via IntersectionObserver
- ✅ **All Required Sections**:
  - Hero with CTA
  - About the Program
  - Program Highlights (6 cards)
  - Who Can Apply (4 audience cards)
  - Curriculum Overview (timeline)
  - Benefits Checklist
  - Testimonials (3 cards)
  - Registration Form
  - Footer with social media & contact
- ✅ **Registration Form** with 7 fields + validation
- ✅ **SEO-Friendly** – Semantic HTML5, proper heading hierarchy, meta tags
- ✅ **Accessible** – ARIA labels, focus-visible states, color contrast compliant
- ✅ **No External Frameworks** – Pure HTML + CSS + vanilla JS
- ✅ **Google Fonts** – Playfair Display & DM Sans (CDN)
- ✅ **CSS Custom Properties** (design tokens for easy theming)
- ✅ **Smooth Scroll** + Back-to-Top button
- ✅ **Clean, commented CSS** organized into 20 labeled sections

---

## 🗂️ File Structure

```text
teacher-training/
├── index.html          # Main landing page
├── README.md           # Documentation
└── assets/             # Project assets
    ├── css/
    │   └── style.css   # Modern design system & styles
    ├── js/
    │   └── script.js   # Interactive components & animations
    └── img/            # Brand assets & logos
        ├── logo.jpg
        ├── spaceece_logo.png
        └── footer_logo.png
```

---

## 🚀 Setup Instructions

### 1. Project Directory
Ensure your project is located in your desired web server directory (e.g., `xampp/htdocs/internship/2/teacher-training/`).

### 2. View Locally
Simply open `index.html` in any modern web browser or access it via your local server (e.g., `http://localhost/internship/2/teacher-training/`).

---

## 🎨 Brand Aesthetics

| Token         | Value                      | Usage                          |
|---------------|----------------------------|-------------------------------|
| Primary BG    | `#07090f`                  | Main dark background          |
| Accent        | `#f4a300`                  | Brand gold / CTAs             |
| Text          | `#f6f8ff`                  | Primary readability           |
| Text Soft     | `#a2abc2`                  | Secondary descriptions        |
| Card BG       | `rgba(22, 27, 41, 0.58)`   | Glassmorphism card effect     |

---

## 🔤 Typography

The project uses premium Google Fonts for a modern, high-end feel:

| Role       | Font              | Weights        |
|------------|-------------------|----------------|
| Dynamic    | **Outfit**        | 300, 400, 600, 800 |
| Headings   | **Sora**          | 400, 600, 700, 800 |

---

## 🔧 Customization Guide

### Update Contact Information
Search `index.html` for the following placeholders and replace:
- `info@spaceece.com` → Your email
- `+92 300 0000000` → Your phone
- `Islamabad / Rawalpindi, Pakistan` → Your location

### Update Social Links
Find the `<div class="social-links">` section in the footer and replace `href="#"` with your actual profile URLs.

### Change Colors
In `assets/css/style.css`, edit the `:root` CSS custom properties:
```css
:root {
  --bg: #07090f;             /* Main background */
  --accent: #f4a300;         /* Primary brand color */
  --text: #f6f8ff;           /* Main text color */
}
```

### Connect the Form
The form currently has a front-end success message. To make it functional:
- **Formspree**: Set `action="https://formspree.io/f/YOUR_FORM_ID"` on the `<form>` tag
- **EmailJS**: Replace the JS form submit handler with EmailJS SDK
- **Google Apps Script**: Use a Sheets-connected Web App URL

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| IE 11 | ❌ Not supported |

---

## 📋 Google Sites Compatibility Notes

When embedding in Google Sites:
1. Host the files on GitHub Pages (or any static host)
2. In Google Sites, use **Embed → Embed URL** with your GitHub Pages URL
3. For section embeds, use direct anchor links like `https://yoursite.com/index.html#register`
4. The sticky header will be relative to the iframe — consider using `position: sticky` with `top: 0` inside Google Sites embed

---

## 💡 Suggested Repository Name

```
spaceece-teacher-training
```
Or alternatives:
- `spaceece-ece-landing`
- `spaceece-parents-toddler-program`
- `spaceece-teacher-registration`

---

## 📝 Git Commit Messages

### Initial commit:
```bash
git commit -m "feat: launch SpacECE Teacher Training landing page

- Add responsive HTML landing page with 8 sections
- Add pure CSS with 20 commented style sections
- Implement sticky header, hero animations, scroll effects
- Include registration form with client-side validation
- Add mobile hamburger menu and back-to-top button"
```

### For updates:
```bash
git commit -m "fix: update contact info in footer"
git commit -m "feat: connect registration form to Formspree"
git commit -m "style: adjust hero headline font size for mobile"
git commit -m "content: update testimonials with real graduate quotes"
```

---

## 📄 License

© SpacECE – Parents Toddler Program. All rights reserved.

This project is proprietary. Not for redistribution without permission from SpacECE.

---

## 🙏 Acknowledgements

- Fonts by [Google Fonts](https://fonts.google.com)
- Icons via inline SVG
- Design inspired by modern ECE and education brands

---

*Designed with ❤️ for early childhood education — because the first years matter most.*
