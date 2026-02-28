import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>

    {/* Header */}
    

    

    {/* Hero Section */}
    <section className="hero hero--short hero--image" style={{backgroundImage: 'url("/images/stock/solar-park-1288842.jpg")'}}>
        <div className="container">
            <div className="hero__content">
                <div className="hero__badge">
                    <span className="hero__badge-dot"></span>
                    Why OnLoop Energy
                </div>
                <h1 className="hero__title">
                    We start with reality.
                </h1>
                <p className="hero__subtitle">Most energy problems don’t come from bad technology. They come from bad
                    decisions.</p>
            </div>
        </div>
    </section>

    {/* Introduction: The Problem */}
    <section className="content-section content-section--white fade-in">
        <div className="container">
            <div className="grid-2">
                <div>
                    <h2 className="content-section__title" style={{marginBottom: 'var(--space-6)'}}>More options don’t
                        automatically lead to better outcomes.</h2>
                    <p className="content-section__text">
                        Clean energy today is full of options: solar, wind, hybrid, storage. But at OnLoop Energy, our
                        role is simple but serious: help you make the right energy decision for your site, not the most
                        popular one.
                    </p>
                    <div
                        style={{marginTop: 'var(--space-8)', padding: 'var(--space-6)', borderLeft: '4px solid var(--color-primary)', background: 'rgba(30,115,184,0.05)'}}>
                        <p
                            style={{fontSize: 'var(--font-size-xl)', fontWeight: '500', color: 'var(--color-primary-dark)', marginBottom: '0'}}>
                            "We don’t start with technology. We start with reality."
                        </p>
                    </div>
                </div>
                <div
                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 'var(--space-8)'}}>
                    <p className="content-section__text">
                        Every site behaves differently. Sun hours vary. Wind patterns shift. Loads fluctuate. Land,
                        grid, and budgets impose limits.
                    </p>
                    <p className="content-section__text">
                        So before we talk about panels or turbines, we ask better questions:
                    </p>
                    <ul className="feature-list" style={{marginTop: 'var(--space-4)'}}>
                        <li className="feature-item"
                            style={{border: 'none', background: 'transparent', padding: 'var(--space-2) 0', boxShadow: 'none'}}>
                            <div className="feature-item__icon" style={{flexShrink: '0'}}><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg></div>
                            <span className="feature-item__text" style={{fontSize: 'var(--font-size-base)'}}>What does your
                                site actually offer?</span>
                        </li>
                        <li className="feature-item"
                            style={{border: 'none', background: 'transparent', padding: 'var(--space-2) 0', boxShadow: 'none'}}>
                            <div className="feature-item__icon" style={{flexShrink: '0'}}><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg></div>
                            <span className="feature-item__text" style={{fontSize: 'var(--font-size-base)'}}>When do you
                                really need energy?</span>
                        </li>
                        <li className="feature-item"
                            style={{border: 'none', background: 'transparent', padding: 'var(--space-2) 0', boxShadow: 'none'}}>
                            <div className="feature-item__icon" style={{flexShrink: '0'}}><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg></div>
                            <span className="feature-item__text" style={{fontSize: 'var(--font-size-base)'}}>What will still
                                work 20-25 years from now?</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Only after that... */}
    <section className="content-section content-section--light fade-in">
        <div className="container" style={{textAlign: 'center'}}>
            <p className="content-section__label">Our Philosophy</p>
            <h2 className="content-section__title" style={{marginBottom: 'var(--space-12)'}}>How we design a
                solution.</h2>

            <div className="grid-2">
                <div className="card card--horizontal">
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
                    <div>
                        <h4 className="card__title">Solar.</h4>
                        <p className="card__text">
Simple, effective, and reliable. Sometimes solar is the right answer on
                            its own.</p>
                    </div>
                </div>

                <div className="card card--horizontal">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                            
                        </svg>
                    </div>
                    <div>
                        <h4 className="card__title">Wind.</h4>
                        <p className="card__text">
Site-specific value. We deploy wind where resources genuinely support
                            long-term performance.</p>
                    </div>
                </div>

                <div className="card card--conclusion">
                    <div className="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="card__title">Hybrid Energy</h4>
                        <p className="card__text">
