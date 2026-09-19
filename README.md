# 💳 Payment Dashboard

##Livelink:https://payportal-swart.vercel.app/


A modern, professional, and fully responsive **UPI Payment Dashboard** built for displaying payment instructions and payment methods. Designed with a clean fintech-inspired UI — ideal for professional and business use.

---

## 📁 Project Structure

```
Payment/
├── index.html      → HTML structure & markup
├── styles.css      → All CSS styles, design tokens, responsive layout
├── script.js       → JavaScript (copy button, animations, footer year)
└── README.md       → Project documentation (this file)
```

---

## ✨ Features

- ✅ **QR Code Payment** — Large, scannable QR code display with styled frame
- ✅ **Phone Number Payment** — Prominent UPI number with one-click copy
- ✅ **Copy to Clipboard** — Works in modern and older browsers (with fallback)
- ✅ **3-Step Instructions** — Simple, clear payment guide for users
- ✅ **Post-Payment Info Card** — Reminder to save transaction ID
- ✅ **Security Trust Section** — Secure Payment, Data Protection, PIN Warning
- ✅ **Professional Footer** — Contact info, legal links, copyright
- ✅ **Fully Responsive** — Desktop, tablet, and mobile layouts
- ✅ **Scroll Animations** — Smooth entrance animations via IntersectionObserver
- ✅ **Accessible** — Semantic HTML, ARIA labels, live regions

---

## 🚀 Getting Started

No build tools or dependencies required. This is a **pure HTML/CSS/JS** project.

### Run Locally

Simply open `index.html` in any modern web browser:

```bash
# Option 1 — Double-click index.html in File Explorer

# Option 2 — Use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Option 3 — Python simple server (if Python is installed)
python -m http.server 8000
# Then visit: http://localhost:8000
```

---

## ⚙️ Customization Guide

### 1. Replace Your Phone Number

Open `index.html` and find:

```html
<p class="phone-number-display" id="phone-number-text">
  +91 XXXXX XXXXX
</p>
```

Replace `+91 XXXXX XXXXX` with your actual UPI-registered phone number.

Also update the footer contact number:

```html
<li><a href="tel:+910000000000">+91 XXXXX XXXXX</a></li>
```

---

### 2. Replace the QR Code Image

Find this block in `index.html`:

```html
<div class="qr-placeholder" id="qr-placeholder">
  <!-- placeholder SVG -->
</div>
```

Replace the entire `<div class="qr-placeholder">...</div>` block with:

```html
<img src="qr-code.png" alt="UPI Payment QR Code" />
```

> Place your QR image (`qr-code.png`) in the same folder as `index.html`.

---

### 3. Update the UPI Deep Link (Open UPI App button)

Find in `index.html`:

```html
href="upi://pay?pa=YOURUPI@upi&amp;pn=PayPortal&amp;cu=INR"
```

Replace with your actual UPI ID:

```html
href="upi://pay?pa=yourname@okaxis&amp;pn=YourName&amp;cu=INR"
```

---

### 4. Update Company / Brand Name

Search and replace `PayPortal` in `index.html` with your actual business or brand name.

---

### 5. Update Contact Information

In `index.html`, find the footer Contact section:

```html
<li><a href="mailto:support@payportal.com">support@payportal.com</a></li>
<li><a href="tel:+910000000000">+91 XXXXX XXXXX</a></li>
```

Replace with your real email and phone number.

---

### 6. Update Legal Links

In the footer Legal section, replace the `href="#"` placeholders with your actual URLs:

```html
<li><a href="/terms.html" id="terms-link">Terms & Conditions</a></li>
<li><a href="/privacy.html" id="privacy-link">Privacy Policy</a></li>
```

---

## 🎨 Design System (CSS Variables)

All design tokens are defined at the top of `styles.css` inside `:root {}`. You can change the color scheme globally by editing these values:

```css
:root {
  --navy:        #0f1c35;   /* Dark navy — headings, footer bg    */
  --blue:        #2563eb;   /* Primary accent blue                */
  --teal:        #0ea5e9;   /* Secondary accent teal              */
  --green:       #10b981;   /* Success / secure green             */
  --bg:          #f0f4fa;   /* Page background                    */
  --surface:     #ffffff;   /* Card / panel background            */
  --border:      #e2e8f0;   /* Subtle border color                */
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout change |
|---|---|
| `> 700px`  | Two-column payment card (QR + Phone side by side) |
| `≤ 700px`  | Single-column layout, QR stacks above Phone |
| `≤ 640px`  | Hero graphic hidden, reduced hero padding |
| `≤ 540px`  | Header centre title hidden |
| `≤ 480px`  | Tighter padding on all sections |

---

## 🛡️ Security Notes

- This page is **display-only** — no payment processing happens here
- No user data is collected or stored
- UPI deep links (`upi://`) open the user's installed UPI app directly
- Never hard-code or expose any banking credentials in the HTML/JS

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome 80+    | ✅ Full |
| Firefox 75+   | ✅ Full |
| Safari 13+    | ✅ Full |
| Edge 80+      | ✅ Full |
| Opera 67+     | ✅ Full |
| IE 11         | ⚠️ Partial (no IntersectionObserver — fallback applied) |

---

## 📦 Dependencies

| Resource | Purpose | Source |
|---|---|---|
| **Manrope** font | Primary UI font | Google Fonts (CDN) |
| **Inter** font | Numbers & monospace | Google Fonts (CDN) |

> No npm packages, no build tools, no frameworks. Pure HTML, CSS, and JavaScript.

---

## 📋 Checklist Before Going Live

- [ ] Replace `+91 XXXXX XXXXX` with your real phone number
- [ ] Replace QR placeholder with your actual QR code image
- [ ] Update UPI deep link with your real UPI ID
- [ ] Replace `PayPortal` with your brand name
- [ ] Update footer email and phone
- [ ] Add real URLs for Terms, Privacy, and Refund Policy pages
- [ ] Test on mobile (QR scanability, copy button)
- [ ] Test "Open UPI App" button on a real Android/iOS device

---

## 📄 License

This project is for private/commercial use as agreed with the client.
All design and code created exclusively for this project.

---

*Built with ❤️ — Professional Fintech Payment Dashboard*
