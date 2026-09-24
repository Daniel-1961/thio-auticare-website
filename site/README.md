# Ethio-Auti care — static website

This is a plain HTML/CSS/JS rebuild of the content from your WordPress export
(`ethio-auticare_WordPress_2026-09-22.xml`). No build step, no dependencies —
just open it in a browser or deploy it as-is.

## What this is (and isn't)

Your XML file was a **WordPress content export**: it contains your page text,
image references, and a few inline colors, but not your theme's actual
code (that lives on WordPress.com's servers, not in the export). So this
isn't a "conversion" of existing code — it's a fresh, hand-built site using
your real content, redesigned to work as standalone files.

All the writing on every page is yours, pulled directly from the export and
lightly reformatted (headings/lists cleaned up) for readability. Nothing was
rewritten or summarized.

## Structure

```
site/
├── index.html                 Home (English)
├── about.html
├── for-family.html
├── understanding-autism.html
├── care-centers.html
├── am/                        Amharic mirror of every page
│   ├── index.html
│   ├── about.html
│   ├── for-family.html
│   ├── understanding-autism.html
│   └── care-centers.html
└── assets/
    ├── css/style.css
    └── js/main.js             mobile nav toggle + one hero animation
```

## Opening it in VS Code

1. Unzip the folder and open it in VS Code (`File → Open Folder`).
2. Install the **Live Server** extension (or run `python3 -m http.server`
   from inside the folder) to preview it with working relative links.
3. Edit the `.html` files directly — each page repeats the same header/footer
   markup, so a global change (e.g. the phone number in the footer) needs to
   be updated in all 10 files. If you'd like, I can turn this into a version
   with a shared header/footer template and a tiny build script instead.

## Deploying

Because it's plain static HTML, you can drop this folder onto any static
host:
- **GitHub Pages**: push this folder to a repo and enable Pages on the
  `main` branch.
- **Netlify / Vercel**: drag-and-drop the folder in their dashboard, or
  connect the repo.
- Any regular web host: upload the contents via FTP/SFTP.

No server-side code, database, or build step is required.

## Images

The home page hero currently links directly to one image still hosted on
your original WordPress.com site
(`wp-content/uploads/2026/08/gemini_generated_image_lbi1d0lbi1d0lbi1-1.jpeg`).
That keeps the zip small, but it means the hero image depends on your
WordPress.com site staying online. To make the site fully self-contained:

1. Download your images from your WordPress Media Library (or from the
   `wp-content/uploads/...` URLs referenced in the original export).
2. Save them into a new `assets/img/` folder here.
3. In `index.html` (and `am/index.html`), change the hero's
   `background-image:url('https://ephiremdata-vimly.wordpress.com/...')`
   to `background-image:url('assets/img/your-file.jpg')`
   (use `../assets/img/...` in the `am/` version).

## Content notes

- Contact details (Telegram `t.me/Ephiremism`, phone `+251 926805726`) were
  pulled from your site footer and appear on every page.
- The "Understanding Autism" pages were originally written as long
  run-on paragraphs in the WordPress editor; they've been split into
  proper headings, paragraphs, and lists here. The English version was
  restructured by hand; the Amharic version was restructured
  automatically using the same heading markers you used in the original
  text — it's worth a quick read-through in case any line landed in the
  wrong place.
- A few unpublished/system items from the export (navigation block,
  template parts, a stray `wp_block` pattern) aren't part of the visible
  content and were left out.
