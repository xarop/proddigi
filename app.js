(() => {
  'use strict';

  // ========================================================================
  // 1. DOM References
  // ========================================================================
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const menuBtn = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');
  const langBtns = document.querySelectorAll('.lang-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.cinema-card');
  const dialog = document.getElementById('videoLightbox');
  const closeBtn = document.getElementById('closeLightbox');
  const iframe = document.getElementById('lightboxIframe');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogClient = document.getElementById('dialogClient');
  const dialogCategory = document.getElementById('dialogCategory');
  const dialogDoP = document.getElementById('dialogDoP');
  const dialogFormat = document.getElementById('dialogFormat');
  const dialogYear = document.getElementById('dialogYear');
  const heroReel = document.getElementById('heroReelTrigger');

  // ========================================================================
  // 2. Lightbox Functions
  // ========================================================================
  function openModal(embedUrl, title, client, category, director, dop, format, year) {
    iframe.src = embedUrl;
    dialogTitle.textContent = title;
    dialogClient.textContent = client;
    dialogCategory.textContent = category || 'Proddigi Cinema Player';
    if (dialogDoP) dialogDoP.textContent = dop || 'Cinematografia Proddigi';
    if (dialogFormat) dialogFormat.textContent = format || '4K DCI • Cinema';
    if (dialogYear) dialogYear.textContent = year || '2024';
    dialog.showModal();
  }

  function closeModal() {
    dialog.close();
    iframe.src = '';
  }

  // ========================================================================
  // 3. Theme Toggle (Dark/Light)
  // ========================================================================
  function initThemeToggle() {
    if (!themeToggle) return;

    // Carregar tema anterior de localStorage
    const savedTheme = localStorage.getItem('proddigi-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeToggleUI(savedTheme);

    themeToggle.addEventListener('click', () => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('proddigi-theme', newTheme);
      updateThemeToggleUI(newTheme);
    });
  }

  function updateThemeToggleUI(theme) {
    const thumb = themeToggle.querySelector('.theme-thumb');
    if (thumb) {
      thumb.style.transform = theme === 'dark' ? 'translateX(0)' : 'translateX(18px)';
    }
    themeToggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
  }

  // ========================================================================
  // 4. Mobile Menu Toggle
  // ========================================================================
  function initMenuToggle() {
    if (!menuBtn || !primaryNav) return;

    // Obrir/Tancar menú
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = primaryNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.setAttribute('aria-label', isOpen ? 'Tancar menú' : 'Obrir menú');
    });

    // Tancar menú quan es clica un enllaç
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Tancar menú amb Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Tancar menú quan es clica fora
    document.addEventListener('click', (e) => {
      const isInside = primaryNav.contains(e.target) || menuBtn.contains(e.target);
      if (!isInside && primaryNav.classList.contains('is-open')) {
        closeMenu();
      }
    });

    function closeMenu() {
      primaryNav.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Obrir menú');
    }
  }

  // ========================================================================
  // 5. Language Selector
  // ========================================================================
  function initLangSelector() {
    langBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        langBtns.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        // TODO: Implement language switching logic
        console.log('Language changed to:', btn.dataset.lang);
      });
    });
  }

  // ========================================================================
  // 6. Portfolio Filter
  // ========================================================================
  function initPortfolioFilter() {
    if (!filterBtns || !projectCards) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active button
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        projectCards.forEach((card) => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // ========================================================================
  // 7. Video Lightbox Event Listeners
  // ========================================================================
  function initLightbox() {
    if (!dialog || !closeBtn) return;

    // Tancar amb botó
    closeBtn.addEventListener('click', closeModal);

    // Tancar en clicar fora del dialog
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isClickOutside = (
        e.clientY < rect.top ||
        e.clientY > rect.bottom ||
        e.clientX < rect.left ||
        e.clientX > rect.right
      );
      if (isClickOutside) closeModal();
    });
  }

  // ========================================================================
  // 8. Project Cards & Hero Reel Triggers
  // ========================================================================
  function initProjectCards() {
    // Hero Reel
    if (heroReel) {
      heroReel.addEventListener('click', () => {
        openModal(
          heroReel.dataset.embed,
          heroReel.dataset.title,
          heroReel.dataset.client,
          heroReel.dataset.category,
          heroReel.dataset.director,
          heroReel.dataset.dop,
          heroReel.dataset.format,
          heroReel.dataset.year
        );
      });
    }

    // Portfolio Cards
    projectCards.forEach((card) => {
      card.addEventListener('click', () => {
        openModal(
          card.dataset.embed,
          card.dataset.title,
          card.dataset.client,
          card.dataset.categoryTag,
          card.dataset.director,
          card.dataset.dop,
          card.dataset.format,
          card.dataset.year
        );
      });
    });
  }

  // ========================================================================
  // 9. Initialize Everything on DOMContentLoaded
  // ========================================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initThemeToggle();
    initMenuToggle();
    initLangSelector();
    initPortfolioFilter();
    initLightbox();
    initProjectCards();
  }
})();
