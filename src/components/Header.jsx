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
                <span className={`nav__dropdown-toggle ${pathname.startsWith('/solutions') || ['/solar', '/wind', '/hybrid'].includes(pathname) ? 'nav__link--active' : ''}`}>
                  Solutions
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                <div className="nav__dropdown-menu">
                  <a href="/solutions" className="nav__dropdown-link" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    Solutions Overview
                  </a>
                  <div style={{ height: '1px', background: 'rgba(0,0,0,0.06)', margin: '4px 0' }}></div>
                  <a href="/wind" className="nav__dropdown-link">
                    Captive Wind Energy
                  </a>
                  <a href="/hybrid" className="nav__dropdown-link">
                    Hybrid Systems (Wind + Solar)
                  </a>
                </div>
              </li>
              <li><a href="/projects" className={`nav__link ${pathname === '/projects' || pathname.startsWith('/projects/') ? 'nav__link--active' : ''}`}>Projects</a></li>
              <li><a href="/about" className={`nav__link ${pathname === '/about' ? 'nav__link--active' : ''}`}>About Us</a></li>
              <li><a href="/faqs" className={`nav__link ${pathname === '/faqs' ? 'nav__link--active' : ''}`}>FAQs</a></li>
              <li><a href="/blogs" className={`nav__link ${pathname.startsWith('/blog') ? 'nav__link--active' : ''}`}>Blogs</a></li>
            </ul>
            <a href="/contact" className="btn btn--primary">Get Free Savings Analysis</a>
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
          <a href="/solutions" className="nav__mobile-item" style={{ fontWeight: 'bold' }}>Solutions Overview</a>

          <div className="nav__mobile-group">
            <div className="nav__mobile-group-title">Our Technologies</div>
            <a href="/wind" className="nav__mobile-sublink">Captive Wind Energy</a>
            <a href="/hybrid" className="nav__mobile-sublink">Hybrid Systems (Wind + Solar)</a>
          </div>

          <a href="/projects" className="nav__mobile-item">Projects</a>
          <a href="/blogs" className="nav__mobile-item">Blogs</a>
          <a href="/faqs" className="nav__mobile-item">FAQs</a>
          <a href="/about" className="nav__mobile-item">About Us</a>
          <a href="/contact" className="btn btn--primary" style={{ marginTop: 'var(--space-4)' }}>Get Free Savings Analysis</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
