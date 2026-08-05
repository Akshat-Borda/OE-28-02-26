import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        location: '',
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
                    "Factory Location": formData.location,
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
                    location: '',
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
                        <p className="hero__subtitle">Share your electricity bill. Our engineering team will analyze your load curve and recommend the right solution.</p>
                    </div>
                </div>
            </section>

            {/* Contact Info, Timeline & Form */}
            <section className="content-section">
                <div className="container">
                    <div className="grid-2" style={{ gap: 'var(--space-12)' }}>
                        <div>
                            <span className="content-section__label">Direct Engineering Support</span>
                            <p className="content-section__text" style={{ marginBottom: 'var(--space-6)' }}>
                                Whether you run a textile dyeing unit in Surat, a ceramics plant in Morbi, a chemical unit in Ankleshwar, or a cold storage facility — we engineer the right captive renewable plant for your electricity bill.
                            </p>

                            {/* Direct Contact Feature List */}
                            <div className="feature-list" style={{ marginBottom: 'var(--space-8)' }}>
                                {/* WhatsApp Instant Option */}
                                <div className="feature-item" style={{ background: 'rgba(37, 211, 102, 0.08)', border: '1px solid rgba(37, 211, 102, 0.3)', borderRadius: 'var(--radius-lg)' }}>
                                    <div className="feature-item__icon" style={{ background: '#25D366', color: 'white' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                        </svg>
                                    </div>
                                    <span className="feature-item__text">
                                        <strong>Instant WhatsApp Chat</strong><br />
                                        <a href="https://wa.me/919870093424?text=Hi%20OnLoop%20Energy,%20I%20would%20like%20to%20get%20a%20feasibility%20report%20for%20my%20factory." target="_blank" rel="noopener noreferrer" style={{ color: '#15803d', fontWeight: '700', textDecoration: 'underline' }}>
                                            Chat on WhatsApp (+91 98700 93424) →
                                        </a>
                                    </span>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-item__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <span className="feature-item__text">
                                        <strong>Direct Phone</strong><br />
                                        +91 98700 93424 / +91 82004 87832
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
                                        <strong>Email Support</strong><br />
                                        info@onloopenergy.com
                                    </span>
                                </div>
                            </div>

                            {/* What Happens Next Block */}
                            <div style={{ background: '#ffffff', padding: 'var(--space-6)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)' }}>
                                <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Transparent Process</span>
                                <h3 style={{ fontSize: 'var(--font-size-lg)', marginTop: '4px', marginBottom: 'var(--space-4)' }}>What happens next?</h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(31, 183, 166, 0.15)', color: 'var(--color-primary)', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0 }}>1</div>
                                        <div>
                                            <strong style={{ fontSize: '14px', display: 'block', color: 'var(--color-text-primary)' }}>1. Engineering Review (Within 24 Hours):</strong>
                                            <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Our engineers analyze your monthly utility bill and tariff structure.</span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(31, 183, 166, 0.15)', color: 'var(--color-primary)', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0 }}>2</div>
                                        <div>
                                            <strong style={{ fontSize: '14px', display: 'block', color: 'var(--color-text-primary)' }}>2. Site Resource Modeling:</strong>
                                            <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>We evaluate wind velocity data and land availability for your factory location.</span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(31, 183, 166, 0.15)', color: 'var(--color-primary)', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0 }}>3</div>
                                        <div>
                                            <strong style={{ fontSize: '14px', display: 'block', color: 'var(--color-text-primary)' }}>3. Findings & Consultation Call:</strong>
                                            <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>We schedule a call to share custom hybrid recommendations — no obligation, no pressure.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* Targeted MSME Lead Form */}
                            <div className="contact-form" style={{ background: '#ffffff', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--glass-border)' }}>
                                <h3 className="card__title" style={{ marginBottom: 'var(--space-2)' }}>Let us know your bill and we can find the right solution</h3>
                                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
                                    Share your energy details below. Our engineers will evaluate your load profile and recommend the optimal solution for your factory.
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
                                            <label className="form-label">Factory Location (City/District) *</label>
                                            <input type="text" name="location" className="form-input" required placeholder="e.g. Surat / Morbi / Ankleshwar" value={formData.location} onChange={handleChange} />
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
                                            <label className="form-label">Primary Concern / Goal</label>
                                            <select name="primaryObjective" className="form-input" value={formData.primaryObjective} onChange={handleChange}>
                                                <option value="Reduce Bill">Reduce Electricity Bill</option>
                                                <option value="Power Reliability">Power Reliability / Backup</option>
                                                <option value="Carbon Neutrality">Carbon Neutrality / ESG</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group" style={{ marginBottom: 'var(--space-6)' }}>
                                        <label className="form-label">Additional Site Context / Message</label>
                                        <textarea name="message" className="form-textarea" placeholder="Tell us about your operating hours, shifts, or specific energy goals..." style={{ height: '80px' }} value={formData.message} onChange={handleChange}></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn--primary btn--large"
                                        style={{ width: '100%', justifyContent: 'center' }}
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? 'Submitting Request...' : 'Request Free Wind Feasibility Study'}
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
