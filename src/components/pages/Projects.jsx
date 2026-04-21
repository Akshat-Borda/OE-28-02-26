import React from 'react';

const Projects = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero hero--short">
                <div className="container">
                    <div className="hero__content">
                        <div className="hero__badge" style={{ marginTop: 'var(--space-12)' }}>
                            <span className="hero__badge-dot"></span>
                            Our Portfolio
                        </div>
                        <h1 className="hero__title">Engineering in <span className="hero__title-highlight">Action</span></h1>
                        <p className="hero__subtitle">
                            Explore our recent installations. We design, deploy, and maintain bespoke solar, small wind, and hybrid energy systems built strictly for performance and longevity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid Section */}
            <section className="content-section fade-in">
                <div className="container">
                    <div className="content-section__header">
                        <span className="content-section__label">Installations</span>
                        <h2 className="content-section__title">Recent Projects</h2>
                        <p className="content-section__text">
                            Below are highlighted projects across commercial, industrial, and government sectors.
                        </p>
                    </div>

                    <div className="grid-3" style={{ gap: 'var(--space-6)' }}>
                        {/* Project 1 */}
                        <div className="image-card">
                            <img src="/images/projects/project-1.jpg" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop" }} alt="Commercial Solar Installation" loading="lazy" style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
                            <div className="image-card__caption" style={{ padding: 'var(--space-6)' }}>
                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>1.2MW Commercial Solar</div>
                                <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-xl)' }}>Industrial Manufacturing Facility</h4>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>A rooftop and ground-mount integrated deployment providing 65% of daytime operational load.</p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="image-card">
                            <img src="/images/projects/project-2.jpg" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=600&fit=crop" }} alt="Hybrid Wind Installation" loading="lazy" style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
                            <div className="image-card__caption" style={{ padding: 'var(--space-6)' }}>
                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>Solar + Wind Hybrid</div>
                                <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-xl)' }}>Remote Operations Center</h4>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>Engineered for 24/7 availability utilizing daytime photovoltaics and seasonal wind optimization.</p>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="image-card">
                            <img src="/images/projects/project-3.jpg" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop" }} alt="EPC Services" loading="lazy" style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
                            <div className="image-card__caption" style={{ padding: 'var(--space-6)' }}>
                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>500kW Array</div>
                                <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-xl)' }}>Institutional Campus Canopy</h4>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>End-to-end EPC execution delivering robust structural integration parsing complex building codes.</p>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="image-card">
                            <img src="/images/projects/project-4.jpg" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop" }} alt="Ground mount solar" loading="lazy" style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
                            <div className="image-card__caption" style={{ padding: 'var(--space-6)' }}>
                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>Utility-Scale Preparation</div>
                                <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-xl)' }}>Government Land Initiative</h4>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>Site-specific preparation, string inverter placement, and O&M grid-tying setup.</p>
                            </div>
                        </div>

                        {/* Project 5 */}
                        <div className="image-card">
                            <img src="/images/projects/project-5.jpg" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=600&fit=crop" }} alt="Rooftop array" loading="lazy" style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
                            <div className="image-card__caption" style={{ padding: 'var(--space-6)' }}>
                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>200kW Commercial Roof</div>
                                <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-xl)' }}>Logistics Warehouse</h4>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>Deploying high-efficiency modules engineered perfectly to the roof's structural integrity.</p>
                            </div>
                        </div>

                        {/* Project 6 */}
                        <div className="image-card">
                            <img src="/images/projects/project-6.jpg" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop" }} alt="Off-grid wind" loading="lazy" style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
                            <div className="image-card__caption" style={{ padding: 'var(--space-6)' }}>
                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>Off-Grid Small Wind</div>
                                <h4 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-xl)' }}>Agricultural Sector</h4>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>Delivering strict, reliable loads independent of the main utility network in high-wind regions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section fade-in">
                <div className="container">
                    <div className="cta-section__content">
                        <h2 className="cta-section__title">Ready to build your next energy asset?</h2>
                        <p className="cta-section__text">Contact us to review site feasibility and financial modeling for your custom architecture.</p>
                        <a href="/contact" className="btn btn--primary btn--large">Get a Technical Assessment</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
