import React, { useState, useEffect } from 'react';

const Header = () => {
  const [pathname, setPathname] = useState('/');
  
  useEffect(() => {
    setPathname(window.location.pathname);
    
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a href="/" className="header__logo">
            <img src="/images/logo.svg" alt="OnLoop Energy - Wind and Solar Hybrid Power Projects" style={{ height: '48px', width: 'auto' }} />
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li><a href="/" className={`nav__link ${pathname === '/' ? 'nav__link--active' : ''}`}>Home</a></li>
              <li className="nav__dropdown">
                <span className={`nav__dropdown-toggle ${['/solar', '/wind', '/hybrid'].includes(pathname) ? 'nav__link--active' : ''}`}>
                  Solutions
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                <div className="nav__dropdown-menu">
                  <a href="/wind" className="nav__dropdown-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path
                        d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                    </svg>
                    Small Wind Turbines
                  </a>
                  <a href="/hybrid" className="nav__dropdown-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    Hybrid (Wind + Solar)
                  </a>
                  <a href="/solar" className="nav__dropdown-link" style={{fontSize: '0.85rem', opacity: 0.75}}>
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
                    Solar (within Hybrid)
                  </a>
                </div>
              </li>
              <li><a href="/about" className={`nav__link ${pathname === '/about' ? 'nav__link--active' : ''}`}>About Us</a></li>
              <li><a href="/faqs" className={`nav__link ${pathname === '/faqs' ? 'nav__link--active' : ''}`}>FAQs</a></li>
              <li><a href="/blogs" className={`nav__link ${pathname.startsWith('/blog') ? 'nav__link--active' : ''}`}>Blogs</a></li>
            </ul>
            <a href="/contact" className="btn btn--primary">Contact Us</a>
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
          <a href="/" className="nav__mobile-item">Home</a>

          <div className="nav__mobile-group">
            <div className="nav__mobile-group-title">Solutions</div>
            <a href="/wind" className="nav__mobile-sublink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
              </svg>
              Small Wind Turbines
            </a>
            <a href="/hybrid" className="nav__mobile-sublink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              Hybrid (Wind + Solar)
            </a>
            <a href="/solar" className="nav__mobile-sublink" style={{opacity: 0.75}}>
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
              Solar (within Hybrid)
            </a>
          </div>

          <a href="/blogs" className="nav__mobile-item">Blogs</a>
          <a href="/faqs" className="nav__mobile-item">FAQs</a>
          <a href="/about" className="nav__mobile-item">About Us</a>
          <a href="/contact" className="btn btn--primary" style={{ marginTop: 'var(--space-4)' }}>Contact Us</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
