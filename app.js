document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Dark/Light)
  const themeToggleDesktop = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');

  function syncThemeToggle() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const thumbs = document.querySelectorAll('#themeToggle span, #themeToggleMobile span');
    thumbs.forEach(thumb => {
      thumb.style.transform = isDark ? 'translateX(0)' : 'translateX(18px)';
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('proddigi-theme', theme);
    syncThemeToggle();
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('proddigi-theme') || 'dark';
  setTheme(savedTheme);

  // Desktop theme toggle
  if (themeToggleDesktop) {
    themeToggleDesktop.addEventListener('click', toggleTheme);
  }

  // Mobile theme toggle
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
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

  // 3. Language Switcher
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

  // 5. Video Lightbox Dialog
  const dialog = document.getElementById('videoLightbox');
  const closeBtn = document.getElementById('closeLightbox');
  const iframe = document.getElementById('lightboxIframe');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogClient = document.getElementById('dialogClient');

  function openModal(embedUrl, title, client) {
    iframe.src = embedUrl;
    dialogTitle.textContent = title;
    dialogClient.textContent = client;
    dialog.showModal();
  }

  function closeModal() {
    dialog.close();
    iframe.src = '';
  }

  closeBtn.addEventListener('click', closeModal);

  // Close on backdrop click
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

  // 6. Lightbox Specs Update
  function updateLightboxSpecs(el) {
    if (!el) return;
    document.getElementById('dialogDirector').textContent = el.dataset.director || 'Proddigi Team';
    document.getElementById('dialogDoP').textContent = el.dataset.dop || 'Cinematografia Proddigi';
    document.getElementById('dialogFormat').textContent = el.dataset.format || '4K DCI • Cinema Anamorphic';
    document.getElementById('dialogYear').textContent = el.dataset.year || '2024';
  }

  // Hero reel trigger
  const heroReel = document.getElementById('heroReelTrigger');
  if (heroReel) {
    heroReel.addEventListener('click', () => {
      updateLightboxSpecs(heroReel);
      openModal(
        heroReel.dataset.embed,
        heroReel.dataset.title,
        heroReel.dataset.client
      );
    });
  }

  // Project cards triggers
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      updateLightboxSpecs(card);
      openModal(
        card.dataset.embed,
        card.dataset.title,
        card.dataset.client
      );
    });
  });

  // 7. Scroll-based Active Link Animation
  const navLinks = document.querySelectorAll('nav ul a');
  const sections = document.querySelectorAll('section[id]');
  const navBar = document.querySelector('nav');

  function updateActiveLink() {
    let currentSection = null;

    // Find which section is currently in view
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section.id;
      }
    });

    // Update nav links and animate underline
    navLinks.forEach(link => {
      link.removeAttribute('aria-current');
      
      if (currentSection && link.getAttribute('href') === `#${currentSection}`) {
        link.setAttribute('aria-current', 'page');
        
        // Calculate and animate underline position
        if (navBar) {
          const navUl = navBar.querySelector('ul');
          if (navUl) {
            const linkRect = link.getBoundingClientRect();
            const navRect = navUl.getBoundingClientRect();
            
            const leftPos = linkRect.left - navRect.left;
            const width = linkRect.width;
            
            navBar.style.setProperty('--underline-left', `${leftPos}px`);
            navBar.style.setProperty('--underline-width', `${width}px`);
          }
        }
      }
    });
  }

  // Initialize underline position on page load
  window.addEventListener('load', () => {
    updateActiveLink();
  });

  // Update on scroll with throttling
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveLink, 50);
  }, { passive: true });

  // Click on nav links updates position immediately
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      setTimeout(updateActiveLink, 100);
    });
  });

  // 8. Hero Video Volume Control (Vimeo API)
  const volumeToggle = document.getElementById('volumeToggle');
  const heroVideoPlayer = document.getElementById('heroVideoPlayer');
  
  if (volumeToggle && heroVideoPlayer) {
    // Load Vimeo API script
    const vimeoScript = document.createElement('script');
    vimeoScript.src = 'https://player.vimeo.com/api/player.js';
    vimeoScript.async = true;
    
    vimeoScript.onload = () => {
      // Initialize Vimeo player
      const player = new window.Vimeo.Player(heroVideoPlayer);
      let isAudioOn = false;
      
      // Start muted
      player.setVolume(0).catch(e => console.log('Initial mute:', e));
      volumeToggle.classList.add('muted');
      
      // Volume toggle handler
      volumeToggle.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        try {
          if (isAudioOn) {
            // Mute
            await player.setVolume(0);
            isAudioOn = false;
            volumeToggle.classList.add('muted');
          } else {
            // Unmute - set to 70% volume for audio
            await player.setVolume(0.7);
            isAudioOn = true;
            volumeToggle.classList.remove('muted');
          }
        } catch (error) {
          console.log('Volume control error:', error);
        }
      });
    };
    
    document.head.appendChild(vimeoScript);
  }
});
