/* ============================================
   WAKEFIELD F.C. — STYLESHEET
   Navy & Old Gold · Heritage English Football
   ============================================ */

:root {
  /* Azul corporativo del club y variantes de tinta */
  --navy: #0b1f38;
  --navy-dark: #050d1a;
  --navy-mid: #142a48;
  --dark: #070c16;

  /* Latón envejecido — no oro de vitrina */
  --gold: #b6893a;
  --gold-light: #d3ab5c;
  --gold-dim: #7c5f28;

  /* Granate — el segundo color, el de la cerveza y el ladrillo de Ossett */
  --claret: #7a2430;
  --claret-dim: #551a23;
  --claret-light: #a5424f;

  --white: #ece2cd;
  --grey: #8c8370;
  --grey-light: #c7bfa8;

  /* Superficies con leve elevación sobre --dark */
  --surface-1: rgba(236, 226, 205, 0.03);
  --surface-2: rgba(236, 226, 205, 0.06);
  --hairline: rgba(182, 137, 58, 0.18);
  --hairline-strong: rgba(182, 137, 58, 0.4);

  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Source Serif 4', Georgia, serif;
  --font-sans: 'JetBrains Mono', 'Courier New', monospace;

  --max-width: 1200px;
  --transition: 0.25s ease;
  --transition-fast: 0.15s ease;

  --shadow-sm: 0 2px 10px rgba(0,0,0,0.3);
  --shadow-md: 0 10px 28px rgba(0,0,0,0.4);
}

/* RESET */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--dark);
  color: var(--white);
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.7;
  overflow-x: hidden;
  padding-top: 65px;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }

/* Selección y foco accesible */
::selection { background: var(--gold); color: var(--navy-dark); }
a:focus-visible,
button:focus-visible,
.btn-primary:focus-visible,
.btn-secondary:focus-visible {
  outline: 2px solid var(--gold-light);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

/* ============================================
   NAVBAR PRINCIPAL (ARREGLADO)
   ============================================ */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  background: var(--navy-dark);
  border-bottom: 3px double var(--hairline);
  z-index: 999;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.navbar.scrolled {
  border-bottom: 3px double var(--hairline-strong);
  box-shadow: var(--shadow-md);
}

.nav-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  gap: 2rem;
}

/* ============================================
   HISTÓRICO — Sub-desplegable anidado
   ============================================ */

.historico-separator {
  height: 1px;
  background: rgba(212, 175, 55, 0.2);
  margin: 0.4rem 1.25rem;
  display: block;
}

/* El trigger de "Histórico ▸" / "Archivo ▸" */
.subdropdown {
  position: relative;
}

.historico-label-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--gold-dim);
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.historico-label-trigger:hover {
  color: var(--gold);
  background: rgba(212, 175, 55, 0.08);
  padding-left: 1.5rem;
}

/* El sub-menú que aparece a la derecha */
.subdropdown-menu {
  position: absolute;
  top: 0;
  left: 100%;
  background: var(--navy-dark);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-top: 2px solid var(--gold);
  box-shadow: var(--shadow-md);
  min-width: 180px;
  list-style: none;
  z-index: 10000;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-6px);
  transition: opacity var(--transition-fast), transform var(--transition-fast), visibility var(--transition-fast);
}

.subdropdown:hover .subdropdown-menu,
.subdropdown:focus-within .subdropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.subdropdown-menu li a {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--grey-light);
  padding: 0.75rem 1.25rem;
  display: block;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.subdropdown-menu li a:hover {
  color: var(--gold);
  background: rgba(212, 175, 55, 0.08);
  padding-left: 1.5rem;
}

/* EL CONTENEDOR PRINCIPAL */
.nav-logo {
  justify-self: start; /* <- Añadimos esto */
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

/* EL CABALLO */
.nav-logo .logo-icon {
  height: 28px;             /* Mantiene su tamaño */
  width: auto;
  display: block;
  transform: translateY(-1px); /* El truco: lo desplaza exactamente 2 píxeles hacia arriba */
}

/* EL BLOQUE DE TEXTO VERTICAL */
.nav-logo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

/* LÍNEA 1: WAKEFIELD F.C. */
.nav-logo-text .logo-title {
  font-family: var(--font-sans), system-ui, sans-serif;
  font-weight: 700;         
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  color: #ffffff;
  line-height: 1;
  display: flex;            /* Flex interno para alinear WAKEFIELD y F.C. */
  align-items: center;
  gap: 3px;                 /* Cierra el hueco gigante entre palabras */
}

/* EL F.C. DORADO */
.nav-logo-text .logo-title .gold-fc {
  color: #e5a93c;
}

/* LÍNEA 2: EST. 1890 */
.nav-logo-text .logo-sub {
  font-family: var(--font-sans), system-ui, sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #e5a93c;
  margin-top: 2px;
  line-height: 1;
}
.nav-season {
  justify-self: end; /* <- Añadimos esto */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.2;
  flex-shrink: 0;
}
.nav-season span:first-child {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--gold);
}
.nav-season span:last-child {
  font-family: var(--font-sans);
  font-size: 0.58rem;
  letter-spacing: 0.03em;
  color: var(--grey);
  text-transform: uppercase;
}



