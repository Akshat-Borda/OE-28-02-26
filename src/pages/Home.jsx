import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

  {/* Header */}
  

  

  {/* Hero Section */}
  <section className="hero hero--image" style={{backgroundImage: 'url("/images/stock/solarfarm.jpg")'}}>
    <div className="container">
      <div className="hero__content">
        <h1 className="hero__title">
          Solar. Small Wind. Hybrid.<br />
          <span className="hero__title-highlight">Engineered for Performance.</span>
        </h1>
        <p className="hero__subtitle">OnLoop Energy designs and delivers solar, small wind, and hybrid energy systems
          tailored to real sites, real energy demand, and long-term performance, across residential, commercial,
          industrial, and government applications.</p>
        <div className="hero__actions">
          <Link to="/hybrid" className="btn btn--primary btn--large">Explore Solutions</Link>
          <Link to="/contact" className="btn btn--secondary btn--large">Talk to Our Team</Link>
        </div>
      </div>
    </div>
    {/* Decorative visual element */}
    <div className="hero__visual">
      <div className="hero__graphic">
        <div className="hero__graphic-circle"></div>
        <div className="hero__graphic-circle"></div>
        <div className="hero__graphic-circle"></div>
      </div>
    </div>
    <div className="scroll-indicator">
      <span>Scroll</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
      </svg>
    </div>
  </section>

  {/* Intro / Overview */}
  <section className="content-section fade-in">
    <div className="container container--narrow" style={{textAlign: 'center'}}>
      <h2 className="content-section__title" style={{marginBottom: 'var(--space-6)'}}>Clean energy works best when it is
        engineered for the site, not forced onto it.</h2>
      <p className="content-section__text">At OnLoop Energy, we provide end-to-end renewable energy solutions by combining
        technical feasibility, site intelligence, and disciplined execution. From residential solar installations to
        large commercial, industrial, and government projects, every system we deliver is designed with performance,
        reliability, and scalability in mind.</p>
    </div>
  </section>

  {/* Who We Serve */}
  <section className="content-section content-section--light fade-in">
    <div className="container">
      <div className="content-section__header">
        <span className="content-section__label">Who We Serve</span>
        <h2 className="content-section__title">Serving energy needs across sectors</h2>
        <p className="content-section__text">While commercial and industrial projects form the core of our growth strategy,
          our capabilities span across multiple customer segments.</p>
      </div>
      <div className="grid-3">
        {/* Residential */}
        <div className="card">
          <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <h4 className="card__title">Residential</h4>
          <p className="card__text">
Rooftop solar systems designed for homes with a focus on safety, efficiency, and
            long-term energy savings.</p>
        </div>
        {/* Commercial & Industrial */}
        <div className="card">
          <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
              <path d="M17 18h1" />
              <path d="M12 18h1" />
              <path d="M7 18h1" />
            </svg>
          </div>
          <h4 className="card__title">Commercial & Industrial (C&I)</h4>
          <p className="card__text">
Large-scale solar, wind, and hybrid energy systems engineered to align with operational
            loads, land availability, and business objectives.</p>
        </div>
        {/* Government & Institutional */}
        <div className="card">
          <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="2" x2="12" y2="7" />
              <polyline points="5 7 12 2 19 7" />
              <line x1="5" y1="7" x2="19" y2="7" />
              <line x1="4" y1="22" x2="20" y2="22" />
              <line x1="8" y1="22" x2="8" y2="7" />
              <line x1="16" y1="22" x2="16" y2="7" />
              <line x1="12" y1="22" x2="12" y2="7" />
            </svg>
          </div>
          <h4 className="card__title">Government & Institutional</h4>
          <p className="card__text">
