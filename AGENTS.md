# AGENTS

Instructius per treballar en aquest repositori (web estàtica de **Proddigi Films**).

## Resum del projecte

- **Què és:** pàgina web estàtica d'una productora audiovisual de Barcelona.
- **Entry:** `code.html` — conté HTML + CSS + JavaScript en el mateix fitxer.
- **Per què no hi ha build:** no calen paquets ni compilar res; GitHub Pages ens serveix directament.

## Tecnologia

- HTML5 semàntic i `data-theme` per al mode clar/oscur.
- CSS puro (variables, `:root`, `clamp()`, `backdrop-filter`, `grid`/`flex`).
- JavaScript nadi (`.addEventListener`, `<dialog>`, `dataset`, `IntersectionObserver`-style filtres).
- No s'utilitzen frameworks, react, node modules o libreríes externes.

## Estructura recomanada

```text
.
├── code.html            # Document principal (edició local)
├── index.html           # Entrada per a GitHub Pages (còpia de code.html)
├── screen.png           # Captura per a descripcions/repositòries
├── README.md            # Documentació general
├── DESIGN.md            # Disseny editorial / tokens
├── AGENTS.md            # Aquest fitxer
└── LICENSE              # Opcional (si es distribueix el codi)
```

## Com revisar el codi

1. **Provar localment.** Obre `file:///Users/xarop/Local Sites/proddigi/code.html` (o `python3 -m http.server`) i comprova dark/light, filtres, lightbox i responsive.
2. **Ser conscientious amb el disseny.** Canviar els colors o ràtios afecta el sistema editorial; actualitza `DESIGN.md` si canvia l'estètica.
3. **No afegeixi dependències** sense acord. Aquesta és una web 100% estàtica.

## Regras de convenció

- Llenguatge de la interfície: `ca`.
- Classes CSS guiades per nom descriptiu (p. ex. `.cinema-card`, `.hero-cta-action`).
- Punts mòbils primaris: `clamp()` i `grid-template-columns: repeat(auto-fit, minmax(...))`.
- Si es treballa en un fitxer molt llarg, no extrapola canvis entre temes sense fer un test local.

## Desplegament (GitHub Pages)

1. Configura el repositori amb branca `main`.
2. En GitHub, **Settings → Pages**: branca `main`, ruta `/ (root)`.
3. La pàgina estarà a `https://<usuari>.github.io/proddigi`.
4. L'URL s'escriu a `README.md` i s'ha de refreshar després de cap canvi.

## Punts d'atenció

- `screen.png` i qualsevol caràcter executable no haurien d'incloure-s'hi.
- No canviïs el selector `data-theme` ni el `lang="ca"` sense actualitzar la documentació.
