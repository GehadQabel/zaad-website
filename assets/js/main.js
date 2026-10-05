/* ==========================================================================
   ZAAD POS - Official Website Interactive JavaScript Module
   Handles Theme Switching, Lightbox Modal, Animations, and Navigation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Theme Toggle (Dark / Light Mode with localStorage)
  // ------------------------------------------------------------------------
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('zaad-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default to dark for fintech feel
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('zaad-theme', theme);
    currentTheme = theme;
    
    // Update theme toggle icons if present
    themeToggleBtns.forEach(btn => {
      btn.innerHTML = theme === 'dark' 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    });
  }

  applyTheme(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });

  // Listen for system theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('zaad-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ------------------------------------------------------------------------
  // 2. Scroll Progress Indicator & Active Section ScrollSpy
  // ------------------------------------------------------------------------
  const progressBar = document.getElementById('scroll-progress');
  const navbar = document.querySelector('.navbar');

  const sections = [
    { id: 'hero', navHref: '#hero' },
    { id: 'why-zaad', navHref: '#why-zaad' },
    { id: 'daily-z', navHref: '#why-zaad' },
    { id: 'shift-control', navHref: '#why-zaad' },
    { id: 'accounts', navHref: '#why-zaad' },
    { id: 'stocktaking', navHref: '#why-zaad' },
    { id: 'purchase-receiving', navHref: '#why-zaad' },
    { id: 'backup', navHref: '#why-zaad' },
    { id: 'features', navHref: '#features' },
    { id: 'security', navHref: '#security' },
    { id: 'contact', navHref: '#contact' }
  ];

  const mainNavLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 120;
    let currentNavHref = '#hero';

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionEl = document.getElementById(sections[i].id);
      if (sectionEl) {
        const top = sectionEl.offsetTop;
        if (scrollPos >= top) {
          currentNavHref = sections[i].navHref;
          break;
        }
      }
    }

    mainNavLinks.forEach(link => {
      if (link.getAttribute('href') === currentNavHref) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', () => {
    // Scroll progress bar width
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && progressBar) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }

    // Navbar shadow on scroll
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    updateActiveNavLink();
  });

  updateActiveNavLink();

  // ------------------------------------------------------------------------
  // 3. Mobile Navigation Menu Toggle
  // ------------------------------------------------------------------------
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const isOpen = navLinks.classList.contains('mobile-open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking links or buttons
    navLinks.querySelectorAll('.nav-link, button').forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 4. Screenshot Lightbox Modal with Multi-Image Gallery Support
  // ------------------------------------------------------------------------
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelectorAll('.close-lightbox');
  let lightboxPrevBtn = document.querySelector('.lightbox-nav-btn.prev');
  let lightboxNextBtn = document.querySelector('.lightbox-nav-btn.next');
  let lightboxCounter = document.getElementById('lightbox-counter');

  let activeGalleryItems = [];
  let currentGalleryIndex = 0;

  function updateGalleryDisplay() {
    if (activeGalleryItems.length === 0 || !lightboxImg) return;
    const currentItem = activeGalleryItems[currentGalleryIndex];
    const imgSrc = currentItem.getAttribute('data-lightbox-src') || currentItem.querySelector('img')?.src;
    const caption = currentItem.getAttribute('data-lightbox-caption') || currentItem.querySelector('img')?.alt || 'ZAAD POS Screenshot';
    
    lightboxImg.src = imgSrc;
    lightboxImg.alt = caption;
    if (lightboxCaption) lightboxCaption.textContent = caption;

    if (activeGalleryItems.length > 1) {
      if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'flex';
      if (lightboxNextBtn) lightboxNextBtn.style.display = 'flex';
      if (lightboxCounter) {
        lightboxCounter.style.display = 'block';
        lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${activeGalleryItems.length}`;
      }
    } else {
      if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'none';
      if (lightboxNextBtn) lightboxNextBtn.style.display = 'none';
      if (lightboxCounter) lightboxCounter.style.display = 'none';
    }
  }

  const expandableScreenshots = document.querySelectorAll('[data-lightbox]');

  expandableScreenshots.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const galleryName = item.getAttribute('data-lightbox-gallery');
      if (galleryName) {
        activeGalleryItems = Array.from(document.querySelectorAll(`[data-lightbox-gallery="${galleryName}"]`));
        currentGalleryIndex = activeGalleryItems.indexOf(item);
        if (currentGalleryIndex === -1) currentGalleryIndex = 0;
      } else {
        activeGalleryItems = [item];
        currentGalleryIndex = 0;
      }

      updateGalleryDisplay();
      if (lightboxModal) {
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function showPrevImage() {
    if (activeGalleryItems.length <= 1) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
    updateGalleryDisplay();
  }

  function showNextImage() {
    if (activeGalleryItems.length <= 1) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % activeGalleryItems.length;
    updateGalleryDisplay();
  }

  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevImage);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextImage);

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  lightboxClose.forEach(btn => btn.addEventListener('click', closeLightbox));
  
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // ------------------------------------------------------------------------
  // 5. Request Demo Modal
  // ------------------------------------------------------------------------
  const demoModal = document.getElementById('demo-modal');
  const demoTriggers = document.querySelectorAll('[data-open-demo]');
  const demoCloseBtns = document.querySelectorAll('.close-demo-modal');

  demoTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (demoModal) {
        demoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeDemoModal() {
    if (demoModal) {
      demoModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  demoCloseBtns.forEach(btn => btn.addEventListener('click', closeDemoModal));

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) closeDemoModal();
    });
  }

  // Close modals & Arrow Navigation on Keydown
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeDemoModal();
    }
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        isRtl ? showNextImage() : showPrevImage();
      } else if (e.key === 'ArrowRight') {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        isRtl ? showPrevImage() : showNextImage();
      }
    }
  });

  // ------------------------------------------------------------------------
  // 6. Intersection Observer Scroll Reveal Animations
  // ------------------------------------------------------------------------
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up, .customer-side-anim, .supplier-side-anim').forEach(el => revealObserver.observe(el));

  // ------------------------------------------------------------------------
  // 7. Interactive Conversion Demo Form Submission
  // ------------------------------------------------------------------------
  const demoForm = document.getElementById('demo-conversion-form');
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const storeName = document.getElementById('cta-store-name')?.value.trim() || '';
      const storeContact = document.getElementById('cta-store-contact')?.value.trim() || '';
      const storeTypeSelect = document.getElementById('cta-store-type');
      const storeType = storeTypeSelect ? storeTypeSelect.options[storeTypeSelect.selectedIndex].text : '';

      const isArabic = document.documentElement.getAttribute('lang') === 'ar' || document.documentElement.getAttribute('dir') === 'rtl';
      let message = '';
      if (isArabic) {
        message = `مرحبًا، أريد تجربة نظام زاد ZAAD POS لمتجري:\n• اسم المتجر: ${storeName}\n• رقم الهاتف / البريد: ${storeContact}\n• نوع النشاط: ${storeType}\n\nبرجاء التواصل لتجهيز النسخة التجريبية.`;
      } else {
        message = `Hello, I would like to request a ZAAD POS demo for my store:\n• Store Name: ${storeName}\n• Contact Info: ${storeContact}\n• Store Type: ${storeType}\n\nPlease reach out to arrange the trial.`;
      }

      const waUrl = `https://wa.me/201029247516?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }
});

