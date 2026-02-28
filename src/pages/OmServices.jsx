import React from 'react';
import { Link } from 'react-router-dom';

const OmServices = () => {
  return (
    <div>

    

    

    {/* Hero Section */}
    <section className="hero hero--short hero--image" style={{backgroundImage: 'url("/images/stock/wind-solar-farm.jpg")'}}>
        <div className="container">
            <div className="hero__content">
                <div className="hero__badge" style={{marginTop: 'var(--space-12)'}}>
                    <span className="hero__badge-dot"></span>
                    Operations & Maintenance
                </div>
                <h1 className="hero__title">O&M Built for <span className="hero__title-highlight">Asset Life</span>, Not Just
                    Uptime</h1>
                <p className="hero__subtitle">Operations and maintenance designed to protect performance, extend system
                    life, and keep your energy asset delivering predictable value, year after year.</p>
            </div>
        </div>
    </section>

    {/* Introduction */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="grid-2">
                <div>
                    <span className="content-section__label">Our Philosophy</span>
                    <h2 className="content-section__title">Because Performance Is a Long-Term Commitment</h2>
                    <p className="content-section__text">
                        A renewable energy system isn’t a one-time project, it’s a long-term operational asset. The real
                        value is created not at commissioning, but over decades of consistent, reliable performance.
                    </p>
                    <p className="content-section__text">
                        At OnLoop Energy, O&M is treated as a performance discipline, not a checklist. We focus on
                        understanding how your system behaves in real operating conditions, how it degrades over time,
                        and what interventions actually matter.
                    </p>
                    <p className="content-section__text">
                        Whether it’s solar, small wind turbines, or hybrid systems, our role is simple: ensure your
                        plant performs the way it was intended to, without surprises.
                    </p>
                </div>
                <div className="image-card image-card--large">
                    <img src="/images/stock/solar-panel-5542443_1920.jpg" alt="Regular maintenance of solar assets" />
                </div>
            </div>
        </div>
    </section>

    {/* O&M Scope */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header" style={{textAlign: 'center', maxWidth: '100%'}}>
                <span className="content-section__label">What Our O&M Services Cover</span>
                <h2 className="content-section__title">Full-Scope Asset Care</h2>
            </div>
            <div className="grid-3">
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                        </svg>
                    </div>
                    <h4 className="card__title">Performance Monitoring</h4>
                    <p className="card__text">
Continuous tracking of generation, availability, and efficiency, benchmarked
                        against expected performance, not generic assumptions.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <h4 className="card__title">Preventive Maintenance</h4>
                    <p className="card__text">
Planned inspections, cleaning, lubrication, and checks designed to reduce
                        failure probability and extend component life.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path
                                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                    </div>
                    <h4 className="card__title">Fault Detection & Diagnosis</h4>
                    <p className="card__text">
Early identification of deviations using data patterns and engineering
                        review, before minor issues turn into major losses.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path
                                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                    </div>
                    <h4 className="card__title">Corrective Maintenance</h4>
                    <p className="card__text">
Structured repair and replacement using defined procedures, quality parts, and
                        root-cause analysis.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                    </div>
                    <h4 className="card__title">Reporting & Documentation</h4>
                    <p className="card__text">
Clear, decision-ready reports that explain not just what happened, but why it
                        happened and what to do next.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <line x1="18" y1="20" x2="18" y2="10" />
                            <line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                    </div>
                    <h4 className="card__title">System Optimization</h4>
                    <p className="card__text">
Ongoing analysis to identify performance gaps and improvement opportunities
                        based on actual site conditions and operational data.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Monitoring Approach */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="grid-2">
                <div>
                    <span className="content-section__label">Monitoring</span>
                    <h2 className="content-section__title">From Raw Data to Actionable Insight</h2>
                    <p className="content-section__text">
                        Data alone doesn’t improve performance, interpretation does.
                    </p>

                    <ul className="feature-list" style={{marginTop: 'var(--space-8)'}}>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg></div>
                            <span className="feature-item__text">Real-time generation tracking aligned with irradiance and
                                wind data</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <path
                                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1="12" y1="9" x2="12" y2="13" />
                                </svg></div>
                            <span className="feature-item__text">Automated alerts for faults, abnormal behavior, or
                                communication loss</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="20" x2="18" y2="10" />
                                    <line x1="12" y1="20" x2="12" y2="4" />
                                    <line x1="6" y1="20" x2="6" y2="14" />
                                </svg></div>
                            <span className="feature-item__text">Monthly performance reports with trend analysis</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                </svg></div>
                            <span className="feature-item__text">Periodic reviews focused on system health and forward
                                risk</span>
                        </li>
                    </ul>
                </div>

                <div style={{marginTop: '100px'}}>
                    <div className="stats-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)'}}>
                        <div className="stat-card stat-card--compact">
                            <div className="stat-card__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div className="stat-card__value">24/7</div>
                            <div className="stat-card__label">Monitoring</div>
                        </div>
                        <div className="stat-card stat-card--compact">
                            <div className="stat-card__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                            </div>
                            <div className="stat-card__value">&lt;4hr</div>
                            <div className="stat-card__label">Response Time</div>
                        </div>
                        <div className="stat-card stat-card--compact">
                            <div className="stat-card__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                            </div>
                            <div className="stat-card__value">Monthly</div>
                            <div className="stat-card__label">Reports</div>
                        </div>
                        <div className="stat-card stat-card--compact">
                            <div className="stat-card__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    
                                    <polyline points="14 2 14 8 20 8" />
                                    <path d="M9 15l2 2 4-4" />
                                </svg>
                            </div>
                            <div className="stat-card__value">Quarterly</div>
                            <div className="stat-card__label">Reviews</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Service Models */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">Engagement Options</span>
                <h2 className="content-section__title">Service Models</h2>
            </div>
            <div className="grid-3">
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <h4 className="card__title">Comprehensive O&M</h4>
                    <p className="card__text">
End-to-end responsibility for monitoring, maintenance, performance tracking,
                        and optimization. Ideal for asset owners who want predictable outcomes with minimal internal
                        involvement.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <h4 className="card__title">Monitoring & Performance Review</h4>
                    <p className="card__text">
Remote monitoring with structured reporting and engineering feedback.
                        Maintenance execution can be coordinated with your internal team or third-party contractors.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="4" />
                            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                            <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                            <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
                            <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                        </svg>
                    </div>
                    <h4 className="card__title">On-Demand Technical Support</h4>
                    <p className="card__text">
Specialist support for troubleshooting, audits, and corrective actions, best
                        suited for teams with in-house capability that need expert backup.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section">
        <div className="container">
            <div className="cta-section__content">
                <h2 className="cta-section__title">Your System Deserves More Than Reactive Maintenance</h2>
                <p className="cta-section__text">If you view your renewable plant as a long-term asset, O&M isn’t
                    optional, it’s strategic. Let’s talk about how to protect performance over the full life of your
                    system.</p>
                <Link to="/contact" className="btn btn--primary btn--large">Get in Touch</Link>
            </div>
        </div>
    </section>

    
    
    </div>
  );
};

export default OmServices;
