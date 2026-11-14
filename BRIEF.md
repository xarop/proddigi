# Product Requirements Document (PRD) & Project Brief
## Proddigi — Productora Audiovisual Barcelona (Web & Showcase 2026)

---

## 1. Visió General del Projecte & Objectius

### 1.1 Resum Executiu
**Proddigi** és una productora cinematogràfica i audiovisual independent amb seu a Barcelona (Carrer del Consell de Cent, 315). Especialitzada en narrativa cinematogràfica, publicitat d'alta gamma i documental de creació, Proddigi requereix una plataforma web de representació que reflecteixi la seva identitat: artesania cinematogràfica, rigor tècnic extrem, estètica editorial minimalista i absència d'artificis innecessaris.

### 1.2 Objectius Estratègics
- **Posicionament de Marca:** Establir una presència digital d'alt impacte visual que situï Proddigi al nivell dels millors estudis de producció europeus.
- **Showcase Cinematogràfic:** Prioritzar la visualització de filmografia i reel en alta definició (Vimeo Pro) sense friccions ni càrregues lentes.
- **Rigor Tècnic & Transparència:** Mostrar les especificacions cinematogràfiques de cada producció (DoP, càmeres ARRI/RED, òptiques anamòrfiques Hawk/Zeiss, perfils d'emulsió Kodak).
- **Conversió & Contacte:** Facilitar el contacte directe amb direcció i producció sense formularis burocràtics ni intermediaris.
- **Rendiment & Sobirania Tècnica:** Arquitectura d'altíssima velocitat (HTML5 pur / Astro SSG), sense dependències pesades ni frameworks inflats.

---

## 2. Públic Objectiu & Persones d'Usuari

1. **Directors Creatius & Agències de Publicitat (Barcelona / Madrid / Internacional):**
   - Busquen solucions de realització àgils amb acabat de cinema pur.
   - Valoren la claredat del reel, les mostres de peces per format (publicitat, corporatiu) i el contacte immediat.
2. **Productores Executives & Marques Globals:**
   - Cerquen fiabilitat tècnica, parc de càmeres propi i capacitat de producció integral a Barcelona.
3. **Plataformes Culturals & Festivals de Cinema:**
   - Interès en la línia documental i la narrativa d'autor.

---

## 3. Principis de Disseny & Direcció d'Art

| Àmbit | Especificació |
| :--- | :--- |
| **Estètica** | Editorial cinematogràfica, inspirada en publicacions de disseny suís i monocromatisme d'autor. |
| **Tipografia** | **Primària:** `Plus Jakarta Sans` (titulars precisos, sans geomètrica moderna). <br>**Tècnica/Mono:** `Space Grotesk` (metadades de càmera, minutatges, coordenades GPS). |
| **Paleta Cromàtica** | Mode Fosc natiu (`#0a0a0b`, superfícies `#141416`, text `#f4f4f5`) i Mode Clar d'alt contrast (`#fafafa`, `#111112`). Accent vermell rodatge (*rec dot*: `#ef4444`). |
| **Commutador Dark/Light** | Interruptor suís analògic pur (sense etiquetes de text), amb persistència a `localStorage`. |
| **Media & Hero** | Hero cinematogràfic d'ample complet (*full-bleed*), amb metadades tècniques en temps real i accés directe al Showreel (01:45). |

---

## 4. Arquitectura d'Informació & Estructura de Seccions

### 4.1 Capçalera Minimalista (`Site Header`)
- Logotip tipogràfic `proddigi` amb punt de gravació (*rec indicator*).
- Navegació contextual d'ancoratge: *Portafoli*, *Estudi*, *Contacte*.
- Commutador de tema (switch geomètric pur).
- Selector d'idioma estàtic/multilingüe: `CAT / ESP / ENG`.

### 4.2 Hero Cinematogràfic (`Hero Section`)
- Fotograma de fons panoràmic de Barcelona en clarobscur a resolució completa.
- Eyebrow tècnic: `Estudi Cinematogràfic • Barcelona / 41°23'24"N 2°09'57"E`.
- Proposta de valor: *"Producció audiovisual integral. A Proddigi entenem la producció com un procés artesanal de col·laboració continu."*
- Botó de reproducció del Showreel cinematogràfic.
- Metadades tècniques: `ARRI ALEXA MINI LF • HAWK V-LITE 2.0X ANAMORPHIC • KODAK 5219 • 4K DCI 2.39:1`.

### 4.3 Portafoli Filtrable & Graella de Projectes (`Portfolio Grid`)
- Filtres per categoria: **Tots**, **Publicitat**, **Corporatiu**, **Documental**.
- Targetes de projecte interactives amb imatge a proporció cinema, minutatge del film, categoria, any, títol i fletxa d'obertura (`↗`).
- **Peces incloses:**
  1. *The Only Man* (Documental, 2024, DoP: Marc Miró)
  2. *Diamonds* (Publicitat, 2024, DoP: Pol Orpinell)
  3. *UIC — Grau en Comunicació Audiovisual* (Corporatiu, 2024, DoP: Eduard Grau)
  4. *Join the Fight Against IBD* (Corporatiu / Científic, 2023, DoP: Gris Jordana)
  5. *COPISA — Infraestructures Globals* (Corporatiu, 2023, DoP: Arnau Valls)
  6. *Hoy es el principio del final* (Publicitat / Ficció, 2023, DoP: Dani Sánchez-López)

### 4.4 Finestra Modal de Cinema (`VideoModal Native Dialog`)
- Execució mitjançant l'element estàndard HTML5 `<dialog>`.
- Reproductor incrustat Vimeo Pro (`player.vimeo.com`) amb paràmetres nets (sense controls invasius ni recomanacions).
- Fitxa de rodatge sincronitzada: Cinematografia (DoP), Òptiques & Format, Any de Producció, Producció & Etalonatge.

### 4.5 Secció Estudi (`Studio Section`)
- Titular editorial: *"Quinze anys d'ofici, mirada d'autor i rigor tècnic."*
- Tres pilars d'estudi:
  - `01 / FILOSOFIA ARTESANAL`: Producció d'alta precisió sense fórmules industrials en sèrie.
  - `02 / EQUIP & INFRAESTRUCTURA`: Càmeres ARRI i RED pròpies, òptiques anamòrfiques Hawk i Zeiss, sales DaVinci Resolve a Barcelona.
  - `03 / COL·LABORACIÓ DIRECTA`: Connexió directa entre direcció, realització i client.
- Targeta d'adreça física: *Carrer del Consell de Cent, 315 E2, 08007 Barcelona* + botó *Iniciar Projecte ↗*.

### 4.6 Peu Editorial (`Footer`)
- Columna 1: Adreça de l'estudi de Barcelona.
- Columna 2: Canals directes (`info@proddigi.com`, `+34 93 532 66 47`, `produccio@proddigi.com`).
- Columna 3: Enllaços a xarxes (Vimeo Pro, Instagram, LinkedIn, Behance).
- Subpeu legal i de crèdit: `© 2026 Proddigi Films` + `Developed in Barcelona by xarop.com`.

---

## 5. Especificacions Tècniques & Stack

| Component | Tecnologia / Mètode |
| :--- | :--- |
| **Opció Monolítica** | `index.html` pur (HTML5 semàntic) + `style.css` autònom + Vanilla JS (0 dependències). |
| **Opció Modular** | **Astro 4+** (`BaseLayout.astro`, components modulars, `src/data/projects.ts` amb TypeScript). |
| **Allotjament & CDN** | **Netlify** / **GitHub Pages** (distribució Edge global, certificat SSL automàtic gratuït). |
| **Rendiment & Optimització** | Imatges WebP/AVIF amb `loading="lazy"` i `fetchpriority="high"` al hero. Preconnect a Google Fonts. |
| **SEO & Social Metadata** | Open Graph complet (`og:title`, `og:image`, `og:type`), Twitter Cards (`summary_large_image`), `robots.txt`, `sitemap.xml`. |
| **Enrutament & Redireccions** | Fitxer `_redirects` per forçar HTTPS, canonicalització sense www, i dreceres com `/showreel` i `/vimeo`. |

---

## 6. Full de Ruta (Roadmap) & Properes Fases

1. **Fase 1 (Completada):** Disseny UI minimalista, integració del reproductor Vimeo, filtratge de portfolio, mode fosc/clar natiu, SEO i fitxers de desplegament.
2. **Fase 2 (Activa):** Desplegament a producció a Netlify o GitHub Pages sota el domini canònic `proddigi.com`.
3. **Fase 3 (Futura):** Pàgines dinàmiques de detall per a cada filmografia individual (`/projectes/[slug]`) mitjançant Astro Content Collections per aprofundir en fotos de rodatge (*behind the scenes*), premis de festivals i fitxa d'equip completa.
