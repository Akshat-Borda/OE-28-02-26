import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="turbine-footer">
      {/* --- TIER 1: Top Section (Brand + Solutions/Services 1x2 Grid) --- */}
      <div className="container" style={{ position: 'relative', zIndex: '20' }}>
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__brand">
              <img src="/images/logo.svg" alt="OnLoop Energy - Commercial Hybrid Energy Systems EPC" style={{ height: '42px', width: 'auto', marginBottom: '20px' }} />
            </a>
            <p className="footer__description">
              Engineering captive wind and hybrid (wind + solar) energy systems exclusively for Commercial & Industrial facilities across India.
            </p>
          </div>

          <div className="footer__nav-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            <div>
              <h4 className="footer__title">Industries</h4>
              <ul className="footer__list">
                <li><a href="/solutions" className="footer__link" style={{ fontWeight: 'bold' }}>Industry Hub</a></li>
                <li><a href="/solutions/textile-industry" className="footer__link">Textile & Dyeing</a></li>
                <li><a href="/solutions/ceramics-industry" className="footer__link">Ceramics & Tiles</a></li>
                <li><a href="/solutions/chemical-industry" className="footer__link">Chemical Plants</a></li>
                <li><a href="/solutions/food-processing" className="footer__link">Food Processing</a></li>
                <li><a href="/solutions/cold-storage" className="footer__link">Cold Storage</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer__title">Technology</h4>
              <ul className="footer__list">
                <li><a href="/wind" className="footer__link">Captive Wind Energy</a></li>
                <li><a href="/hybrid" className="footer__link">Hybrid (Wind + Solar)</a></li>
                <li><a href="/solar" className="footer__link" style={{opacity: 0.7, fontSize: '0.9em'}}>Solar (within Hybrid)</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="footer__title">Company</h4>
              <ul className="footer__list">
                <li><a href="/projects" className="footer__link" style={{ fontWeight: 'bold' }}>Case Studies</a></li>
                <li><a href="/blogs" className="footer__link">Blogs</a></li>
                <li><a href="/faqs" className="footer__link">FAQs</a></li>
                <li><a href="/about" className="footer__link">About Us</a></li>
                <li><a href="/contact" className="footer__link">Contact</a></li>
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
              <a href="https://www.linkedin.com/company/OnLoop-energy/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://www.instagram.com/OnLoop_energy?igsh=OTgwcXQ1eTF0dnJ0&utm_source=qr" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@OnloopEnergy" target="_blank" rel="noopener noreferrer" title="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Onloop-Energy/61588498352284/" target="_blank" rel="noopener noreferrer" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
