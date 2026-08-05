import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        monthlyBill: '10L-25L',
        industryType: 'Textile',
        primaryObjective: 'Reduce Bill',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formsubmit.co/ajax/info@onloopenergy.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    "Full Name": formData.name,
                    "Phone Number": formData.phone,
                    "Email Address": formData.email,
                    "Company / Facility Name": formData.company,
                    "Average Monthly Bill (₹)": formData.monthlyBill,
                    "Industry Sector": formData.industryType,
                    "Primary Objective": formData.primaryObjective,
                    "Additional Message": formData.message,
                    _subject: `New C&I / MSME Plant Consultation Request from ${formData.name}`,
                    _captcha: 'false',
                    _template: 'table',
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    company: '',
                    monthlyBill: '10L-25L',
                    industryType: 'Textile',
                    primaryObjective: 'Reduce Bill',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="hero hero--short">
                <div className="container">
                    <div className="hero__content">
                        <div className="hero__badge" style={{ marginTop: 'var(--space-12)' }}>
                            <span className="hero__badge-dot"></span>
                            Renewable Solution Consultation
                        </div>
                        <h1 className="hero__title">Find the Right <span className="hero__title-highlight">Renewable Energy Solution</span></h1>
                        <p className="hero__subtitle">Share your electricity bill details. Our engineering team will analyze your load curve and recommend the right renewable power plant for your facility.</p>
                    </div>
                </div>
            </section>

            {/* Contact Info & MSME Lead Gen Form */}
            <section className="content-section">
                <div className="container">
                    <div className="grid-2" style={{ gap: 'var(--space-12)' }}>
                        <div>
                            <span className="content-section__label">Direct Engineering Support</span>
                            <h2 className="content-section__title" style={{ marginBottom: 'var(--space-6)' }}>Cut your per-unit power costs.</h2>
                            <p className="content-section__text" style={{ marginBottom: 'var(--space-6)' }}>
                                Whether you run a textile dyeing unit in Surat, a ceramics plant in Morbi, a chemical unit in Ankleshwar, or a cold storage facility — we help choose and engineer the right captive renewable plant for your electricity bill.
                            </p>

                            <div className="feature-list">
                                <div className="feature-item">
                                    <div className="feature-item__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <span className="feature-item__text">
                                        <strong>Phone</strong><br />
                                        +91 98700 93424<br />
                                        +91 82004 87832
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <span className="feature-item__text">
                                        <strong>Email</strong><br />
                                        info@onloopenergy.com
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <span className="feature-item__text">
                                        <strong>Office</strong><br />
                                        16, Balaji Industrial Park<br />Kathwada, Ahmedabad<br />Daskroi, Gujarat, 382430
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* Targeted MSME Lead Form */}
                            <div className="contact-form" style={{ background: '#ffffff', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--glass-border)' }}>
                                <h3 className="card__title" style={{ marginBottom: 'var(--space-2)' }}>Let us know your bill and we can find the right solution</h3>
                                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
                                    Share your energy details below. Our engineers will evaluate your load profile and recommend the optimal renewable energy plant for your factory.
                                </p>

                                {status === 'success' && (
                                    <div style={{
                                        padding: '1rem',
                                        marginBottom: '1rem',
                                        borderRadius: '8px',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '1px solid rgba(16, 185, 129, 0.3)',
                                        color: '#10b981',
                                        fontSize: '0.95rem',
                                    }}>
                                        ✅ Thank you! Your request has been received. Our engineers will review your bill details and reach out within 24 hours.
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div style={{
                                        padding: '1rem',
                                        marginBottom: '1rem',
                                        borderRadius: '8px',
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                        color: '#ef4444',
                                        fontSize: '0.95rem',
                                    }}>
                                        ❌ Something went wrong. Please try again or email us directly at info@onloopenergy.com
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="grid-2" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                                        <div className="form-group" style={{ marginBottom: 0 }}>
                                            <label className="form-label">Full Name *</label>
                                            <input type="text" name="name" className="form-input" required placeholder="Your Name" value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: 0 }}>
                                            <label className="form-label">Phone Number *</label>
                                            <input type="tel" name="phone" className="form-input" required placeholder="e.g. +91 98765 43210" value={formData.phone} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="grid-2" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                                        <div className="form-group" style={{ marginBottom: 0 }}>
                                            <label className="form-label">Email Address *</label>
                                            <input type="email" name="email" className="form-input" required placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: 0 }}>
                                            <label className="form-label">Company / Facility Name</label>
                                            <input type="text" name="company" className="form-input" placeholder="e.g. Surat Textiles Ltd" value={formData.company} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="grid-2" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                                        <div className="form-group" style={{ marginBottom: 0 }}>
                                            <label className="form-label">Avg. Monthly Electricity Bill (₹)</label>
                                            <select name="monthlyBill" className="form-input" value={formData.monthlyBill} onChange={handleChange}>
                                                <option value="10L-25L">₹10 Lakhs – ₹25 Lakhs / month</option>
                                                <option value="25L-50L">₹25 Lakhs – ₹50 Lakhs / month</option>
                                                <option value="50L-1Cr">₹50 Lakhs – ₹1 Crore / month</option>
                                                <option value=">1Cr">More than ₹1 Crore / month</option>
                                            </select>
                                        </div>
                                        <div className="form-group" style={{ marginBottom: 0 }}>
                                            <label className="form-label">Industry Type</label>
                                            <select name="industryType" className="form-input" value={formData.industryType} onChange={handleChange}>
                                                <option value="Textile">Textile / Dyeing</option>
                                                <option value="Ceramics">Ceramics / Tiles</option>
                                                <option value="Chemical">Chemical / Processing</option>
                                                <option value="Food Processing">Food Processing</option>
                                                <option value="Cold Storage">Cold Storage</option>
                                                <option value="Foundry / Metals">Foundry / Metals</option>
                                                <option value="Light Engineering">Light Engineering</option>
                                                <option value="Warehousing / Logistics">Warehousing / Logistics</option>
                                                <option value="Commercial Complex">Commercial Complex</option>
                                                <option value="Other">Other Manufacturing</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group" style={{ marginBottom: 'var(--space-4)' }}>
                                        <label className="form-label">Primary Objective</label>
                                        <select name="primaryObjective" className="form-input" value={formData.primaryObjective} onChange={handleChange}>
                                            <option value="Reduce Bill">Reduce Electricity Bill</option>
                                            <option value="Power Reliability">Power Reliability / Backup</option>
                                            <option value="Carbon Neutrality">Carbon Neutrality / ESG</option>
                                        </select>
                                    </div>

                                    <div className="form-group" style={{ marginBottom: 'var(--space-6)' }}>
                                        <label className="form-label">Additional Site Context / Message</label>
                                        <textarea name="message" className="form-textarea" placeholder="Tell us about your operating hours, shifts, or specific energy goals..." style={{ height: '90px' }} value={formData.message} onChange={handleChange}></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn--primary btn--large"
                                        style={{ width: '100%', justifyContent: 'center' }}
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? 'Submitting Request...' : 'Submit Feasibility Request'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
