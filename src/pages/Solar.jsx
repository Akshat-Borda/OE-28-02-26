import React from 'react';
import { Link } from 'react-router-dom';

const Solar = () => {
  return (
    <div>

    {/* Header */}
    

    {/* Mobile Navigation */}
    

    {/* Hero Section */}
    <section className="hero hero--short">
        <div className="container">
            <div className="hero__content">
                <div className="hero__badge" style={{marginTop: 'var(--space-12)'}}>
                    <span className="hero__badge-dot"></span>
                    Solar Solutions
                </div>
                <h1 className="hero__title">Solar, designed for how your site <span className="hero__title-highlight">actually
                        behaves</span>.</h1>
                <p className="hero__subtitle">Carefully engineered solar systems built around real conditions, real loads,
                    and real long-term outcomes.</p>
            </div>
        </div>
        <video className="hero__video" autoPlay muted loop playsInline preload="auto">
            <source src="/images/stock/solar-hero.mp4" type="video/mp4" />
        </video>
    </section>

    {/* Solar Image Gallery */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="grid-2">
                <div className="image-card image-card--large">
                    <img src="/images/stock/solar-farm-6619504_1920.jpg" alt="Solar farm installation" />
                </div>
                <div>
                    <span className="content-section__label">Our Approach to Solar</span>
                    <h2 className="content-section__title" style={{marginBottom: 'var(--space-8)'}}>Solar that earns its place
                    </h2>
                    <p className="content-section__text">Solar works best when it is designed around the site, not forced
                        onto it. Every OnLoop solar system begins with a clear understanding of land, structure,
                        shading, load profile, and future constraints.</p>
                    <p className="content-section__text">We engineer solar systems to perform consistently over decades, not
                        just look good on day one.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Section 1: Our View on Solar */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header" style={{marginBottom: 'var(--space-8)'}}>
                <span className="content-section__label">Our View</span>
                <h2 className="content-section__title">Our view on solar is simple</h2>
            </div>
            <div className="grid-2" style={{alignItems: 'start'}}>
                <div>
                    <p className="content-section__text">
                        Solar is a powerful and predictable source of clean energy, when it’s designed with discipline.
                        Real performance depends on site conditions, layout decisions, electrical integration,
                        and operating assumptions, not just panel wattage.
                    </p>

                    <p className="content-section__text">
                        Shading, structural limits, system losses, and long-term degradation all shape results.
                        These details don’t always show up in proposals, but they determine outcomes.
                    </p>

                    <p className="content-section__text">
                        At OnLoop Energy, solar is evaluated honestly, engineered carefully, and deployed only
                        where it strengthens the overall energy strategy.
                    </p>

                </div>
                <div className="card" style={{marginTop: '-60px'}}>
                    <span className="card__number">☀️</span>
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                    </div>
                    <h4 className="card__title">A dependable foundation</h4>
                    <p className="card__text">
When designed correctly, solar becomes a stable, dependable foundation, one that integrates
                        naturally into long-term energy strategies.
                        It provides predictable generation, cost visibility, and structural reliability that businesses
                        can plan around.
                        With disciplined engineering and realistic assumptions, solar delivers steady performance year
                        after year, not just strong projections on paper.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* Section 2: How OnLoop Designs Solar */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">How We Design</span>
                <h2 className="content-section__title">How we design solar systems</h2>
            </div>
            <div className="grid-2">
                <ul className="feature-list">
                    <li className="feature-item">
                        <div className="feature-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="feature-item__text">Layouts designed around land, structures, shading, and access
                            realities</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="feature-item__text">Realistic performance assumptions that hold up over time</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="feature-item__text">Focus on lifetime energy yield, not headline numbers</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="feature-item__text">Designed to remain flexible for future hybrid
                            integration</span>
                    </li>
                </ul>
                <div className="stats-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)'}}>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <div className="stat-card__value">25+</div>
                        <div className="stat-card__label">Design Life</div>
                    </div>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <div className="stat-card__value">98%</div>
                        <div className="stat-card__label">Operational Reliability Target</div>
                    </div>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                                <polyline points="17 18 23 18 23 12" />
                            </svg>
                        </div>
                        <div className="stat-card__value">0.5%</div>
                        <div className="stat-card__label">Assumed Annual Degradation</div>
                    </div>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17" />
                                <polyline points="2 12 12 17 22 12" />
                            </svg>
                        </div>
                        <div className="stat-card__value">100%</div>
                        <div className="stat-card__label">Hybrid-Ready by Design</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 3: When Solar Makes Sense */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">Decision Clarity</span>
                <h2 className="content-section__title">When solar is the right choice</h2>
            </div>
            <div className="grid-2">
                <div>
                    <p className="content-section__text">
                        Solar delivers the most value when a few key conditions are aligned:
                    </p>
                    <ul className="feature-list mt-8">
                        <li className="feature-item">
                            <div className="feature-item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <span className="feature-item__text">The site offers suitable space and orientation</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <span className="feature-item__text">Energy demand aligns well with solar generation
                                patterns</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <span className="feature-item__text">The focus is on long-term performance, not short-term
                                gains</span>
                        </li>
                    </ul>
                    <p className="content-section__text mt-8">
                        We validate these fundamentals before recommending a solar solution, because the right decision
                        matters more than a quick one.
                    </p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                    <h4 className="card__title">Designed only when it fits</h4>
                    <p className="card__text">
Every solar project begins with careful validation. No shortcuts. No assumptions. Just decisions
                        that stand the test of time.
                        We assess structural capacity, electrical infrastructure, shading risks, and long-term load
                        behavior before finalizing system size or layout.
                        If the fundamentals do not support durable performance and credible economics, we do not
                        proceed.
                        Solar is designed only when it strengthens the broader energy strategy, not simply because it is
                        available.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section fade-in">
        <div className="container">
            <div className="cta-section__content">
                <h2 className="cta-section__title">Looking beyond solar?</h2>
                <p className="cta-section__text">See how solar can work alongside wind to improve reliability and long-term
                    performance.</p>
                <Link to="/hybrid" className="btn btn--primary btn--large">
                    Learn About Hybrid
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
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

export default Solar;
