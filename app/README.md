# P.O.M

Mobile-first React implementation of the P.O.M Muay Thai equipment shop, built from the
Claude Design handoff in the repo root (`README.md`, `chats/`, `project/`).

German UI, browse-to-bag flow with a scanner tab for in-store gear and owned-gear
authenticity passports. Checkout intentionally dead-ends with a toast, matching the
source design. All imagery is a labelled placeholder — no photography was supplied.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs to `dist/`.

## Standalone build

```
npm run build:standalone
```

Produces a single self-contained `dist-standalone/index.html` with all JS/CSS inlined —
open it directly in a browser (double-click), no dev server needed. Requires internet
access for the Google Fonts `<link>`.
