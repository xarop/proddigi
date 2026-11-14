# Proddigi

![Branca principal](https://img.shields.io/badge/branch-main-blue?style=flat-square)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen?style=flat-square)](https://<usuari>.github.io/proddigi)

**Proddigi** (Proddigi Films) és una productora audiovisual de Barcelona. Fa de l'**estudi cinematogràfic** i treballa amb càmeres professionals, òptiques anamòrfiques i una mirada d'autor, des de la **narrativa documental, la publicitat, la producción institucional i la fiction**.

Aquest repositori conté la web estàtica de Proddigi: un disseny editorial cinematogràfic (dark/light mode), filtres d'especialitat, fouquese implícita de vídeo nativa i accés per teclat.

## Enllaços

- 💻 **Codi font:** [`code.html`](code.html)
- 🌐 **Demostració en línia:** `https://<usuari>.github.io/proddigi` *(cal completar amb el nom d'usuari després d'activar GitHub Pages)*
- 📧 **Contacte:** [info@proddigi.com](mailto:info@proddigi.com) · +34 93 532 66 47
- 📍 **Estudi:** Carrer del Consell de Cent, 315 E2, 08007 Barcelona

## Arquitectura

La pàgina és un solo fitxer estàtic (`code.html`) que agrupa:

- **HTML** — estructura semàntica i àrea de continguts (portafoli, estudi, serveis, contacte, lightbox de vídeo).
- **CSS nadiu (pure CSS)** — el "design system" editorial cinematic, amb suport de mode clar/dark a través de l'atribut `data-theme`.
- **JavaScript natiu** — filtre de categoria, lightbox de vídeo, botiga de retall, i gestió del selector de llengua.

No requereix build, paquets ni servidor: és un repositori que es pot obrir directament o desplegar a GitHub Pages.

## Arxiu del repositori

```text
.
├── code.html            # Document principal (edició local)
├── index.html           # Entrada per a GitHub Pages (còpia de code.html)
├── screen.png           # Captura per a descripcions i imatges de repositori
└── README.md            # Aquesta documentació
```

## Com executar localment

Només cal un navegador:

```bash
# Opcional: servir localment per a evitar problemes de CORS amb imatges remotas
python3 -m http.server 8000
# Obre http://localhost:8000
```

## Desplegament

El repositori està preparat per a **GitHub Pages**:

1. Crear el repositori `proddigi` al compte de GitHub.
2. Empeltar aquesta branca com a `main`.
3. Activar GitHub Pages en *Settings → Pages* amb la branca `main` i la ruta `/ (root)`.
4. Després de publicar, la web estarà disponible a `https://<usuari>.github.io/proddigi`.

## Licència

Descripció ocita. Genera un fitxer `LICENSE` si vols distribuir el codi. El disseny editorial recau en l'identitat de Proddigi Films.
