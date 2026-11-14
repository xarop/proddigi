    document.addEventListener('DOMContentLoaded', () => {
      // 1. Sophisticated Architectural Theme Switcher (Dark / Light)
      function syncThemeToggle() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const thumbs = document.querySelectorAll('#themeToggle span, #themeToggleMobile span');
        thumbs.forEach(thumb => {
          thumb.style.transform = isDark ? 'translateX(0)' : 'translateX(18px)';
        });
      }

      function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        syncThemeToggle();
      }

      const themeToggle = document.getElementById('themeToggle');
      const themeToggleMobile = document.getElementById('themeToggleMobile');

      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          setTheme(isDark ? 'light' : 'dark');
        });
      }

      if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', () => {
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          setTheme(isDark ? 'light' : 'dark');
        });
      }

      // 2. Mobile Nav Toggle
      const menuBtn = document.getElementById('menuToggle');
      const primaryNav = document.getElementById('primaryNav');
      if (menuBtn && primaryNav) {
        menuBtn.addEventListener('click', () => {
          const isOpen = primaryNav.classList.toggle('is-open');
          menuBtn.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when clicking a link
        const navLinks = primaryNav.querySelectorAll('a');
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            primaryNav.classList.remove('is-open');
            menuBtn.setAttribute('aria-expanded', 'false');
          });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
          if (!primaryNav.contains(e.target) && !menuBtn.contains(e.target)) {
            primaryNav.classList.remove('is-open');
            menuBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
            primaryNav.classList.remove('is-open');
            menuBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      // 3. Language Switcher State (synchronize both selectors)
      const allLangBtns = document.querySelectorAll('.lang-switcher button');
      allLangBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          allLangBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-pressed', 'true');
        });
      });

      // 4. Category Filter Bar
      const filterBtns = document.querySelectorAll('.filter-btn');
      const projectCards = document.querySelectorAll('.cinema-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter;
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          });
        });
      });

      // 5. Native <dialog> Video Lightbox Handling
      const dialog = document.getElementById('videoLightbox');
      const closeBtn = document.getElementById('closeLightbox');
      const iframe = document.getElementById('lightboxIframe');
      const dialogTitle = document.getElementById('dialogTitle');
      const dialogClient = document.getElementById('dialogClient');
      const dialogCategory = document.getElementById('dialogCategory');

      function openModal(embedUrl, title, client, category) {
        iframe.src = embedUrl;
        dialogTitle.textContent = title;
        dialogClient.textContent = client;
        dialogCategory.textContent = category || 'Proddigi Cinema Player';
        dialog.showModal();
      }

      function closeModal() {
        dialog.close();
        iframe.src = ''; // stop playback
      }

      closeBtn.addEventListener('click', closeModal);

      // Close when clicking dialog backdrop
      dialog.addEventListener('click', (e) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
          closeModal();
        }
      });

      // Hero Showreel trigger
      const heroReel = document.getElementById('heroReelTrigger');
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

      // Project Cards triggers
      projectCards.forEach(card => {
        card.addEventListener('click', () => {
          openModal(
            card.dataset.embed,
            card.dataset.title,
            card.dataset.client,
            card.dataset.tag
          );
        });
      });
    });