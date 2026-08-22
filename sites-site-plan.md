# sites.andypbrowne.com — build plan

This page lives in the **existing workshops repo**: [github.com/andypbrowne/workshops](https://github.com/andypbrowne/workshops) (`~/Developer/workshops`). Same Eleventy app, CSS, fonts, base layout, and Netlify site. It gets its own hostname only.

Do not start `~/Developer/sites` or a second GitHub repo.

**Source of truth for how to build:** the shipped workshops site in that repo (`content/index.njk`, `_includes/layouts/base.njk`, `public/css/index.css`). Do **not** follow `scratch/workshops-site-plan.md` or the copy of that plan in the workshops repo. Those files are stale (no dark mode, no FAQ, Brooklyn, no price, stub LinkedIn, table instead of steps).

**This page:** a finished website they keep. Do **not** link to workshops.andypbrowne.com.

**Price:** $2,500–$6,000. Locked.

---

## Follow the shipped workshops page

Copy structure and classes from `content/index.njk`. Locked *words* are in this file. Markup is not invented.

| Workshops (shipped) | Sites (do this) |
|---------------------|-----------------|
| `layout: layouts/base.njk` | Same |
| Front matter `title` + `description` | Same, sites copy |
| `<h1>Decision workshops</h1>` | `<h1>Websites</h1>` |
| `.lede` with `.gradient-text` on the first clause | Same pattern, sites hero |
| `.what-happens` + `ol.steps` (not a table) | Same: when / h3 / you-get |
| `aside.fit` — Good fit / Not this | Same |
| `section.faq` — `<details name="faq">` | Same questions as locked copy |
| `.cta` — `.action-pill` + `.cta-caption` | Same; href `metadata.linkedin` |
| `section.deeper` — blog links with `/img/thumbs/` | Same markup; copy the three named files below. Do not reuse Energy Dots / Kickoff / facilitation thumbs |
| `section.closing` | Same; no workshops mention |
| Header / footer / skip link | Already in `base.njk` — do not rebuild |
| Footer: `Andy Garber-Browne · NY Metro` | Keep (not Brooklyn) |
| LinkedIn: `https://www.linkedin.com/in/andypbrowne` in `_data/metadata.js` | Reuse. Do not look it up again |
| Favicons in `/img/favicon/` | Reuse. Do not invent a text “A” |
| CSS inlined via `{% inlinedCss %}` | Reuse `public/css/index.css` as-is |
| Dark mode (`color-scheme`, theme-color, `@media (prefers-color-scheme: dark)`) | **In scope. Already done.** Do not add a toggle. Do not call it out of scope |
| `404.md` | Keep. See metadata / 404 note below |

---

## Locked decisions

- Examples on v1: yes — Simona, YA author, Choosing type (Go deeper, workshops `.deeper` markup, named thumbs)
- Price: $2,500–$6,000 on the page
- Timeline: as little as 3 weeks
- Remote clients: yes
- Tools: offstage, except **Sanity** by name (editing). Do not name Eleventy
- CTA: LinkedIn — `https://www.linkedin.com/in/andypbrowne` (already in `metadata.linkedin`)
- Yes: Shopify, basic SEO if they ask
- No: WordPress, custom e-commerce (building a store from scratch)
- Copy: we write it together, organized, no endless revisions
- Workshops page: keep quiet (no cross-link)
- Dark mode: in scope, already in the shared CSS and `base.njk`

---

## Metadata (must fix in `base.njk`)

Title and description are already per-page. Workshops sets them in front matter; the layout uses `title or metadata.title`.

These three still always say workshops. If you add the sites page and leave the layout alone, a text of `sites.andypbrowne.com` can unfurl as Decision workshops:

- `canonical` and `og:url` use `metadata.url` (`https://workshops.andypbrowne.com/`)
- `og:image` and `twitter:image` are hardcoded to `thumb-workshops.png`

**Required layout change** (shared `base.njk`): each page may pass `pageUrl` (or `canonical`) and `ogImage` / `ogImageAlt`. Fall back to the global workshops values so the existing homepage does not break.

Sites front matter (example):

```yaml
layout: layouts/base.njk
title: Websites — Andy Garber-Browne
description: A finished website for a small business, portfolio, or online identity — one you can keep and update without me.
pageUrl: https://sites.andypbrowne.com/
ogImage: /img/OG/thumb-sites.png
ogImageAlt: You get a finished website that looks like you.
```

Add a sites OG image (same idea as `public/img/OG/thumb-workshops.png`). Do not reuse the workshops thumb.

**404:** `content/404.md` links to `/`, which is workshops. On `sites.andypbrowne.com` that can send people to the wrong offer. Either host-aware copy later, or a neutral 404 (“That URL is not on this site”) without a homepage link. Do not block v1 on this; do not leave “Go to the homepage” pointing at workshops if it is a five-minute fix.

---

## First prompt (paste into ~/Developer/workshops)

Copy this file to the repo root as `sites-site-plan.md` (not under `content/`). Then:

Add https://sites.andypbrowne.com as a second 1-pager in this repo ([github.com/andypbrowne/workshops](https://github.com/andypbrowne/workshops)). Follow `sites-site-plan.md`. Match `content/index.njk` markup and classes. Reuse CSS, fonts, `base.njk`, `eleventy.config.js`, `netlify.toml`. Dark mode is already in the CSS and layout. Keep it. Do not start a new repo or a second Netlify site. Do not add a blog, CMS, form, or a link to the workshops page. Do not follow `workshops-site-plan.md`.

Workshops stays at `/`. Sites is `content/sites/index.njk` at `/sites/`. Add the Netlify 200 rewrite in this repo. Fix `base.njk` so canonical, og:url, and og:image are per-page (see Metadata). Use the locked copy in this plan. LinkedIn is already `metadata.linkedin`. Copy the three Go deeper thumbs from the paths in this plan.

**Stop when** local `npm start` shows `/` unchanged and `/sites/` matching this plan (light, dark, phone width). Then tell me the Netlify domain + CNAME steps. Do not add the custom domain or DNS yourself.

---

## Product

A public page Andy can text, email, or nametag-share when someone needs a leveled-up website: small business, portfolio, author/artist identity, or a clear personal page.

**Offer:** one finished website they own and can update. Andy writes copy with them in a short, organized pass. They edit later in Sanity. Andy is optional after handoff.

**Audience:** artists, authors, small-business owners, people who need a real online identity. Remote is fine. Not WordPress. Not a custom store. Not a corporate redesign.

**CTA:** LinkedIn (`https://www.linkedin.com/in/andypbrowne`). Secondary: header/footer to [andypbrowne.com](https://andypbrowne.com/) only. No contact form.

---

## Locked copy

Use this wording. Do not invent agency language. Do not mention JPMorgan, DesignOps, or Eleventy. Do not invent testimonials. Do not link workshops.andypbrowne.com.

**Page title / og:title:** Websites — Andy Garber-Browne

**Meta description:** A finished website for a small business, portfolio, or online identity — one you can keep and update without me.

**H1:** Websites

**The sentence (hero / lede):**
You get a finished website that looks like you. You can keep it without me.

(First clause in `.gradient-text`, same as workshops.)

**Supporting paragraphs:**
I make websites for small businesses, artists, authors, and people who need a clear page on the web. Not a theme you fight. Not a monthly retainer.

We write the words together, in a short organized pass, not a month of revisions. You edit the site later in Sanity, which is built for that. When we launch, the site is yours. I am optional after that.

**What happens** (same markup as `content/index.njk`: `ol.steps`, each `li` is `.step-when` / `h3` / `p`)

1. `.step-when`: Before  
   `h3`: Intake: who you are, what the site has to do, what *done* looks like  
   `p`: A short written brief — pages, tone, and what we will not build

2. `.step-when`: Build  
   `h3`: We write together, then I ship the site  
   `p`: A live site that looks like you. As little as 3 weeks

3. `.step-when`: Handoff  
   `h3`: How to edit in Sanity, what to do when you want a change  
   `p`: You can keep it. I am optional.

**Good fit**
- A small business, artist, author, or person who needs a real site (portfolio, shop-window, “this is me”)
- You will work with me on the words. I will keep that part tight
- You want to own the site and edit it yourself
- One finished site — not an ongoing marketing program
- You can be anywhere. Intake is a call or, if you are local, in person

**Not this**
- WordPress
- A custom store built from scratch (Shopify is fine if that is the right tool)
- A theme you will “just tweak”
- A monthly retainer to keep improving it
- Ads, or “make us go viral”
- A large-company redesign, or a site that needs a team

**Questions** (`<details name="faq">`, same as workshops)

Who is this for?

Artists, authors, small businesses, and people who need a leveled-up portfolio or online identity. Remote is fine. If you already know what the site is *for*, we can talk.

What do I actually get?

A finished website. We write the copy together. I keep that work organized so we are not trading drafts forever. You update the site later in Sanity. I am optional after launch.

How long does it take?

As little as 3 weeks, if we stay on the brief and you can meet for the writing.

Do I have to be in New York?

No. Remote is fine. If you are in the NY Metro area we can meet in person for intake. We do not need to sit in a room for the whole build.

Do you work in WordPress? Can you build a shop?

No WordPress. I will not build a custom store from scratch. Shopify is fine if you need that. I can do basic SEO if you want it. I will not sell you an SEO retainer.

Will you just keep the site forever?

No. Handoff is part of the work. You edit in Sanity. I am optional after that. If you want a later change, we can talk about that as a new, small thing.

How much does it cost?

Usually $2,500–$6,000 for a typical site. It can vary with how many pages, how much we write together, and whether we are replacing something messy.

How do we start?

Message me on LinkedIn with what the site is for and a link to anything you have now (even if you hate it). We’ll see if it’s a fit.

**CTA label:** Message me on LinkedIn  
**CTA URL:** `https://www.linkedin.com/in/andypbrowne` (`{{ metadata.linkedin }}`)  
**CTA caption:** Write me what the site is for.

**Footer** (already in layout): Andy Garber-Browne · NY Metro · [andypbrowne.com](https://andypbrowne.com/)

**Go deeper** (`section.deeper`, same list-with-thumbs markup as workshops)

Intro: I have written about some of this work:

Copy these files from `~/Developer/andypbrowne/content/assets/images/` into `public/img/thumbs/`. Do not invent images. Do not reuse the workshops thumbs.

| Label | href | File | alt |
|-------|------|------|-----|
| Simona Prives’ artist portfolio | https://andypbrowne.com/blog/simonas-site/ | `thumb-simona-prives-portfolio.avif` | Simona Prives artist portfolio |
| A young adult author’s website | https://andypbrowne.com/blog/ya-author/ | `thumb-ya-author-16x9.jpg` | A young adult author’s website |
| Choosing type | https://andypbrowne.com/blog/choosing-type/ | `thumb-choosing-type.png` | Choosing type |

No client screenshot grid of live sites. No workshops link.

**Closing:** That’s the site. Message me on LinkedIn with what you need the page to do.

---

## Page outline

Same regions as [workshops.andypbrowne.com](https://workshops.andypbrowne.com) / `content/index.njk`. Local URL is `/sites/` (hostname `sites.andypbrowne.com`).

1. Header (layout): Andy Garber-Browne → andypbrowne.com
2. Intro: h1, lede, supporting paragraphs
3. What happens (`ol.steps`)
4. Good fit / not this (`aside.fit`)
5. Questions (`details`)
6. CTA (`.action-pill`)
7. Go deeper
8. Closing
9. Footer (layout): NY Metro

No extra nav. Shared 404 is fine. No JS app.

---

## Stack (same repo as workshops)

Repo: [andypbrowne/workshops](https://github.com/andypbrowne/workshops). Shared: `public/css/index.css` (light + dark), fonts, `_includes/layouts/base.njk`, `eleventy.config.js`, headers in `netlify.toml`.

| Piece | Do this |
|-------|---------|
| Workshops URL | `https://workshops.andypbrowne.com/` → existing `/` |
| Sites URL | `https://sites.andypbrowne.com/` → `/sites/` via Netlify 200 rewrite |
| Local | `npm start` — `/` is workshops, `/sites/` is this page |
| Content | `content/sites/index.njk` |
| Metadata | Per-page title, description, `pageUrl`, OG image. Fix `base.njk`. Global `_data/metadata.js` stays the workshops default + shared `linkedin` |
| DNS | Add `sites.andypbrowne.com` on the **existing** Netlify site; CNAME `sites` → **this** site’s `*.netlify.app` hostname (same value workshops already uses) |

**Netlify rewrite** (add to existing `netlify.toml`):

```toml
[[redirects]]
	from = "https://sites.andypbrowne.com/*"
	to = "/sites/:splat"
	status = 200
	force = true
```

No second GitHub repo. No second Netlify project. Pages stay quiet: no link from sites to workshops.

If you add a third 1-pager later (decision hour, teaching), same pattern: new folder, new hostname, same CSS.

---

## Design

Reuse the shipped workshops CSS. Do not restyle.

- Fonts: Inter, Cedar, Newsreader (already in `public/fonts/`)
- Light: almond swatch background, midnight text (`--color-midnight-80` / `#1B4167`)
- Dark: already in `@media (prefers-color-scheme: dark)` plus `color-scheme` and theme-color in `base.njk`
- Max width ~42rem, mobile-first
- `.action-pill` for the CTA
- Existing favicons

No stock photos. No laptop smiles. No client screenshot grid.

---

## Out of scope (v1)

- Booking calendar, Stripe, a separate pricing page (price lives in Questions)
- Contact form / Netlify Forms
- Invented testimonials
- CMS for this marketing page
- Portfolio subpages
- Naming Eleventy
- Any link to workshops.andypbrowne.com
- A new CSS file or a dark-mode toggle (dark mode is already in the shared stylesheet)
- A second repo
- Invented Go deeper images. Use the three named files only

---

## Build order

Agent (stop after 5):

1. Fix `base.njk` so canonical, `og:url`, and OG image can be per-page
2. Add `content/sites/index.njk` using workshops markup and this locked copy
3. Copy the three Go deeper thumbs into `public/img/thumbs/`
4. Add `public/img/OG/thumb-sites.png`
5. Add the `sites.andypbrowne.com` rewrite to `netlify.toml`. `npm start`: `/` still workshops; `/sites/` is the new page; check light, dark, phone width

Andy (after local looks right):

6. Netlify: add domain `sites.andypbrowne.com` on the **existing** site
7. DNS: CNAME `sites` → the same `*.netlify.app` hostname workshops already uses

---

## Done when

**Agent (local)**

- [ ] `/sites/` matches the locked copy and the workshops page structure (`ol.steps`, FAQ, `.deeper` with the three named thumbs)
- [ ] `/` is still the workshops page
- [ ] Dark mode still works on both pages (no extra CSS)
- [ ] LinkedIn CTA is `https://www.linkedin.com/in/andypbrowne`
- [ ] Footer is NY Metro, links to andypbrowne.com
- [ ] Price on the page is $2,500–$6,000
- [ ] Simona, YA author, and Choosing type links work
- [ ] No workshops link on the sites page
- [ ] Shared CSS/layout only. No second repo or JS app

**Andy (live)**

- [ ] Sharing `sites.andypbrowne.com` does not unfurl as Decision workshops (canonical + OG image are sites)
- [ ] https://sites.andypbrowne.com loads over HTTPS and shows the sites page
- [ ] https://workshops.andypbrowne.com is unchanged