Compliant and scalable renewable energy projects designed for public infrastructure,
            utilities, and institutional facilities.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Solutions Overview */}
  <section className="content-section fade-in">
    <div className="container">
      <div className="content-section__header">
        <span className="content-section__label">Solutions Overview</span>
        <h2 className="content-section__title">Our Solutions</h2>
        <p className="content-section__text">Every solution begins with understanding the site, energy usage, and long-term
          goals.</p>
      </div>
      <div className="grid-3">
        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
            alt="Solar Energy" loading="lazy" />
          <div className="image-card__caption">
            <h4>Solar Energy Systems</h4>
            <p>Rooftop and ground-mounted solar installations for residential, commercial, industrial, and government
              applications, engineered for efficiency and durability.</p>
          </div>
        </div>
        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&h=400&fit=crop"
            alt="Small Wind Turbine" loading="lazy" />
          <div className="image-card__caption">
            <h4>Small Wind Turbine Systems</h4>
            <p>Site-specific small wind solutions deployed only where wind resources justify long-term performance and
              reliability.</p>
          </div>
        </div>
        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop"
            alt="Hybrid Systems" loading="lazy" />
          <div className="image-card__caption">
            <h4>Hybrid Energy Systems</h4>
            <p>Integrated solar and wind systems engineered together to improve energy availability, optimize asset
              utilization, and reduce dependence on a single source.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Our Philosophy */}
  <section className="content-section content-section--light fade-in">
    <div className="container">
      <div className="grid-2">
        <div>
          <span className="content-section__label">Our Philosophy</span>
          <h2 className="content-section__title">Energy systems designed for your reality.</h2>
          <p className="content-section__text">Every site is unique. Solar works best in some places, wind in others, and
            sometimes they work best together.</p>
          <p className="content-section__text">At OnLoop Energy, we don't force a specific technology. We engineer the
            optimal solution, whether it's pure solar, wind, or a hybrid system, to deliver the lowest cost of energy
            and
            highest reliability for your specific needs.</p>
          <div
            style={{marginTop: 'var(--space-8)', padding: 'var(--space-6)', background: 'rgba(30,115,184,0.05)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-primary)'}}>
            <h4 style={{marginBottom: 'var(--space-2)', color: 'var(--color-primary)', fontSize: 'var(--font-size-lg)'}}>
              Engineering is not an add-on.</h4>
            <p
              style={{marginBottom: '0', fontWeight: '500', fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)'}}>
              It is the foundation of performance.</p>
          </div>
        </div>
        <div className="card">
          <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 22h20" />
              <polyline points="22,6 12,13 2,6" />
              <path d="M12,13 12,21.5" />
            </svg>
          </div>
          <h4 className="card__title">Site-Specific Design</h4>
          <p className="card__text">
We analyze your location's specific resource data, sun irradiance, wind speeds, and
            energy consumption patterns, to design a system that maximizes output and ROI, regardless of the
            technology.<br/><br/>
            Using detailed modelling and financial analysis, we design a system architecture that optimizes output,
            stability, and long-term cost of energy, not just installed capacity.
            <br/><br/>
            The result is a technically sound, financially viable energy system engineered for measurable performance.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Our Approach */}
  <section className="content-section fade-in">
    <div className="container">
      <div className="content-section__header" style={{maxWidth: '900px'}}>
        <span className="content-section__label">Our Approach</span>
        <h2 className="content-section__title">Our Engineering-First Approach</h2>
        <p className="content-section__text">We don’t sell equipment. We design energy systems.</p>
      </div>
      <div className="grid-4" style={{alignItems: 'stretch'}}>
        {/* Assess */}
        <div className="feature-item" style={{flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-4)'}}>
          <div className="feature-item__icon" style={{width: '40px', height: '40px', fontWeight: 'bold', fontSize: '1.2rem'}}>1
          </div>
          <div>
            <h4 style={{fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)'}}>Assess</h4>
            <p className="feature-item__text" style={{fontSize: 'var(--font-size-base)'}}>Detailed site evaluation, load
              analysis, and technical feasibility.</p>
          </div>
        </div>
        {/* Design */}
        <div className="feature-item" style={{flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-4)'}}>
          <div className="feature-item__icon" style={{width: '40px', height: '40px', fontWeight: 'bold', fontSize: '1.2rem'}}>2
          </div>
          <div>
            <h4 style={{fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)'}}>Design</h4>
            <p className="feature-item__text" style={{fontSize: 'var(--font-size-base)'}}>Custom system architecture tailored
              to site conditions and energy objectives.</p>
          </div>
        </div>
        {/* Build */}
        <div className="feature-item" style={{flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-4)'}}>
          <div className="feature-item__icon" style={{width: '40px', height: '40px', fontWeight: 'bold', fontSize: '1.2rem'}}>3
          </div>
          <div>
            <h4 style={{fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)'}}>Build</h4>
            <p className="feature-item__text" style={{fontSize: 'var(--font-size-base)'}}>End-to-end EPC execution with a
              focus on quality, safety, and compliance.</p>
          </div>
        </div>
        {/* Maintain */}
        <div className="feature-item" style={{flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-4)'}}>
          <div className="feature-item__icon" style={{width: '40px', height: '40px', fontWeight: 'bold', fontSize: '1.2rem'}}>4
          </div>
          <div>
            <h4 style={{fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)'}}>Maintain</h4>
            <p className="feature-item__text" style={{fontSize: 'var(--font-size-base)'}}>Performance-focused operations and
              maintenance to protect long-term output.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Why OnLoop */}
  <section className="content-section content-section--light fade-in">
    <div className="container">
      <div className="content-section__header">
        <span className="content-section__label">Why OnLoop Energy</span>
        <h2 className="content-section__title">Built for long-term performance</h2>
      </div>
      <div className="grid-3">
        <div className="card card--light">
          <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <h4 className="card__title">Engineering-led</h4>
          <p className="card__text">
We are not sales-driven. Every recommendation is backed by rigourous technical
            validation and real-site data.</p>
        </div>
        <div className="card card--light">
          <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h4 className="card__title">Honest Feasibility</h4>
          <p className="card__text">
We tell you what works and what doesn't, upfront. If a site doesn't support wind or
            solar, we say so.</p>
        </div>
        <div className="card card--light">
          <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h4 className="card__title">Site-Specific</h4>
          <p className="card__text">
No templates. We study your specific load profiles and resource data to build a custom
            energy architecture.</p>
        </div>
        <div className="card card--light">
          <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h4 className="card__title">Technology Agnostic</h4>
          <p className="card__text">
We aren't tied to one product. We recommend the best combination of Solar, Small Wind,
            or
            Hybrid for your goals.</p>
        </div>
        <div className="card card--light">
          <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <polyline points="16 11 18 13 22 9" />
            </svg>
          </div>
          <h4 className="card__title">Single Accountability</h4>
          <p className="card__text">
We take ownership of the entire lifecycle, from the first feasibility study to long-term
            operations.</p>
        </div>
        <div className="card card--light">
          <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
              <polyline points="17 2 12 7 7 2" />
            </svg>
          </div>
          <h4 className="card__title">Full-Spectrum</h4>
          <p className="card__text">
Expertise across residential, C&I, and public-sector energy needs, tailored for
            long-term value.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Final CTA */}
  <section className="cta-section fade-in">
    <div className="container">
      <div className="cta-section__content">
        <h2 className="cta-section__title">Let’s design the right energy system for your site</h2>
        <p className="cta-section__text">Whether it’s a home, an industrial facility, or a public-sector project, the right
          energy solution starts with the right engineering.</p>
        <Link to="/contact" className="btn btn--primary btn--large">
          Contact OnLoop Energy
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  </section>

  {/* Footer */}
  

  
    </div>
  );
};

export default Home;
