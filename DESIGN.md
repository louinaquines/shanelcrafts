# Shanel Crafts PH — Design Direction

## Grounding
The subject is **hand-coiled fuzzy-wire flowers and cash-bouquets** — a warm, tactile, slightly kitschy-but-earnest Filipino gifting craft, sold by one person at markets and over Messenger. The design should feel like **a well-made keepsake shop window**, not a SaaS product or a generic florist template. Reference points: washi-tape and kraft-paper wrapping, hand lettering, the artist's own chibi self-portrait logo, the "sunburst" flat-lay bouquet photography style already used in her own posts (see `s1`–`s17`: bouquets shot dead-center with the wrapping fanned out like a paper sunburst).

## 1. Color — pulled directly from `s-logo.jpg`
Named, not generic Tailwind defaults:

| Token | Hex | Where it comes from | Use |
|---|---|---|---|
| `--blush` | `#FBE3E7` | Logo background | Page background (light mode base) |
| `--rose` | `#E8A0B4` | Bouquet/petal pink in logo | Secondary accent, card backgrounds, tags |
| `--mauve-ink` | `#7D4A5C` | The "Shanel Crafts" script color | Primary accent — links, buttons secondary state, underlines |
| `--plum` | `#4A2A3A` | Darkest shadow tone in the hair/script | Headings, primary text |
| `--gold` | `#C9A24B` | Pulled from the money-bouquet ₱ note gold + garland rosettes | CTA buttons, price tags, "money" product accents |
| `--cream` | `#FFF9F4` | Warm off-white (not stark white) | Surface color for cards/sections alternating with blush |
| `--sprig` | `#6E8259` | Leaf green from bouquet foliage | Small accents only (never a background) — availability dots, small icons |
| `--ink` | `#2A1D22` | Near-black, warmed not pure black | Body copy on light backgrounds |

