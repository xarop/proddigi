# AGENTS

Instruccions per treballar en aquest repositori (web estàtica de **Proddigi Films**).

## Resum del projecte

- **Què és:** pàgina web estàtica d'una productora audiovisual de Barcelona.
- **Entry:** `index.html` (HTML) + `styles.css` (CSS) + `app.js` (JavaScript) — tres fitxers estàtics i separats.
- **Per què no hi ha build:** no calen paquets ni compilar res; GitHub Pages ens serveix directament.
- **Repositori:** [github.com/xarop/proddigi](https://github.com/xarop/proddigi)
- **Web en viu:** [xarop.github.io/proddigi](https://xarop.github.io/proddigi)

## Tecnologia

- HTML5 semàntic i `data-theme` per al mode clar/oscur.
- CSS puro (variables, `:root`, `clamp()`, `backdrop-filter`, `grid`/`flex`).
- JavaScript nadi (`.addEventListener`, `<dialog>`, `dataset`, `IntersectionObserver`-style filtres).
- No s'utilitzen frameworks, react, node modules o libreríes externes.

## Estructura recomanada

```text
.
├── index.html           # Pàgina principal (HTML semàntic)
├── styles.css           # Design system editorial (CSS)
├── app.js               # Interactivitat nativa
├── README.md            # Documentació general
├── DESIGN.md            # Disseny editorial / tokens
├── AGENTS.md            # Instruccions per a treballar en aquest repositori
└── .gitignore           # Patrons de neteja del repositori
```

## Com revisar el codi

1. **Provar localment.** Obre `file:///Users/xarop/Local Sites/proddigi/index.html` (o `python3 -m http.server`) i comprova dark/light, filtres, lightbox i responsive.
2. **Ser conscientious amb el disseny.** Canviar els colors o ràtios afecta el sistema editorial; actualitza `DESIGN.md` si canvia l'estètica.
3. **No afegeixi dependències** sense acord. Aquesta és una web 100% estàtica.
4. **Responsive / menú mòbil:** amb `@media (max-width: 860px)`, obri el `.menu-toggle` i comprova que surt el menú amb els enllaços i el selector d'idioma; assegura't que el switch de mode clar/fosc segueix fora del menú. Feu clic fora o premi `Escape` per tancar-lo; s'ha de tancar també al clicar en un enllaç.

## Regras de convenció

- Llenguatge de la interfície: `ca`.
- Classes CSS guiades per nom descriptiu (p. ex. `.cinema-card`, `.hero-cta-action`).
- Punts mòbils primaris: `clamp()` i `grid-template-columns: repeat(auto-fit, minmax(...))`.
- Si es treballa en un fitxer molt llarg, no extrapola canvis entre temes sense fer un test local.

## Desplegament (GitHub Pages)

1. Repositori principal: [`github.com/xarop/proddigi`](https://github.com/xarop/proddigi)
2. La branca `main` està configurada per a GitHub Pages
3. La pàgina estarà en viu a `https://xarop.github.io/proddigi`
4. Cada `git push origin main` actualitza automàticament la web

## Punts d'atenció

- `_design/code.html` és arxiu de referència (no s'usa en producció)
- La pàgina en producció usa `index.html` + `styles.css` + `app.js`
- No canviïs el selector `data-theme` ni el `lang="ca"` sense actualitzar la documentació
