import React from 'react';
import { Link } from 'react-router-dom';

const Consulting = () => {
  return (
    <div>

    

    

    {/* Hero Section */}
    <section className="hero hero--short">
        <div className="container">
            <div className="hero__content">
                <div className="hero__badge" style={{marginTop: 'var(--space-12)'}}>
                    <span className="hero__badge-dot"></span>
                    Energy Consulting
                </div>
                <h1 className="hero__title">Advice That Starts With <span className="hero__title-highlight">Engineering</span>
                </h1>
                <p className="hero__subtitle">We help you decide what actually makes sense for your site , before any
                    technology, equipment, or investment decisions are made.</p>
            </div>
        </div>
    </section>

    {/* Introduction */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="grid-2">
                <div>
                    <span className="content-section__label">Our Approach</span>
                    <h2 className="content-section__title">Decisions First. Installations Later.</h2>
                    <p className="content-section__text">
                        Renewable energy decisions are often made too quickly , before fully understanding how a site
                        behaves, how energy is consumed, or what constraints actually matter.
                    </p>
                    <p className="content-section__text">
                        At OnLoop Energy, consulting exists for one reason: clarity. We study your site conditions, load
                        profile, infrastructure, and long-term objectives before recommending any solar, wind, or hybrid
                        solution.
                    </p>
                    <p className="content-section__text">
                        Sometimes the right answer is to proceed. Sometimes it’s to pause, redesign, or not build at
                        all. Our responsibility is to tell you the truth , clearly, calmly, and with technical reasoning
                        behind every recommendation.
                    </p>
                </div>
                <div className="image-card image-card--large">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
                        alt="Engineering consultation" />
                </div>
            </div>
        </div>
    </section>

    {/* Consulting Services */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header" style={{textAlign: 'center', maxWidth: '100%'}}>
                <span className="content-section__label">What We Offer</span>
                <h2 className="content-section__title">Consulting Services</h2>
            </div>
            <div className="grid-3">
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <h4 className="card__title">Site Feasibility Studies</h4>
                    <p className="card__text">
A ground-level understanding of your site , including solar exposure, wind
                        behavior, terrain, access, grid availability, and structural constraints , evaluated as they
                        actually exist, not as assumptions.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                        </svg>
                    </div>
                    <h4 className="card__title">Load Profile Analysis</h4>
                    <p className="card__text">
Detailed analysis of how and when energy is consumed, helping align generation
                        strategies with real demand rather than theoretical averages.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <circle cx="12" cy="12" r="3" />
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                    </div>
                    <h4 className="card__title">Technology Selection</h4>
                    <p className="card__text">
Objective evaluation of solar, wind, and hybrid configurations based on site
                        data and performance logic , not product availability or vendor alignment.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <line x1="12" y1="1" x2="12" y2="23" />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    </div>
                    <h4 className="card__title">Financial Modeling</h4>
                    <p className="card__text">
Practical financial projections built around realistic generation, losses,
                        operating costs, and policy conditions , designed to support informed decisions, not optimistic
                        spreadsheets.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <h4 className="card__title">Regulatory & Grid Advisory</h4>
                    <p className="card__text">
Clear guidance on policies, grid connectivity pathways, approvals, and
                        compliance requirements , translated into actionable next steps.</p>
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
                    <h4 className="card__title">Independent Technical Review</h4>
                    <p className="card__text">
A second set of experiences eyes on proposals, designs, or existing systems to
                        validate assumptions and identify hidden risks before they become expensive problems.</p>
                </div>
            </div>
        </div>
    </section>

    {/* How We Work */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">Process</span>
                <h2 className="content-section__title">How We Work</h2>
            </div>
            <div className="grid-2">
                <ul className="feature-list">
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                <line x1="9" y1="9" x2="9.01" y2="9" />
                                <line x1="15" y1="9" x2="15.01" y2="9" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Discovery:</strong> We start by understanding your
                            objectives, constraints, and decision timeline , not by assuming a solution.</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Site Visit:</strong> On-site assessment to observe real
                            conditions: solar access, wind exposure, electrical infrastructure, space limitations, and
                            operational realities.</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Analysis:</strong> Engineering-led evaluation of site
                            data, load behavior, and technology pathways using established, conservative
                            methodologies.</span>
                    </li>
                </ul>
                <ul className="feature-list">
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Report:</strong> A clear, documented assessment
                            outlining findings, trade-offs, and recommendations , written to support decision-making,
                            not selling.</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Review Meeting:</strong> A structured walkthrough of
                            results with your team, addressing questions, risks, and alternative approaches.</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Ongoing Support:</strong> Advisory support during
                            vendor selection, EPC discussions, or design review , if and when you need it.</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    {/* Why Independent Consulting */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="grid-2">
                <div>
                    <span className="content-section__label">Why It Matters</span>
                    <h2 className="content-section__title">Good Energy Decisions Are Rarely Obvious</h2>

                    <p className="content-section__text">
                        Renewable energy systems rarely fail because of technology. They fail because early assumptions
                        were never properly tested.
                    </p>

                    <p className="content-section__text">
                        Sizing errors, unrealistic production models, ignored constraints, and misaligned technology
                        choices compound over time. By the time performance issues appear, the design decisions that
                        caused them are already locked in.
                    </p>

                    <p className="content-section__text" style={{fontWeight: '500', color: 'var(--color-text-primary)'}}>
                        When decisions are rushed or based on incomplete analysis, the result is often:
                    </p>



                    <p className="content-section__text" style={{marginTop: 'var(--space-6)'}}>
                        Independent consulting exists to slow decisions just enough to get them right , before capital
                        is committed and flexibility disappears.
                    </p>

                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-8)'}}>
                    <div className="card">
                        <h4 className="card__title" style={{fontSize: 'var(--font-size-2xl)'}}>Our Commitment</h4>
                        <p className="card__text" style={{fontSize: 'var(--font-size-lg)', lineHeight: '1.9'}}>
                            “We will always give you clear, technically honest advice. If a project doesn’t make sense
                            for your site, we’ll say so , and explain why. Good outcomes begin with good decisions.”
                        </p>
                    </div>

                    <ul className="feature-list">
                        <li className="feature-item">
                            <div className="feature-item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="15" y1="9" x2="9" y2="15" />
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                            </div>
                            <span className="feature-item__text">Systems sized around assumptions instead of measured
                                demand</span>
                        </li>

                        <li className="feature-item">
                            <div className="feature-item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="15" y1="9" x2="9" y2="15" />
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                            </div>
                            <span className="feature-item__text">Production estimates that ignore site-specific losses and
                                variability</span>
                        </li>

                        <li className="feature-item">
                            <div className="feature-item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="15" y1="9" x2="9" y2="15" />
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                            </div>
                            <span className="feature-item__text">Technology selections that do not match real operating
                                behavior</span>
                        </li>

                        <li className="feature-item">
                            <div className="feature-item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="15" y1="9" x2="9" y2="15" />
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                            </div>
                            <span className="feature-item__text">Overlooked grid, regulatory, or operational
                                constraints</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Who We Work With */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="content-section__header" style={{textAlign: 'center', maxWidth: '100%'}}>
                <span className="content-section__label">Who We Work With</span>
                <h2 className="content-section__title">Who We Work With</h2>
            </div>
            <div className="grid-3">
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                            <polyline points="17 2 12 7 7 2" />
                        </svg>
                    </div>
                    <h4 className="card__title">Commercial & Industrial</h4>
                    <p className="card__text">
Facilities seeking to reduce grid dependence and stabilize energy costs
                        through captive generation and demand-side engineering.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path d="M3 21h18M3 7v1h18V7M5 21V8M19 21V8M9 21v-4a3 3 0 0 1 6 0v4" />
                        </svg>
                    </div>
                    <h4 className="card__title">Institutions & Campuses</h4>
                    <p className="card__text">
Educational, healthcare, and government campuses evaluating microgrid
                        potential or centralized renewable infrastructure.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <h4 className="card__title">Development Agencies</h4>
                    <p className="card__text">
Public and private agencies implementing renewable energy at scale across
                        urban or rural infrastructure projects.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section fade-in">
        <div className="container">
            <div className="cta-section__content">
                <h2 className="cta-section__title">Start With Clarity</h2>
                <p className="cta-section__text">If you’re evaluating renewable energy options and want decisions grounded
                    in engineering , not pressure , let’s talk.</p>
                <Link to="/contact" className="btn btn--primary btn--large">Request a Consultation</Link>
            </div>
        </div>
    </section>

    
    
    </div>
  );
};

export default Consulting;