/* ============================================
   ELEMENTOS DE TEXTO Y ENLACES
   ============================================ */
.logo-text {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.02em;
  color: var(--white);
  text-transform: uppercase;
}
.logo-text em {
  color: var(--gold);
  font-style: normal;
}
.logo-est {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.03em;
  color: var(--gold-dim);
  text-transform: uppercase;
}

.nav-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
}

/* AÑADE ESTE BLOQUE EXACTAMENTE AQUÍ */
.nav-links {
  justify-self: center; /* <- La magia del centro perfecto */
  display: flex;
  list-style: none;
  gap: 0;
  align-items: center;
  margin: 0;
  padding: 0;
}
/* FIN DEL BLOQUE AÑADIDO */

.nav-links > li > a {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--grey-light);
  padding: 1rem 1rem; /* Ajustamos el padding superior/inferior para el centrado */
  transition: color var(--transition);
  display: flex;
  align-items: center;
}

.nav-links > li > a:hover,
.nav-links > li > a.active {
  color: var(--gold);
}

/* Dropdown */
.dropdown { position: relative; }
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--navy-dark);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-top: 2px solid var(--gold);
  box-shadow: var(--shadow-md);
  min-width: 200px;
  list-style: none;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition: opacity var(--transition-fast), transform var(--transition-fast), visibility var(--transition-fast);
}
.dropdown:hover .dropdown-menu,
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.dropdown-menu li a {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--grey-light);
  padding: 0.75rem 1.25rem;
  display: block;
  transition: all var(--transition);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.dropdown-menu li a:hover {
  color: var(--gold);
  background: rgba(212, 175, 55, 0.08);
  padding-left: 1.5rem;
}
.nav-toggle {
  display: none;
  background: none;
  border: 1px solid var(--gold-dim);
  color: var(--gold);
  font-size: 1.2rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
}

/* ============================================
   HERO
   ============================================ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--navy-dark);
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(182,137,58,0.14) 1px, transparent 1px);
  background-size: 7px 7px;
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  pointer-events: none;
}
.hero-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 200px;
  background: linear-gradient(to top, var(--dark), transparent);
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  max-width: 700px;
  margin-left: 8vw;
}


.hero-eyebrow {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.5rem;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 900;
  line-height: 1.05;
  color: var(--white);
  margin-bottom: 1.5rem;
}
.hero-title em {
  color: var(--gold);
  font-style: italic;
}
.hero-sub {
  font-family: var(--font-body);
  font-size: 1.2rem;
  color: var(--grey-light);
  margin-bottom: 2.5rem;
  font-style: italic;
}
.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 1rem 2.2rem;
  border: 1px solid var(--gold);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 14px 100%, 0 calc(100% - 14px));
  transition: background var(--transition-fast), color var(--transition-fast);
}
.btn-primary { color: var(--navy-dark); background: var(--gold); }
.btn-secondary { color: var(--gold); background: transparent; padding: 0.9rem 2.2rem; }
.btn-primary:hover { background: var(--navy-dark); color: var(--gold); }
.btn-secondary:hover { background: var(--gold); color: var(--navy-dark); }
.btn-primary:active,
.btn-secondary:active { transform: translateY(1px); }
.hero-badge {
  position: absolute;
  right: 8vw;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  opacity: 0.15;
}

.hero-badge img {
  width: 480px;
  filter: brightness(1.2) invert(0);
  mix-blend-mode: screen;
  margin-top: -50px;
}
.badge-ring {
  width: 280px;
  height: 280px;
  border: 3px solid var(--gold);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.badge-year {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
}
.badge-name {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.05em;
  color: var(--gold);
  text-transform: uppercase;
  margin-top: 0.5rem;
}

/* ============================================
   VIDIPRINTER — teleimpresora de resultados
   El elemento de firma: así se veían los resultados
   de fútbol inglés en la tele durante generaciones.
   ============================================ */
