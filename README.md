# Wayfinder Technology Partners — Website Template

Static HTML website for Wayfinder Technology Partners.
Also serves as a **reusable template** for future client sites.

## File Structure

```
wayfinder-website/
├── index.html          # Home page
├── services.html       # Service plans (Basic / Standard / Premium)
├── about.html          # About the company
├── contact.html        # Contact form
├── css/
│   └── styles.css      # All styles — brand variables at top of file
├── js/
│   └── main.js         # Mobile nav toggle, form submission
└── assets/             # Place images, favicon, OG image here
```

## Deploying to Cloudflare Pages

1. Log into [Cloudflare Pages](https://pages.cloudflare.com)
2. Create a new project → **Upload assets**
3. Drag and drop this entire folder (or connect a GitHub repo)
4. Set the custom domain to `wayfindertechpartners.com`
5. Cloudflare handles SSL automatically

No build step required — pure static files deploy as-is.

## Setting Up the Contact Form (Formspree)

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form and copy the form ID from the endpoint URL
3. In `contact.html`, replace `YOUR_FORM_ID` in the form's `action`:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Set the notification email inside the Formspree dashboard

---

## Using This as a Template for Client Sites

### Step 1 — Rebrand (5 minutes)

Open `css/styles.css` and update the CSS custom properties at the top of the file:

```css
:root {
  --color-primary:   #0d1f3c;   /* Dark background — hero, footer */
  --color-accent:    #1a56db;   /* Brand color — buttons, links */
  --color-highlight: #38bdf8;   /* Accent color — decorative elements */

  --font-heading: 'Sora', sans-serif;
  --font-body:    'DM Sans', sans-serif;
}
```

Change the Google Fonts import in each HTML `<head>` to match your chosen fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT..." />
```

### Step 2 — Replace Business Name

Find and replace across all HTML files:
- `Wayfinder` → Client's short brand name
- `Wayfinder Technology Partners` → Client's full business name
- `wayfindertechpartners.com` → Client's domain
- `hello@wayfindertechpartners.com` → Client's email
- `Technology Partners` (nav sub-label) → Client's tagline or industry

### Step 3 — Update Meta Tags

In each HTML file, update:
- `<title>` tag
- `<meta name="description">`
- `<meta property="og:*">` tags

### Step 4 — Replace Content

Each page is clearly commented. Replace:
- Hero headlines and subtext
- Service/product descriptions
- About/mission copy
- Footer tagline

### Step 5 — Swap Service Structure

`services.html` is built for a 3-tier model. If a client has different offerings:
- Change tier names, colors (update `--color-basic/standard/premium`)
- Remove or add tier sections
- Update the comparison table

### Step 6 — Form & Deploy

- Set up a new Formspree form (see above)
- Deploy to Cloudflare Pages with the client's domain

---

## Remaining TODOs for Launch

- [ ] Add a `favicon.ico` and `apple-touch-icon.png` to `/assets/`
- [ ] Add an Open Graph image (`og-image.jpg`, 1200×630) to `/assets/` and reference it in each `<head>`
- [ ] Create actual Privacy Policy and Terms of Service pages (or link to a service like Termly)
- [ ] Add LinkedIn and other social links to footer
- [ ] Set up Formspree with real form ID
- [ ] Verify contact email address in all pages
- [ ] Update copyright year as needed
