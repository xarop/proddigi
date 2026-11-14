# Proddigi

**Proddigi** (Proddigi Films) és una productora audiovisual de Barcelona. Fa de l'**estudi cinematogràfic** i treballa amb càmeres professionals, òptiques anamòrfiques i una mirada d'autor, des de la **narrativa documental, la publicitat, la producción institucional i la fiction**.

Aquest repositori conté la web estàtica de Proddigi: un disseny editorial cinematogràfic (dark/light mode), filtres d'especialitat, lightbox de vídeo nativa i accés per teclat.

## Enllaços

- 💻 **Pàgina principal:** [`index.html`](./index.html)
- 🌐 **Demostració en línia:** [https://xarop.github.io/proddigi](https://xarop.github.io/proddigi)
- 📦 **Repositori GitHub:** [github.com/xarop/proddigi](https://github.com/xarop/proddigi)
- 📧 **Contacte:** [info@proddigi.com](mailto:info@proddigi.com) · +34 93 532 66 47
- 📍 **Estudi:** Carrer del Consell de Cent, 315 E2, 08007 Barcelona

## Arquitectura

La pàgina està composta per tres fitxers estàtics modularitzats:

- **HTML semàntic (`index.html`)** — estructura de la pàgina (portafoli, estudi, serveis, contacte, lightbox de vídeo).
- **CSS pur (`styles.css`)** — el "design system" editorial cinematogràfic, amb suport de mode clar/dark a través de `data-theme` i variables CSS.
- **JavaScript natiu (`app.js`)** — filtre de categoria, lightbox de vídeo, gestió del selector de llengua i del switch de mode clar/fosc, tot sense handlers en línia.

No requereix build, paquets ni servidor: és un repositori que es pot obrir directament o desplegar a GitHub Pages.

## Arxiu del repositori

```text
.
├── index.html           # Pàgina principal (HTML semàntic)
├── styles.css           # Design system editorial (CSS nadiu)
├── app.js               # Interactivitat nativa (sense handlers en línia)
├── README.md            # Aquesta documentació
├── DESIGN.md            # Disseny editorial / tokens
├── AGENTS.md            # Instruccions per a treballar en aquest repositori
└── .gitignore           # Patrons de neteja del repositori
```

## Com executar localment

Només cal un navegador:

```bash
# Opcional: servir localment per a evitar problemes de CORS amb imatges remotas
python3 -m http.server 8000
# Obre http://localhost:8000
```

## Desplegament

El repositori està desplegat a **GitHub Pages** automàticament:

1. Repositori: [`github.com/xarop/proddigi`](https://github.com/xarop/proddigi)
2. Web en viu: [`https://xarop.github.io/proddigi`](https://xarop.github.io/proddigi)
3. Branca: `main` (root path `/`)

Cada push a `main` actualitza automàticament la pàgina en viu.

## Licència

Descripció ocita. Genera un fitxer `LICENSE` si vols distribuir el codi. El disseny editorial recau en l'identitat de Proddigi Films.
