// =========================================
// OnLoop Energy - Premium JavaScript
// =========================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollAnimations();
  initSmoothScroll();
  initContactForm();
  initHeaderScroll();
  initParticles();
  initTiltEffect();
  initCounterAnimation();
  initTiltEffect();
  initCounterAnimation();
});

// ---- Utility: Add animation classes to sections ----
function addAnimationClasses() {
  // Add fade-in to content sections
  document.querySelectorAll('.content-section, .cta-section').forEach((section, index) => {
    if (!section.classList.contains('fade-in')) {
      section.classList.add('fade-in');
    }
  });

  // Add stagger animation to grid items
  // Add stagger animation to grid items relative to their container
  document.querySelectorAll('.grid-2, .grid-3, .grid-4, .hero__stats-grid, .footer__grid').forEach(grid => {
    Array.from(grid.children).forEach((item, index) => {
      item.classList.add(`delay-${Math.min(index + 1, 5)}`);
    });
  });
}

// ---- Mobile Navigation ----
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav--mobile');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('active');
    nav.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      nav.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

// ---- Advanced Scroll Animations ----
function initScrollAnimations() {
  // Ensure classes are added before initializing observer
  addAnimationClasses();

  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    }
  );

  animatedElements.forEach(el => observer.observe(el));

  // Also animate cards with stagger effect
  const cards = document.querySelectorAll('.card, .stat-card, .feature-item');
  cards.forEach((card, index) => {
    // card.style.transitionDelay = `${index * 0.1}s`;
    if (!card.classList.contains('fade-in')) {
      card.classList.add('fade-in');
      observer.observe(card);
    }
  });
}

// ---- Smooth Scroll ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// ---- Contact Form ----
function initContactForm() {
  const form = document.querySelector('.contact-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let isValid = true;

    required.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('error');
        field.style.borderColor = '#ef4444';
      } else {
        field.classList.remove('error');
        field.style.borderColor = '';
      }
    });

    // Email validation
    const email = form.querySelector('input[type="email"]');
    if (email && email.value && !isValidEmail(email.value)) {
      isValid = false;
      email.classList.add('error');
      email.style.borderColor = '#ef4444';
    }

    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<span style="display: inline-flex; align-items: center; gap: 8px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Sending...</span>';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      // Simulate form submission
      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = '<span style="display: inline-flex; align-items: center; gap: 8px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Message Sent!</span>';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        submitBtn.style.opacity = '1';

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 3000);
      }, 1500);
    }
  });

  // Remove error state on input with smooth transition
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('error');
      field.style.borderColor = '';
    });

    // Add focus glow effect
    field.addEventListener('focus', () => {
      field.style.boxShadow = '0 0 0 3px rgba(67, 176, 71, 0.15)';
    });

    field.addEventListener('blur', () => {
      field.style.boxShadow = '';
    });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---- Header Scroll Effect (Optimized) ----
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;
  const scrollThreshold = 50;
  let ticking = false;

  const updateHeader = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  // Initial check
  updateHeader();
}

// ---- Create Animated Particles ----
function initParticles() {
  const heroes = document.querySelectorAll('.hero');

  heroes.forEach(hero => {
    // Check if particles already exist
    if (hero.querySelector('.particles')) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';

    // Create 8 particles
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particlesContainer.appendChild(particle);
    }

    hero.insertBefore(particlesContainer, hero.firstChild);

    // Create ambient glow orbs
    const glowOrb1 = document.createElement('div');
    glowOrb1.className = 'glow-orb glow-orb--green';
    glowOrb1.style.cssText = 'top: 20%; left: 10%; z-index: 0;';

    const glowOrb2 = document.createElement('div');
    glowOrb2.className = 'glow-orb glow-orb--blue';
    glowOrb2.style.cssText = 'bottom: 10%; right: 5%; z-index: 0;';

    hero.insertBefore(glowOrb1, hero.firstChild);
    hero.insertBefore(glowOrb2, hero.firstChild);
  });
}

// ---- Subtle Tilt Effect on Cards (Optimized) ----
function initTiltEffect() {
  const cards = document.querySelectorAll('.card');

  // Return early if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  cards.forEach(card => {
    let rect;
    let ticking = false;

    const updateTilt = (e) => {
      if (!rect) rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Reduce rotation intensity for smoother feel
      const rotateX = (y - centerY) / 30; // Was 20
      const rotateY = (centerX - x) / 30; // Was 20

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      ticking = false;
    };

    // Cache rect on mouse enter to avoid thrashing during move
    card.addEventListener('mouseenter', () => {
      rect = card.getBoundingClientRect();
    });

    card.addEventListener('mousemove', (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => updateTilt(e));
        ticking = true;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      rect = null; // Clear cache
    });
  });
}

// ---- Animated Counter for Stats ----
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-card__value, .hero__stat-value');

  const animateCounter = (el) => {
    const target = el.textContent;
    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));

    if (isNaN(numericValue)) return;

    const suffix = target.replace(/[0-9]/g, '');
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    let current = 0;

    el.textContent = '0' + suffix;

    const updateCounter = () => {
      current += increment;
      if (current < numericValue) {
        el.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target;
      }
    };

    updateCounter();
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => counterObserver.observe(counter));
}

// Add CSS for spinner animation
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
