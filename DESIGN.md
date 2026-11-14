# DESIGN SYSTEM — Prodddigi

Documentació del disseny editorial de la web de **Proddigi Films**. El sistema està implementat en puro CSS (sense pre-processador ni framework) i s'aplica a tot el document `code.html`.

## 1. L'identitat visual

El disseny és **cinematogràfic**: fons negre, textuer gràfica, "grain de pell" i una orientació estreta (cineastoscope 2.39:1). El missatge és de tertulia i autor: no és un lloc fràgil, sinó un espai on les imatges de film tenen espai.

### Temes

- **Mode clar** (per defecte: `data-theme="dark"`). L'HTML rep `data-theme="dark"` / `data-theme="light"`.
- El mode es canvia mitjançant l'atribut `data-theme` sobre `<html>` i s'assegura amb variables CSS `:root` i `[data-theme="light"]`.

## 2. Tokens de disseny

Tots els valors es defineixen a `:root` (mode clar) i s'inverteixen al selector `[data-theme="light"]`.

| Token | Dark (per defecte) | Light |
|---|---|---|
| Fons (`--bg`) | `#0a0a0b` | `#f8f8f9` |
| Superfície (`--surface`) | `#141416` | `#ffffff` |
| Superfície elevada (`--surface-elevated`) | `#1c1c1f` | `#f0f0f2` |
| Text principal (`--text`) | `#f4f4f5` | `#121214` |
| Text secundari (`--text-muted`) | `#8e8e93` | `#6e6e73` |
| Text subtil (`--text-dim`) | `#5c5c63` | `#9898a0` |
| Border essencial (`--border`) | `rgba(255,255,255,0.10)` | `rgba(0,0,0,0.08)` |
| Border sutil (`--border-subtle`) | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.04)` |
| Indicador roig (`--indicator-red`) | `#FF334B` | `#E0283F` |
| Tipografia sanes (`--font-sans`) | `Plus Jakarta Sans` | `Plus Jakarta Sans` |
| Mono (`--font-mono`) | `Space Grotesk` | `Space Grotesk` |

## 3. Tipografia

- **Sanes:** `Plus Jakarta Sans` (títols, text, UI).
- **Mono / sotres:** `Space Grotesk` (etiquetes, lletres, màquines de soldar).
- Mida base `16px`, línia `1.5`, `text-rendering: optimizeLegibility`, antialiasing habilitat.
- Contenidors màxims (`--container-max`) i marges (`--gutter`) amb `clamp()` per mantenir la jerarquia en tot mida.

## 4. Espaiig i ràtios

- Gairebé tots els espais fan servir `rem`/`clamp()` per a escalat tipogràfic.
- `border-radius` llifat en `2px` i `4px` (baix). No s'utilitzen radis grans, a part formes arrodonides en botons i riques.
- Vertical padding dels blocs: `clamp(4rem, 8vw, 6.5rem)`.
- Espais entre elements (`gap`) amb `rem` i `clamp()`.

## 5. Pòrtics i components

- **Header** — estàtic, amb `backdrop-filter: blur(16px)`, fons semi-transparent i vora de divisió.
- **Hero** — imatge panoràmica de fons amb "vignette" i "film grain" (seccions `.hero-backdrop-container`, `.hero-vignette`, `.film-grain`).
- **Tech bar / barra de dades tècniques** — `4K DCI • 2.39:1 CINEMASCOPE`, `BARCELONA STUDIO`, etc.
- **Cards del portafoli** — amb títol, client, any, durada i "badge" d'estil.
- **Filtre d'especialitat** — botons que mostren/amaga les cards segons `data-category`.
- **Lightbox natiu (`<dialog>`)** — reprodueix vídeo a través de l'iframe de Vimeo, amb tancament clicant fora i botó `close`.
- **Footer** — adreça, contacte directe i creditació `xarop.com`.

## 6. Llengües i accesibilitat

- `<html lang="ca">`.
- Navegació per teclat i `aria` flags (`aria-expanded`, `aria-pressed`, `aria-current`, `aria-labelledby`).
- Filtres amb estats actius (`.active`) i venda (`.hidden`).
- Imatges amb `alt` descriptiu i `loading="lazy"`.

## 7. Conservació del sistema

- **No** s'afegeixen dependències externs (cap `package.json`, cap framework). El CSS i el JS estan tots al fitxer.
- Si s'importa un canvi de disseny, caldrà actualitzar els tokens i revisar els components listats a la secció 5.
- Per a noves pages, es conserva el mateix esquema de classes (estil BEM lleig: `.cinema-card`, `.card-frame`, `.filter-btn`, etc.).

## 8. Notes de rendiment

- `loading="lazy"` a les imatges.  
- Fons amb `background-attachment` i deeps fint per no degradar el render.  
- Si es publiquen videoclips més pesants, pensar en lazy-load i en format optimitzat.