Rule: **no pure white (#FFF), no pure black.** Everything is warmed toward the blush/plum family so photography (which is warm-toned, often shot on tile or grass) sits naturally in the page rather than looking pasted onto a cold UI.

Explicitly rejecting the generic-AI palette defaults: no warm-cream-plus-terracotta (#D97757) combo, no near-black-plus-acid-accent, no SaaS blue.

## 2. Type
Two families, clearly distinct roles:
- **Display/headline:** a warm, slightly quirky serif or hand-drawn-adjacent display face with real character — e.g. **"Fraunces"** (variable, can dial in "soft" optical size for a rounded, almost hand-lettered feel) or **"Playfair Display"** at a heavier weight paired with **soft/rounded terminals**. This carries the "craft market signage" personality the mauve script in the logo already has. Avoid anything that reads as corporate-editorial (no generic Times-adjacent serif).
- **Body/UI:** a warm humanist sans with good Filipino/Tagalog character support — e.g. **"Inter"** dialed to a slightly wider tracking, or **"Figtree."** Used for prices, product descriptions, buttons, nav.

Type scale follows a ~1.25–1.333 ratio (minor third → perfect fourth), not arbitrary jumps. Line length capped under ~70ch for body copy. **No tracked-out all-caps eyebrow labels**, no single-word-in-italic headline gimmick — section intros are written as real sentences in sentence case.

## 3. Layout concept
Single scrolling page, **center-weighted for the hero and bouquet showcases** (mirrors how she already photographs bouquets — centered, symmetric, "sunburst" wrap fanned both sides), but **left-aligned for reading content** (how-to-order steps, FAQ) since ragged-center text is harder to scan.

```
┌─────────────────────────────────────────┐
│  [logo]   Mga Gama  Paagi sa Order  FB/IG│  <- slim sticky nav, blush bg
├─────────────────────────────────────────┤
│                                           │
│     HERO — s1.jpg full-bleed, dimmed     │
│     script-style H1 + FB + IG CTAs       │  <- center-weighted
│                                           │
├─────────────────────────────────────────┤
│   "Dili malaya" — 3 short                │  <- left-aligned, 3-col on
│   differentiators, icon + line each      │     desktop / stacked mobile
├─────────────────────────────────────────┤
│   SIGNATURE: FUZZY-WIRE BOUQUETS         │  <- largest section, gets the
│   Full-width feature treatment, most     │     most visual real estate;
│   photos, own sub-hero moment            │     this is what she's known for
├─────────────────────────────────────────┤
│   MORE FROM THE SHOP (secondary)         │
│   Money Bouquets | Money Garlands |      │  <- smaller, denser asymmetric
│   Lei Garlands | Keepsakes               │     grid — same visual language,
│                                           │     less real estate than above
├─────────────────────────────────────────┤
│   HOW TO ORDER — numbered, because it    │  <- numbering earned here:
│   genuinely IS a sequence (1-2-3-4)      │     it's a real process
├─────────────────────────────────────────┤
│   FIND US — market-stall photo (s18),    │
│   FB page link, GCash note               │
├─────────────────────────────────────────┤
│   Footer — logo mark, FB, est. 2024      │
└─────────────────────────────────────────┘
```

## 4. Hero section (uses `s1.jpg`)
`s1.jpg` — the glowing money-garland bouquet shot outdoors at golden hour with fairy lights — is the single most "wow" image in the set. It becomes the **full-bleed hero background**, treated so type stays legible:
- A soft `--plum` gradient scrim from bottom (strong) to top (near-transparent) — not a flat dark overlay over the whole image, so the lit bouquet detail still reads.
- Headline set in the display serif, in warm English, e.g. something close to *"Flowers that never wilt."* — no accent-one-word trick, no eyebrow tag above it. Final wording to be refined with the client, in her own voice.
- Two CTAs, equal weight since both are real order channels: **"Message sa Facebook"** (`--gold` fill, `--plum` text, FB icon) and **"DM sa Instagram"** (outlined in `--mauve-ink`, IG icon) — side by side on desktop, stacked on mobile. A third, quieter text-link → "Tan-awa ang mga gama" ("See the catalog," smooth-scrolls down). No pricing anywhere near the hero — this section sells the craft, not a number.
- This is the **one orchestrated motion moment** for the whole page (per the "spend your boldness once" principle): on load, the headline and CTA fade/rise in as a single choreographed beat — nothing else on the page auto-animates on scroll. Product cards get hover feedback (a gentle lift + the wrapping-paper corner "peeling" slightly), not scroll-triggered fade-ins on every section — that's the generic tell we're avoiding.

## 5. Product showcase — signature first, avoiding the "SaaS card grid" trap
Real bouquet photography is already visually rich (varied compositions, colors, backgrounds). Forcing it into identical rounded cards with the same drop-shadow would flatten exactly what makes it appealing. Instead:
- **Fuzzy-wire bouquets get their own full-width, generously spaced section first** — the signature product should visually outweigh everything else on the page, not sit in a tab alongside money items as if they're equal. This is the section most likely to include the labeled "flower anatomy" shots (`s14`, `s15`, `s16`) as a genuine, informative asset — a "hover a flower name to see it" moment reinforcing these are hand-made from named materials, not stock flowers.
- **Money bouquets, money garlands, lei garlands, and keepsakes** follow in a denser "more from the shop" section — same visual language (asymmetric masonry, not identical cards) but smaller and lower on the page, since they're secondary lines.
- An **asymmetric, masonry-style photo layout** throughout (varying image sizes, not a uniform grid), similar to how the assets themselves vary in aspect ratio.
- Borders/frames kept **minimal** — let the photos (which already have color-blocked wrapping paper) provide the visual structure. Where a frame is needed, use a thin `--rose` hairline or a torn/deckle-edge treatment (nods to kraft paper), not a uniform 8px border-radius card on everything.
- **No prices anywhere** — product captions are just the name/occasion fit (e.g. "Para sa graduation," "Para sa birthday"), never a number. This is a showcase, not a store shelf.

## 6. "How to order" — numbering earned here
This is the one place numbered steps (1→2→3→4) are legitimate, because ordering **is** a real sequence: Message/comment → tell us the occasion + colors → we quote & confirm via GCash → pickup or delivery. Everywhere else on the page, avoid numbered/eyebrow decoration.

## 7. Restraint checklist (self-critique before shipping)
- [ ] Only one bold/animated moment (hero load) — confirm nothing else auto-animates on scroll.
- [ ] No pure black, no pure white anywhere.
- [ ] No tracked-out ALL-CAPS labels; no "WORD — fragment" em-dash labels; no "→" tacked onto buttons.
- [ ] Every numbered list is an actual sequence, not decoration.
- [ ] Mobile-first: hero, nav, and CTA tap targets tested at 375px width before anything else.
- [ ] Visible keyboard focus states; `prefers-reduced-motion` respected (kill the hero entrance animation).
- [ ] Copy is written in the shop-owner's plain, warm voice (short, concrete, Filipino-English market tone) — not generic marketing copy ("Discover our exquisite collection...").

## Still open — need your call before I lock this
See the questions at the end of my reply.