.lema-strip {
  background: #000;
  border-top: 1px solid var(--hairline-strong);
  border-bottom: 1px solid var(--hairline-strong);
  padding: 0.9rem 0;
  overflow: hidden;
}
.lema-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0 1.75rem;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  letter-spacing: 0.01em;
  color: #86b566;
  text-shadow: 0 0 3px rgba(134,181,102,0.35);
}
.lema-inner .vp-label {
  color: var(--gold-light);
  font-weight: 700;
  text-shadow: 0 0 3px rgba(211,171,92,0.4);
}
.lema-inner .vp-loss { color: #b5555f; text-shadow: 0 0 3px rgba(181,85,95,0.4); }
.lema-inner .vp-draw { color: #c7bfa8; text-shadow: none; }
.lema-dot { color: var(--grey); opacity: 0.35; }

/* ============================================
   SECTIONS GENERAL
   ============================================ */
.section { padding: 6rem 0; }
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
}
.section-header { margin-bottom: 3rem; }
.section-label {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.03em;
  color: var(--claret-light);
  margin-bottom: 0.6rem;
}
.section-label::before { content: '— '; }
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: var(--white);
}
.section-rule { display: none; }

/* ============================================
   NOTICIAS
   ============================================ */
.noticias { background: var(--navy-dark); }
.noticias-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: start;
}
.noticia-featured {
  border: 1px solid var(--hairline);
  background: var(--surface-1);
  padding: 2.5rem;
}
.noticia-briefs {
  display: flex;
  flex-direction: column;
}
.noticia-card {
  padding: 1.5rem 0;
  border-top: 1px solid var(--hairline);
}
.noticia-briefs .noticia-card:last-child { border-bottom: 1px solid var(--hairline); }
.noticia-tag {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  letter-spacing: 0.02em;
  color: var(--claret-light);
}
.noticia-tag::before { content: '● '; font-size: 0.55rem; }
.noticia-card h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);
  margin: 0.5rem 0 0.6rem;
  line-height: 1.3;
}
.noticia-featured h3 { font-size: 1.85rem; margin-top: 0.75rem; }
.noticia-card p {
  font-size: 0.95rem;
  color: var(--grey-light);
  margin-bottom: 1rem;
  line-height: 1.6;
}
.noticia-link {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  letter-spacing: 0.02em;
  color: var(--gold);
  border-bottom: 1px solid var(--gold-dim);
  padding-bottom: 1px;
}
.noticia-link:hover { color: var(--gold-light); border-color: var(--gold-light); }

/* ============================================
   EL CLUB — LISTADO TIPO DOSSIER
   ============================================ */
.pilares { background: var(--dark); }
.pilares-list {
  border-top: 1px solid var(--hairline);
}
.pilar {
  display: grid;
  grid-template-columns: 220px 1fr auto;
  gap: 2.5rem;
  align-items: baseline;
  padding: 2.2rem 0;
  border-bottom: 1px solid var(--hairline);
  transition: background var(--transition);
  position: relative;
}
.pilar:hover { background: var(--surface-1); }
.pilar-tag {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--gold-dim);
  white-space: nowrap;
}
.pilar-tag::before {
  content: '§ ';
  color: var(--claret-light);
}
.pilar h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--white);
}
.pilar p {
  grid-column: 2;
  font-size: 0.98rem;
  color: var(--grey);
  line-height: 1.6;
  max-width: 46ch;
}
.pilar-link {
  grid-row: 1 / 3;
  grid-column: 3;
  align-self: center;
  font-family: var(--font-sans);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  color: var(--gold-dim);
  transition: color var(--transition);
}
.pilar:hover .pilar-link { color: var(--gold); }

/* ============================================
   TEMPORADA BANNER
   ============================================ */
.temporada-banner {
  background:
    linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
  border-top: 1px solid rgba(212,175,55,0.2);
  border-bottom: 1px solid rgba(212,175,55,0.2);
}
.temporada-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
}
.temporada-text h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1rem;
  line-height: 1.2;
}
.temporada-text p {
  color: var(--grey-light);
  margin-bottom: 2rem;
  font-size: 1rem;
}
.temporada-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-left: 1px solid rgba(212,175,55,0.2);
  padding-left: 3rem;
}
.stat { text-align: center; }
.stat-num {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 600;
  color: var(--gold);
  line-height: 1;
}
.stat-label {
  display: block;
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.03em;
  color: var(--grey);
  margin-top: 0.3rem;
}

/* ============================================
   FOOTER
   ============================================ */
.footer {
  background: var(--navy-dark);
  border-top: 1px solid rgba(212,175,55,0.2);
  padding: 4rem 0 2rem;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  margin-bottom: 3rem;
}
.footer-name {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--white);
  margin-bottom: 0.5rem;
}
.footer-lema {
  font-family: var(--font-body);
  font-style: italic;
  color: var(--gold-dim);
  margin-bottom: 0.5rem;
}
.footer-est {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  letter-spacing: 0.02em;
  color: var(--grey);
}
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: right;
}
.footer-links a {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--grey);
  transition: color var(--transition);
}
.footer-links a:hover { color: var(--gold); }
.footer-bottom {
  background: var(--navy-dark);
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 1.5rem 2rem;
  text-align: center;
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.02em;
  color: var(--grey);
  text-transform: uppercase;
}

