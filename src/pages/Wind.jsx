import React from 'react';
import { Link } from 'react-router-dom';

const Wind = () => {
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
                    Small Wind Solutions
                </div>
                <h1 className="hero__title">Wind, when the site <span className="hero__title-highlight">truly supports
                        it.</span></h1>
                <p className="hero__subtitle">Small wind systems evaluated honestly, designed carefully, and applied only
                    where they make long-term sense.</p>
            </div>
        </div>
        <video className="hero__video" autoPlay muted loop playsInline preload="auto">
            <source src="/images/stock/wind-hero.mp4" type="video/mp4" />
        </video>
    </section>

    {/* Wind Image Gallery */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="grid-2">
                <div>
                    <span className="content-section__label">Our Approach to Wind</span>
                    <h2 className="content-section__title" style={{marginBottom: 'var(--space-8)'}}>Small wind, applied
                        thoughtfully</h2>
                    <p className="content-section__text">Small wind is fundamentally different from utility-scale wind. It
                        requires sharper evaluation, realistic expectations, and careful sizing to work effectively.</p>
                    <p className="content-section__text">At OnLoop, small wind is evaluated as a precision tool, used
                        selectively and often as part of a broader energy system.</p>
                </div>
                <div className="image-card image-card--large">
                    <img src="/images/stock/windmills-6626200_1920.jpg" alt="Wind turbines in operation" />
                </div>
            </div>
        </div>
    </section>

    {/* Section 1: Our View on Wind */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">Our View</span>
                <h2 className="content-section__title">Our view on small wind</h2>
            </div>
            <div className="grid-2">
                <div>
                    <p className="content-section__text">
                        Wind is one of the most misunderstood renewable resources, especially at small scale. Its
                        performance depends heavily on site-specific wind behavior, not just regional wind maps.
                    </p>
                    <p className="content-section__text">
                        We approach small wind with care, conservative assumptions, and complete transparency, because
                        not every site is a wind site.
                    </p>
                </div>
                <div className="card">
                    <span className="card__number">💨</span>
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                        </svg>
                    </div>
                    <h4 className="card__title">Measured, not assumed</h4>
                    <p className="card__text">
Every wind recommendation is backed by evaluation, not optimism. If the wind doesn’t support it,
                        we won’t force it.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* Section 2: Right-Sized Wind */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">Design Philosophy</span>
                <h2 className="content-section__title">Designed to match the site</h2>
            </div>
            <div className="grid-2">
                <div>
                    <p className="content-section__text">
                        Most wind technology is built for large-scale projects. Small wind demands a different
                        mindset, one focused on local wind behavior, hub height realities, turbulence exposure, and
                        operational simplicity.
                    </p>
                    <p className="content-section__text">
                        Performance at small scale is highly sensitive to placement and surrounding structures. Trees,
                        rooflines, terrain shifts, and micro-climate effects can materially change output. That is why
                        we prioritize site-specific assessment over generic wind assumptions.
                    </p>
                    <p className="content-section__text">
                        When done right, small wind delivers meaningful energy without introducing unnecessary
                        complexity. When done casually, it underperforms. Our role is to ensure it is engineered
                        properly, or not deployed at all.
                    </p>

                </div>
                <div className="stats-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)'}}>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <div className="stat-card__value">20+</div>
                        <div className="stat-card__label">Design Life</div>
                    </div>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />
                            </svg>
                        </div>
                        <div className="stat-card__value">35%</div>
                        <div className="stat-card__label">Typical Site-Specific Range</div>
                    </div>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 4 23 10 17 10" />
                                <polyline points="1 20 1 14 7 14" />
                                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                            </svg>
                        </div>
                        <div className="stat-card__value">24/7</div>
                        <div className="stat-card__label">Multi-Hour Generation Window</div>
                    </div>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                            </svg>
                        </div>
                        <div className="stat-card__value">100%</div>
                        <div className="stat-card__label">Grid-Independent Operation Potential</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 3: Wind as Part of a System */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">System Thinking</span>
                <h2 className="content-section__title">Wind, evaluated in context</h2>
            </div>
            <div className="grid-2">
                <div>
                    <p className="content-section__text">
                        Wind is never treated as a standalone promise. It is evaluated in the context of the full energy
                        system, where its contribution strengthens reliability rather than becoming a dependency.
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
                            <span className="feature-item__text">Naturally complements solar generation patterns</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <span className="feature-item__text">Can contribute during evenings and low-solar periods</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <span className="feature-item__text">Improves overall system resilience when conditions are
                                right</span>
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <h4 className="card__title">Designed to complement</h4>
                    <p className="card__text">
Wind works best when it complements other sources, quietly strengthening the system instead of
                        carrying it alone.
                        Its value increases when integrated thoughtfully with solar, storage, and load management
                        strategies.
                        By contributing during off-peak solar hours and variable weather conditions, wind can smooth
                        overall generation profiles and reduce reliance on a single resource.
                        The objective is balance: a coordinated energy system where each component supports the others.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section fade-in">
        <div className="container">
            <div className="cta-section__content">
                <h2 className="cta-section__title">When wind and solar align</h2>
                <p className="cta-section__text">Explore how carefully designed hybrid systems improve reliability and
                    energy balance.</p>
                <Link to="/hybrid" className="btn btn--primary btn--large">
                    Explore Hybrid Solutions
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

export default Wind;
