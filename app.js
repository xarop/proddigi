(() => {
  'use strict';

  // 1. Les dades de la pel·lícula van a la lightbox (director, DoP, format, any)
  function updateLightboxSpecs(el) {
    if (!el) return;
    document.getElementById('dialogDirector').textContent = el.dataset.director || 'Proddigi Team';
    document.getElementById('dialogDoP').textContent = el.dataset.dop || 'Cinematografia Proddigi';
    document.getElementById('dialogFormat').textContent = el.dataset.format || '4K DCI • Cinema Anamorphic';
    document.getElementById('dialogYear').textContent = el.dataset.year || '2024';
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cinema-card, #heroReelTrigger').forEach((item) => {
      item.addEventListener('click', () => updateLightboxSpecs(item));
    });
  });

  // 2. Referències al DOM
  const themeToggle = document.getElementById('themeToggle');
  const menuBtn = document.getElementById('menuToggle');
  const primaryNav = document.getElementById('primaryNav');
  const langBtns = document.querySelectorAll('.lang-switcher button');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.cinema-card');
  const dialog = document.getElementById('videoLightbox');
  const closeBtn = document.getElementById('closeLightbox');
  const iframe = document.getElementById('lightboxIframe');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogClient = document.getElementById('dialogClient');
  const dialogCategory = document.getElementById('dialogCategory');
  const heroReel = document.getElementById('heroReelTrigger');

  // 3. Helpers del lightbox
  function openModal(embedUrl, title, client, category) {
    iframe.src = embedUrl;
    dialogTitle.textContent = title;
    dialogClient.textContent = client;
    dialogCategory.textContent = category || 'Proddigi Cinema Player';
    dialog.showModal();
  }

  function closeModal() {
    dialog.close();
    iframe.src = ''; // desconnecta el document de l'iframe
  }

  // 4. Tema clar / fosc (fora del menú hamburguesa)
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      const thumb = themeToggle.querySelector('.theme-thumb');
      if (thumb) thumb.style.transform = isDark ? 'translateX(18px)' : 'translateX(0)';
    });
  }

  // 5. Menú hamburguesa (només a mides petites)
  if (menuBtn && primaryNav) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = primaryNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.setAttribute('aria-label', isOpen ? 'Tancar menú' : 'Obrir menú');
    });

    // Tanca en clicar un enllaç
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Obrir menú');
      });
    });

    // Tanca amb la tecla Escape
    const dismissMenu = (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        primaryNav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Obrir menú');
      }
    };
    document.addEventListener('keydown', dismissMenu);

    // Tanca en clicar fora del menú ni del botó
    document.addEventListener('click', (e) => {
      const isInside = primaryNav.contains(e.target) || menuBtn.contains(e.target);
      if (!isInside && primaryNav.classList.contains('is-open')) {
        primaryNav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Obrir menú');
      }
    });
  }

  // 6. Selector d'idioma
  if (langBtns) {
    langBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        langBtns.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      });
    });
  }

  // 7. Filtre de categories
  if (filterBtns && projectCards) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
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

  // 8. Lightbox nativa <dialog>
  if (dialog && closeBtn && iframe && dialogTitle && dialogClient && dialogCategory) {
    closeBtn.addEventListener('click', closeModal);

    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) closeModal();
    });
  }

  // 9. Reproducció del showreel des del hero
  if (heroReel) {
    heroReel.addEventListener('click', () => {
      openModal(
        heroReel.dataset.embed,
        heroReel.dataset.title,
        heroReel.dataset.client,
        heroReel.dataset.category
      );
    });
  }

  // 10. Triggers de les targetes del portafoli
  if (projectCards) {
    projectCards.forEach((card) => {
      card.addEventListener('click', () => {
        openModal(
          card.dataset.embed,
          card.dataset.title,
          card.dataset.client,
          card.dataset.tag
        );
      });
    });
  }
})();

