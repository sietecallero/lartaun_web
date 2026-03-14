# Lartaun Web

A static HTML website for Lartaun - an AI communications consultant.

## Project Structure

- `index.html` - Main homepage
- `sobre-mi.html` - About page
- `servicios.html` - Services page
- `metodo.html` - Method page
- `casos.html` - Case studies page
- `insights.html` - Insights/blog listing page
- `insights/` - Individual insight articles
- `ponencias.html` - Speaking engagements page
- `contacto.html` - Contact page
- `privacidad.html` - Privacy policy
- `aviso-legal.html` - Legal notice
- `css/style.css` - Main stylesheet
- `js/main.js` - Main JavaScript
- `img/` - Image assets
- `sitemap.xml` - SEO sitemap
- `server.js` - Node.js static file server

## Running the App

The app is served via a simple Node.js HTTP server:

```bash
node server.js
```

Runs on port 5000 at `0.0.0.0`.

## Deployment

Configured as a static site deployment with `publicDir: "."`.
