import React from 'react';
import { Link } from 'react-router-dom';

const Hybrid = () => {
  return (
    <div>

    {/* Header */}
    

    {/* Mobile Navigation */}
    

    {/* Hero Section */}
    <section className="hero hero--short hero--image" style={{backgroundImage: 'url("/images/stock/solar-wind-farm.jpg")'}}>
        <div className="container">
            <div className="hero__content">
                <div className="hero__badge" style={{marginTop: 'var(--space-12)'}}>
                    <span className="hero__badge-dot"></span>
                    Integrated Solar–Wind Systems
                </div>
                <h1 className="hero__title">Hybrid energy, <span className="hero__title-highlight">designed with intent.</span>
                </h1>
                <p className="hero__subtitle">Thoughtfully integrated solar–wind systems designed to improve balance,
                    reliability, and long-term energy outcomes.</p>
            </div>
        </div>
    </section>

    {/* Hybrid Image Gallery */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="grid-3">
                <div className="image-card">
                    <img src="/images/stock/solar-panel-5542443_1920.jpg" alt="Solar panels" />
                    <div className="image-card__caption">
                        <h4>Solar Component</h4>
                        <p>Stable daytime energy foundation</p>
                    </div>
                </div>
                <div className="image-card">
                    <img src="/images/stock/pinwheels-6535599_1920.jpg" alt="Wind turbines" />
                    <div className="image-card__caption">
                        <h4>Wind Component</h4>
                        <p>Generation beyond solar hours</p>
                    </div>
                </div>
                <div className="image-card">
                    <img src="/images/stock/wind-solar-farm.jpg" alt="Integrated hybrid energy system" />
                    <div className="image-card__caption">
                        <h4>Integrated Grid</h4>
                        <p>One coordinated energy system</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 1: Why Hybrid */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">The Fundamentals</span>
                <h2 className="content-section__title">Why hybrid systems exist</h2>
            </div>
            <div className="grid-2">
                <div>
                    <p className="content-section__text">
                        Energy demand is continuous. Most renewable generation sources are not.
                        Solar follows daylight patterns. Wind follows atmospheric behavior. Neither resource alone
                        perfectly matches real-world load profiles.
                    </p>
                    <p className="content-section__text">
                        Hybrid systems exist to reduce those gaps, by combining resources that behave differently across
                        hours, seasons, and weather patterns.
                        When integrated intentionally, their variability becomes complementary rather than conflicting.
                    </p>
                    <p className="content-section__text">
                        The objective is not to maximize installed capacity, but to improve usable energy availability,
                        land efficiency, and overall system reliability.
                        A properly designed hybrid system delivers balance, not excess.
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
                        <div className="stat-card__value">24/7</div>
                        <div className="stat-card__label">Extended Energy Availability</div>
                    </div>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                <polyline points="17 6 23 6 23 12" />
                            </svg>
                        </div>
                        <div className="stat-card__value">30%</div>
                        <div className="stat-card__label">Improved Resource Utilization</div>
                    </div>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7" />
                                <rect x="14" y="3" width="7" height="7" />
                                <rect x="14" y="14" width="7" height="7" />
                                <rect x="3" y="14" width="7" height="7" />
                            </svg>
                        </div>
                        <div className="stat-card__value">2x</div>
                        <div className="stat-card__label">Higher Land Productivity</div>
                    </div>
                    <div className="stat-card stat-card--compact">
                        <div className="stat-card__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                            </svg>
                        </div>
                        <div className="stat-card__value">1</div>
                        <div className="stat-card__label">Single Integrated System</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 2: The OnLoop Hybrid Philosophy */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">Our Approach</span>
                <h2 className="content-section__title">How OnLoop approaches hybrid systems</h2>
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
                        <span className="feature-item__text">Designed as a single system, not separate technologies stitched
                            together</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="feature-item__text">Hybrid layouts shaped by real site behavior</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="feature-item__text">Solar and wind included only when they genuinely complement
                            each other</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="feature-item__text">Focus on usable, dependable energy, not installed
                            capacity</span>
                    </li>
                </ul>
                <div className="card">
                    <span className="card__number">⚡</span>
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <h4 className="card__title">Integration is the design</h4>
                    <p className="card__text">
Every component is selected and positioned to strengthen the system as a whole, not to chase
                        individual performance numbers.
                        Solar, wind, controls, and grid interfaces are engineered as one coordinated architecture with
                        shared objectives.
                        Electrical design, protection strategy, and control logic are developed together to avoid
                        inefficiencies and hidden constraints.
                        The result is a balanced, resilient system built for dependable performance over its full design
                        life.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* Section 3: What Hybrid Delivers */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">Benefits</span>
                <h2 className="content-section__title">What a well-designed hybrid system delivers</h2>
            </div>
            <div className="grid-3">
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="21" x2="9" y2="9" />
                        </svg>
                    </div>
                    <h4 className="card__title">Land Efficiency</h4>
                    <p className="card__text">
Extracts more value from the same land by combining complementary generation
                        sources.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <h4 className="card__title">Better Availability</h4>
                    <p className="card__text">
Improves energy availability across more hours, seasons, and operating
                        conditions.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                    <h4 className="card__title">Reduced Risk</h4>
                    <p className="card__text">
Reduces dependence on any single resource, improving overall system stability.
                    </p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="20" x2="12" y2="10" />
                            <line x1="18" y1="20" x2="18" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="16" />
                        </svg>
                    </div>
                    <h4 className="card__title">Predictable Performance</h4>
                    <p className="card__text">
Delivers more predictable performance by balancing variable generation
                        profiles.</p>
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
                    <h4 className="card__title">Shared Infrastructure</h4>
                    <p className="card__text">
Uses shared grid infrastructure and controls to simplify operation and
                        maintenance.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path
                                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </div>
                    <h4 className="card__title">Future-Ready</h4>
                    <p className="card__text">
Designed with flexibility to adapt as energy needs, policies, and technologies
                        evolve.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="content-section fade-in">
        <div className="container container--narrow">
            <div style={{textAlign: 'center', marginBottom: 'var(--space-12)'}}>
                <span className="content-section__label">The Ideal Fit</span>
                <h2 className="content-section__title">Is Hybrid the right choice for you?</h2>
                <p className="content-section__text">Hybrid systems aren’t a default option; they are a high-performance
                    choice for specific sites and requirements.</p>
            </div>

            <div className="grid-2">
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10" />
                            <line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                    </div>
                    <h4 className="card__title">Industrial Scale</h4>
                    <p className="card__text">
Operations with consistent day and night loads where combining solar and wind
                        can significantly reduce expensive peak-hour grid consumption.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <h4 className="card__title">Remote Infrastructure</h4>
                    <p className="card__text">
Sites with limited grid access where downtime is not an option and energy
                        resilience is the primary objective.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 2 7 12 12 22 7 12 2" />
                            <polyline points="2 17 12 22 22 17" />
                            <polyline points="2 12 12 17 22 12" />
                        </svg>
                    </div>
                    <h4 className="card__title">Resource-Rich Sites</h4>
                    <p className="card__text">
Locations blessed with both strong solar irradiance and consistent wind
                        profiles, making integration the most land-efficient choice.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                    </div>
                    <h4 className="card__title">Public Sector Grid-Tied</h4>
                    <p className="card__text">
Large-scale government or municipal projects seeking to maximize clean energy
                        injection into the grid across all seasons.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section fade-in">
        <div className="container">
            <div className="cta-section__content">
                <h2 className="cta-section__title">Considering a hybrid energy system?</h2>
                <p className="cta-section__text">Let’s evaluate whether a hybrid system genuinely makes sense for your site
                    and objectives.</p>
                <Link to="/contact" className="btn btn--primary btn--large">
                    Contact OnLoop Energy
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

export default Hybrid;
