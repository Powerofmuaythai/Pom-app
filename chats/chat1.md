# POM mobile app design

_Started 2026-08-26 17:06 UTC_

---

## User

Design a mobile app for POM

## Assistant



## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: ask_user]_

Form's up — mainly waiting on what the app actually does (shop vs. training vs. gym), since the design system only covers the web shop.

## User

Answered — Asked for follow-up questions; app_purpose: Shopping — browse and buy equipment on mobile; screen_count: Full app, 10+ screens; signature: Scannable gear/QR check-in; lang: German UI, English notes

## Assistant



## Assistant

_[tool: ask_user]_

_[tool: ask_user]_

Round two is up — scanner behaviour, screen list, and how far checkout goes.

## User

Answered — scan_role: Scan gear in a P.O.M store — price, sizes, add to bag, Scan a QR on owned gear — authenticity + care/warranty; screens: Product detail, Size guide; commerce_depth: Browse → bag only

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: copy_files]_

_[tool: copy_starter_component]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Building the app now — a single interactive iOS prototype: 10 screens, browse → bag, with the scanner as the centre tab (in-store product scan + owned-gear passport).

_[tool: dc_write]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: dc_html_str_replace]_

_[tool: multi_screenshot]_

_[tool: show_html]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Built as one interactive iOS prototype, German UI, on the P.O.M tokens. Ten screens: Start, Sortiment (filter/sort sheet), Produkt (buy bar replaces tab bar, size-guide sheet), Scanner, both scan results, Warenkorb, Suche, Merkliste, Konto. Checkout dead-ends with a toast, as agreed.

The scanner is the centre tab and has two modes — Regal-Code for in-store gear (sizes + shelf stock) and QR am Innenlabel for gear you own (gold seal, serial, warranty date, care notes, reorder). Left column holds the design notes in English; the screen list jumps between states. Tweaks panel has start screen, scan-tab style (raised gold circle vs flat tab), promo bar, stock lines.

Every image is a labelled placeholder naming its crop — send real photography and nothing in the layout has to move.

## User

Fix this design so it publishes cleanly: `POM App.dc.html`

What looks wrong: fotos

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: show_html]_

_[tool: delete_file]_

_[tool: ready_for_verification]_

Publishing blockers removed: the device frame was loading a separate JSX file the bundler can't inline — it's now drawn inside the design itself (file deleted), the webfonts are a direct `<link>` in the head, and there's a bundler thumbnail. Click **Publish as artifact** again to re-check.

On "fotos" — the design contains no photography at all. Every image area is a labelled grey placeholder naming its crop (`Bild 4:5 · Fighter im Clinch`, `Produkt 4:5`), which in a published artifact reads as empty boxes. I can't generate photos. Upload product shots and I'll drop them into the hero, tiles, gallery and bag rows.