We integrate solar and wind only when they
                            complement each other to create a more stable, resilient, and higher-performing energy
                            asset.</p>
                    </div>
                </div>
            </div>

            <div style={{marginTop: 'var(--space-12)'}}>
                <h3
                    style={{fontSize: 'var(--font-size-2xl)', color: 'var(--color-primary-dark)', marginBottom: 'var(--space-4)'}}>
                    All tools. No bias.</h3>
                <p className="content-section__text" style={{maxWidth: '800px', margin: '0 auto'}}>
                    We design and deliver solar, small wind, and hybrid systems. That matters, not because it sounds
                    impressive, but because it keeps our thinking honest. When you are not tied to a single technology,
                    you are free to recommend what fits.
                </p>
            </div>
        </div>
    </section>

    {/* Hybrid Engineering Conclusion */}
    <section className="content-section fade-in">
        <div className="container">
            <div className="grid-2">
                <div
                    style={{background: 'var(--color-primary-dark)', padding: 'var(--space-10)', borderRadius: 'var(--radius-xl)', color: 'white'}}>
                    <h2 style={{fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-6)'}}>
                        The Advantage of Hybrid Solutions
                    </h2>

                    <p style={{fontSize: 'var(--font-size-lg)', opacity: '0.9', marginBottom: 'var(--space-6)'}}>
                        Solar and wind behave differently across time and seasons. Solar is predictable but limited to
                        daylight hours.
                        Wind can operate beyond those hours, but only where site conditions genuinely support it.
                    </p>

                    <p style={{fontSize: 'var(--font-size-lg)', opacity: '0.9', marginBottom: 'var(--space-6)'}}>
                        When engineered together with discipline, these differences can improve overall energy
                        availability,
                        smooth production variability, and strengthen system resilience. When combined without proper
                        analysis,
                        they simply increase capital cost and operational complexity.
                    </p>

                    <div style={{borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 'var(--space-6)'}}>
                        <p style={{fontWeight: '600', fontSize: 'var(--font-size-xl)'}}>
                            If hybrid improves performance, we’ll recommend it.
                            If it doesn’t, we won’t. Simple.
                        </p>
                    </div>
                </div>

                <div
                    style={{paddingLeft: 'var(--space-8)', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h3 className="content-section__title"
                        style={{fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-6)'}}>We care more about
                        outcomes than installations.</h3>
                    <p className="content-section__text">
                        We measure success differently. Not by how many systems we install. Not by how fast a deal
                        closes. But by whether the system still performs the way it was intended, years after
                        commissioning.
                    </p>
                    <p className="content-section__text">
                        That mindset influences everything:
                    </p>
                    <ul className="feature-list" style={{marginTop: 'var(--space-4)'}}>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg></div>
                            <span className="feature-item__text">Conservative design assumptions</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg></div>
                            <span className="feature-item__text">Honest feasibility discussions</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg></div>
                            <span className="feature-item__text">Clear communication of limitations</span>
                        </li>
                        <li className="feature-item">
                            <div className="feature-item__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg></div>
                            <span className="feature-item__text">Long-term accountability</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Who This Works Best For */}
    <section className="content-section content-section--light fade-in">
        <div className="container container--narrow">
            <div style={{textAlign: 'center', marginBottom: 'var(--space-12)'}}>
                <span className="content-section__label">Our Ideal Partners</span>
                <h2 className="content-section__title">Who this works best for</h2>
                <p className="content-section__text">OnLoop Energy is built for customers who want clarity, not confusion.
                    Who prefer thoughtful advice over quick selling. And who are making decisions that actually matter.
                </p>
            </div>

            <div className="card" style={{padding: 'var(--space-10)', marginBottom: 'var(--space-12)'}}>
                <h3 style={{marginBottom: 'var(--space-6)', color: 'var(--color-primary)'}}>One principle guides every
                    decision we make</h3>
                <p className="content-section__text"
                    style={{fontSize: 'var(--font-size-xl)', fontWeight: '500', color: 'var(--color-text-primary)'}}>
                    If a solution does not genuinely serve the customer’s long-term interest, we don’t push it. Even if
                    it costs us a sale.
                </p>
                <p className="content-section__text"
                    style={{marginTop: 'var(--space-4)', fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)'}}>
                    That’s not a marketing line. That’s how this company was designed to operate.
                </p>
            </div>

            <div style={{textAlign: 'center'}}>
                <h2 className="content-section__title" style={{marginBottom: 'var(--space-6)'}}>In short</h2>
                <p className="content-section__text" style={{fontSize: 'var(--font-size-xl)'}}>
                    OnLoop Energy exists to bring calm, engineering-led thinking into renewable energy.
                </p>
                <div
                    style={{marginTop: 'var(--space-8)', fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: 'var(--color-primary-dark)', lineHeight: '1.4'}}>
                    No noise.<br />
                    No pressure.<br />
                    No shortcuts.<br />
                    <span
                        style={{color: 'var(--color-accent)', display: 'block', marginTop: 'var(--space-4)', fontSize: 'var(--font-size-3xl)'}}>Just
                        clean energy, done right.</span>
                </div>
                <div style={{marginTop: 'var(--space-12)'}}>
                    <Link to="/contact" className="btn btn--primary btn--large">Start a Conversation</Link>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    
    
    </div>
  );
};

export default About;