/* ============================================
   INNER PAGES — SHARED
   ============================================ */
.page-hero {
  padding: 10rem 0 5rem;
  background: var(--navy-dark);
  border-bottom: 3px double var(--hairline-strong);
  position: relative;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(182,137,58,0.16) 1px, transparent 1px);
  background-size: 7px 7px;
  mask-image: linear-gradient(to bottom, black, transparent 85%);
  -webkit-mask-image: linear-gradient(to bottom, black, transparent 85%);
}
.page-hero-inner {
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
}
.page-hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  color: var(--white);
  line-height: 1.05;
  margin-bottom: 1rem;
}
.page-hero h1 em { color: var(--gold); font-style: italic; }
.page-hero p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: var(--grey-light);
  font-style: italic;
  max-width: 600px;
}
.page-content {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 5rem 2rem;
}
.page-content h2 {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
  margin: 3rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(212,175,55,0.2);
}
.page-content h2:first-child { margin-top: 0; }
.page-content h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--gold);
  margin: 2rem 0 0.75rem;
}
.page-content p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: var(--grey-light);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}
.page-content p strong {
  color: var(--white);
  font-weight: 600;
}

/* Comunicados */
.comunicado {
  border: 1px solid var(--hairline);
  background: var(--surface-1);
  padding: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  transition: border-color var(--transition), background var(--transition);
}
.comunicado::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px;
  height: 100%;
  background: var(--gold);
}
.comunicado:hover { border-color: var(--hairline-strong); background: var(--surface-2); }
.comunicado-meta {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--gold-dim);
  margin-bottom: 0.75rem;
}
.comunicado h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--white);
  margin-bottom: 1rem;
}
.comunicado p {
  font-family: var(--font-body);
  color: var(--grey-light);
  font-size: 1rem;
  line-height: 1.7;
}

/* Plantilla tabla */
.squad-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
}
.squad-table th {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--gold-dim);
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(212,175,55,0.3);
}
.squad-table td {
  padding: 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--grey-light);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.squad-table tr {
  transition: background var(--transition-fast);
}
.squad-table tr:hover td {
  background: var(--surface-2);
  color: var(--white);
}
.squad-num {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--gold);
  font-size: 1.1rem;
}
.squad-name {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--white);
  font-size: 1.05rem;
}
.squad-pos {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--gold-dim);
}
.squad-captain {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--navy-dark);
  background: var(--gold);
  padding: 0.15rem 0.5rem;
  margin-left: 0.5rem;
}

.squad-section-cedidos {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(212, 175, 55, 0.15);
  color: var(--gold-dim);
  font-size: 1.4rem;
}

.squad-loan {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--claret-light);
}

.sponsors {
  background: var(--navy-dark);
  border-top: 1px solid rgba(212,175,55,0.15);
  border-bottom: 1px solid rgba(212,175,55,0.15);
  padding: 2.0rem 0;
}
.sponsors-label {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--grey);
  text-align: center;
  margin-bottom: 1.5rem;
}
.sponsors-grid {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0rem;
  flex-wrap: wrap;
}
.sponsor-item {
  opacity: 0.5;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
}
.sponsor-item:hover { opacity: 0.9; }
.sponsor-item img {
  height: 55px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .pilar { grid-template-columns: 160px 1fr; }
  .pilar-link { grid-row: auto; grid-column: 2; margin-top: 0.5rem; }
  .temporada-inner { gap: 2.5rem; }
  .hero-badge { display: none; }
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-toggle { display: block; }
  .hero-badge { display: none; }
  .hero-content { margin-left: 0; padding: 7rem 1.5rem 3rem; }
  .noticias-grid { grid-template-columns: 1fr; }
  .pilar { grid-template-columns: 1fr; row-gap: 0.5rem; }
  .pilar p { grid-column: 1; }
  .pilar-link { grid-row: auto; grid-column: 1; margin-top: 0.25rem; }
  .temporada-inner { grid-template-columns: 1fr; }
  .temporada-stats { flex-direction: row; border-left: none; padding-left: 0; border-top: 1px solid rgba(212,175,55,0.2); padding-top: 2rem; }
  .footer-inner { flex-direction: column; }
  .footer-links { text-align: left; }
  .lema-inner { flex-wrap: wrap; gap: 0.75rem; }
}

.fi {
  display: inline-block;
  width: 24px;          /* Ajusta el ancho a tu gusto */
  height: auto;
  border-radius: 2px;   /* Un ligero toque redondeado estilo videojuego */
  box-shadow: 0 1px 3px rgba(0,0,0,0.4); /* Un sombreado negro sutil */
  vertical-align: middle;
}

.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.lightbox.is-open {
  display: flex;
}

.lightbox img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
}
