import React from 'react';
import { Link } from 'react-router-dom';

const EpcServices = () => {
  return (
    <div>

    

    

    {/* Hero Section */}
    <section className="hero hero--short hero--image" style={{backgroundImage: 'url("/images/stock/solar-wind-farm.jpg")'}}>
        <div className="container">
            <div className="hero__content">
                <div className="hero__badge" style={{marginTop: 'var(--space-12)'}}>
                    <span className="hero__badge-dot"></span>
                    Engineering, Procurement & Construction
                </div>
                <h1 className="hero__title">EPC Services, <span className="hero__title-highlight">Built Around Reality</span>
                </h1>
                <p className="hero__subtitle">We execute renewable energy projects the way they should be done , engineered
                    for real site conditions, real loads, and real-world operation over decades.</p>
            </div>
        </div>
    </section>

    {/* Introduction */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="grid-2">
                <div>
                    <span className="content-section__label">Our Approach</span>
                    <h2 className="content-section__title">EPC That Starts With Understanding, Not Assumptions</h2>
                    <p className="content-section__text">
                        Every EPC project looks simple on paper. The complexity lives on the ground , in the soil, the
                        structure, the wind profile, the electrical room, and the way energy is actually consumed every
                        day.
                    </p>
                    <p className="content-section__text">
                        At OnLoop Energy, we begin by understanding how your site behaves, not how a standard system is
                        supposed to behave. Design decisions are made only after we study constraints, risks, and
                        long-term performance trade-offs.
                    </p>
                    <p className="content-section__text">
                        The result is an energy system that works quietly in the background , predictable, compliant,
                        and designed to stay relevant for years, not just commissioning day.
                    </p>
                </div>
                <div className="image-card image-card--large">
                    <img src="/images/stock/solar-park-1288842.jpg" alt="Solar park project execution" />
                </div>
            </div>
        </div>
    </section>

    {/* EPC Scope */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header" style={{textAlign: 'center', maxWidth: '100%'}}>
                <span className="content-section__label">Full Scope</span>
                <h2 className="content-section__title">What We Take Responsibility For</h2>
                <p className="content-section__text process-intro" style={{marginTop: 'var(--space-4)'}}>EPC means end-to-end
                    accountability. We don’t just deliver equipment , we take ownership of how the system is designed,
                    built, approved, and handed over.</p>
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
                    <h4 className="card__title">Site Assessment</h4>
                    <p className="card__text">
We evaluate structural strength, wind exposure, shading, soil conditions, and
                        electrical infrastructure , identifying risks before they become problems.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <h4 className="card__title">Engineering & Design</h4>
                    <p className="card__text">
System sizing, layouts, electrical single-line diagrams, structural checks,
                        and hybrid logic , all tailored to how your facility actually operates.</p>
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
                    <h4 className="card__title">Approvals & Compliance</h4>
                    <p className="card__text">
Grid coordination, statutory approvals, safety documentation, and regulatory
                        alignment handled without shortcuts.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <rect x="1" y="3" width="15" height="13" />
                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                            <circle cx="5.5" cy="18.5" r="2.5" />
                            <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                    </div>
                    <h4 className="card__title">Procurement</h4>
                    <p className="card__text">
Equipment selected for reliability, compatibility, and lifecycle value , not
                        just headline specifications.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path
                                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                    </div>
                    <h4 className="card__title">Installation</h4>
                    <p className="card__text">
Disciplined execution with defined methods, safety procedures, and quality
                        checks at every stage.</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                    <h4 className="card__title">Commissioning & Handover</h4>
                    <p className="card__text">
Testing, performance verification, documentation, and clear handover so your
                        team knows exactly what’s been built.</p>
                </div>
            </div>
        </div>
    </section>

    {/* How We Work */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">Process</span>
                <h2 className="content-section__title">How a Project Moves Forward</h2>
            </div>
            <div className="grid-2">
                <ul className="feature-list">
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Step 1:</strong> We start with a conversation ,
                            understanding your energy goals, constraints, and expectations.</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Step 2:</strong> Detailed site study to identify
                            technical, structural, and regulatory realities.</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Step 3:</strong> Engineering-led design and proposal,
                            clearly explaining what’s included, why it’s designed that way, and what to expect.</span>
                    </li>
                </ul>
                <ul className="feature-list">
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Step 4:</strong> Coordination with utilities and
                            authorities for approvals and grid connectivity.</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <path
                                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Step 5:</strong> Procurement and on-site execution with
                            defined milestones and accountability.</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg></div>
                        <span className="feature-item__text"><strong>Step 6:</strong> Commissioning, validation, and
                            structured handover , no loose ends.</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    {/* Why Choose Us */}
    <section className="content-section content-section--light fade-in">
        <div className="container">
            <div className="content-section__header">
                <span className="content-section__label">How We Think</span>
                <h2 className="content-section__title">What Guides Our EPC Decisions</h2>
                <p className="content-section__text" style={{maxWidth: '600px', marginTop: 'var(--space-4)'}}>These aren’t
                    selling points. They’re internal rules we don’t compromise on.</p>
            </div>
            <div className="grid-2">
                <div>
                    <ul className="feature-list">
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg></div>
                            <span className="feature-item__text"><strong>Site-Specific Engineering:</strong> No two sites
                                behave the same. Every design reflects actual measurements, not assumptions copied from
                                past projects.</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg></div>
                            <span className="feature-item__text"><strong>Designed for the Long Run:</strong> Decisions are
                                made with 20–25 years of operation in mind , including maintenance access, degradation,
                                and grid behaviour.</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg></div>
                            <span className="feature-item__text"><strong>Compliance Is Non-Negotiable:</strong> Safety
                                standards, grid codes, and statutory requirements are treated as engineering inputs, not
                                paperwork.</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="feature-list">
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg></div>
                            <span className="feature-item__text"><strong>Clear Documentation:</strong> Drawings,
                                calculations, and specifications are transparent , so you know exactly what’s being
                                built and why.</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg></div>
                            <span className="feature-item__text"><strong>Single Point Accountability:</strong> One team
                                responsible from design to commissioning. No finger-pointing, no fragmentation.</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="3" />
                                    <path
                                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                </svg></div>
                            <span className="feature-item__text"><strong>Hybrid System Understanding:</strong> Practical
                                experience integrating wind and solar where it actually makes sense , technically and
                                economically.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section fade-in">
        <div className="container">
            <div className="cta-section__content">
                <h2 className="cta-section__title">Let’s Start With the Right Questions</h2>
                <p className="cta-section__text">If you’re planning a renewable energy project and want clarity before
                    committing to decisions, we’re happy to talk.</p>
                <Link to="/contact" className="btn btn--primary btn--large">Schedule a Consultation</Link>
            </div>
        </div>
    </section>

    
    
    </div>
  );
};

export default EpcServices;
