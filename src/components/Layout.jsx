import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Re-initialize layout scripts once
    if (window.initMobileNav && !window._layoutScriptsInit) {
      window.initMobileNav();
      window.initHeaderScroll();
      window._layoutScriptsInit = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Set Document Title
    const titles = {
      '/': 'Home | OnLoop Energy',
      '/about': 'About Us | OnLoop Energy',
      '/solar': 'Solar Energy | OnLoop Energy',
      '/wind': 'Small Wind Energy | OnLoop Energy',
      '/hybrid': 'Hybrid Solutions | OnLoop Energy',
      '/epc-services': 'EPC Services | OnLoop Energy',
      '/om-services': 'O&M Services | OnLoop Energy',
      '/consulting': 'Consulting | OnLoop Energy',
      '/contact': 'Contact Us | OnLoop Energy'
    };
    document.title = titles[location.pathname] || 'OnLoop Energy';

    // Re-initialize page scripts on route change
    requestAnimationFrame(() => {
      if (window.initScrollAnimations) window.initScrollAnimations();
      if (window.initSmoothScroll) window.initSmoothScroll();
      if (window.initContactForm) window.initContactForm();
      if (window.initParticles) window.initParticles();
      if (window.initTiltEffect) window.initTiltEffect();
      if (window.initCounterAnimation) window.initCounterAnimation();
    });
  }, [location.pathname]);

  return (
    <div>
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="header__logo">
            <img src="/images/logo.svg" alt="OnLoop Energy" style={{ height: '48px', width: 'auto' }} />
          </Link>
          <nav className="nav">
            <ul className="nav__list">
              <li><Link to="/" className={`nav__link ${location.pathname === '/' ? 'nav__link--active' : ''}`}>Home</Link></li>
              <li className="nav__dropdown">
                <span className={`nav__dropdown-toggle ${['/solar', '/wind', '/hybrid'].includes(location.pathname) ? 'nav__link--active' : ''}`}>
                  Solutions
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                <div className="nav__dropdown-menu">
                  <Link to="/solar" className="nav__dropdown-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                    Solar Energy
                  </Link>
                  <Link to="/wind" className="nav__dropdown-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path
                        d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                    </svg>
                    Small Wind Energy
                  </Link>
                  <Link to="/hybrid" className="nav__dropdown-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    Hybrid Solutions
                  </Link>
                </div>
              </li>
              <li className="nav__dropdown">
                <span className={`nav__dropdown-toggle ${['/epc-services', '/om-services', '/consulting'].includes(location.pathname) ? 'nav__link--active' : ''}`}>
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                <div className="nav__dropdown-menu">
                  <Link to="/epc-services" className="nav__dropdown-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path
                        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                    EPC Services
                  </Link>
                  <Link to="/om-services" className="nav__dropdown-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    O&M Services
                  </Link>
                  <Link to="/consulting" className="nav__dropdown-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                    Consulting
                  </Link>
                </div>
              </li>
              <li><Link to="/about" className="nav__link">About Us</Link></li>
            </ul>
            <Link to="/contact" className="btn btn--primary">Contact Us</Link>
          </nav>
          <button className="mobile-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <nav className="nav--mobile">
        <div className="nav__mobile-content">
          <Link to="/" className="nav__mobile-item">Home</Link>

          <div className="nav__mobile-group">
            <div className="nav__mobile-group-title">Solutions</div>
            <Link to="/solar" className="nav__mobile-sublink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              Solar Energy
            </Link>
            <Link to="/wind" className="nav__mobile-sublink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
              </svg>
              Small Wind Energy
            </Link>
            <Link to="/hybrid" className="nav__mobile-sublink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Hybrid Solutions
            </Link>
          </div>

          <div className="nav__mobile-group">
            <div className="nav__mobile-group-title">Services</div>
            <Link to="/epc-services" className="nav__mobile-sublink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              EPC Services
            </Link>
            <Link to="/om-services" className="nav__mobile-sublink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              O&M Services
            </Link>
            <Link to="/consulting" className="nav__mobile-sublink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              Consulting
            </Link>
          </div>

          <Link to="/about" className="nav__mobile-item">About Us</Link>
          <Link to="/contact" className="btn btn--primary">Contact Us</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="footer">

        {/* --- TIER 1: Top Section (Brand + Solutions/Services 1x2 Grid) --- */}
        <div className="container" style={{ position: 'relative', zIndex: '20' }}>
          <div className="footer__top">
            <div className="footer__brand">
              <div className="footer__logo">
                <img src="/images/logo.svg" alt="OnLoop Energy" style={{ height: '42px', width: 'auto', marginBottom: '20px' }} />
              </div>
              <p className="footer__description">
                Developing solar, wind, and hybrid power projects for diverse infrastructure and industrial needs.
              </p>
            </div>

            <div className="footer__nav-grid">
              <div>
                <h4 className="footer__title">Solutions</h4>
                <ul className="footer__list">
                  <li><Link to="/solar" className="footer__link">Solar</Link></li>
                  <li><Link to="/wind" className="footer__link">Small Wind Energy</Link></li>
                  <li><Link to="/hybrid" className="footer__link">Hybrid</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="footer__title">Services</h4>
                <ul className="footer__list">
                  <li><Link to="/epc-services" className="footer__link">EPC Services</Link></li>
                  <li><Link to="/om-services" className="footer__link">O&M Services</Link></li>
                  <li><Link to="/consulting" className="footer__link">Consulting</Link></li>
                </ul>
              </div>

              {/* Company Links (Now always in top grid parallel to Solutions & Services) */}
              <div>
                <h4 className="footer__title">Company</h4>
                <ul className="footer__list">
                  <li><Link to="/about" className="footer__link">About Us</Link></li>
                  <li><Link to="/contact" className="footer__link">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- TIER 2: Animation / Hero Zone --- */}
        <div className="footer__animation-zone">
          <div className="landscape-bg">
            <div className="hill"></div>
          </div>

          <div className="container" style={{ position: 'relative', height: '100%' }}>
            {/* Visual background area */}
          </div>

          {/* Visuals on the right */}
          <div className="visuals-wrapper">
            <div className="turbine-visual">
              <div className="turbine-pole"></div>
              <div className="turbine-rotor">
                <div className="turbine-hub"></div>
                <div className="turbine-blade"></div>
                <div className="turbine-blade"></div>
                <div className="turbine-blade"></div>
              </div>
            </div>

            <div className="turbine-visual turbine-visual--small-1">
              <div className="turbine-pole"></div>
              <div className="turbine-rotor">
                <div className="turbine-hub"></div>
                <div className="turbine-blade"></div>
                <div className="turbine-blade"></div>
                <div className="turbine-blade"></div>
              </div>
            </div>

            <div className="turbine-visual turbine-visual--small-2">
              <div className="turbine-pole"></div>
              <div className="turbine-rotor">
                <div className="turbine-hub"></div>
                <div className="turbine-blade"></div>
                <div className="turbine-blade"></div>
                <div className="turbine-blade"></div>
              </div>
            </div>

            <div className="solar-visual">
              <div className="solar-panel-unit">
                <div className="solar-panel"><div className="solar-grid"></div></div>
                <div className="solar-structure"><div className="solar-pole"></div><div className="solar-pole"></div></div>
              </div>
              <div className="solar-panel-unit">
                <div className="solar-panel"><div className="solar-grid"></div></div>
                <div className="solar-structure"><div className="solar-pole"></div><div className="solar-pole"></div></div>
              </div>
              <div className="solar-panel-unit">
                <div className="solar-panel"><div className="solar-grid"></div></div>
                <div className="solar-structure"><div className="solar-pole"></div><div className="solar-pole"></div></div>
              </div>
              <div className="solar-panel-unit">
                <div className="solar-panel"><div className="solar-grid"></div></div>
                <div className="solar-structure"><div className="solar-pole"></div><div className="solar-pole"></div></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TIER 3: Bottom Bar (Dark Green) --- */}
        <div className="footer__bottom-bar">
          <div className="container">
            <div className="footer__bottom-inner">

              <p className="footer__copyright">&copy; 2026 OnLoop Energy. All rights reserved.</p>
              <div className="footer__social-dark">
                <a href="https://www.linkedin.com/company/OnLoop-energy/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/OnLoop_energy?igsh=OTgwcXQ1eTF0dnJ0&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Layout;
