import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: 'New Submission from OnLoop Energy Contact Form',
                    _captcha: 'false',
                    _template: 'table',
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
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
                            Contact Us
                        </div>
                        <h1 className="hero__title">Let’s Start a <span className="hero__title-highlight">Conversation</span></h1>
                        <p className="hero__subtitle">Whether you’re exploring wind, solar, or hybrid energy, we’re here to help you
                            make informed decisions.</p>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="content-section fade-in">
                <div className="container">
                    <div className="grid-2">
                        <div>
                            <span className="content-section__label">Get in Touch</span>
                            <h2 className="content-section__title" style={{ marginBottom: 'var(--space-6)' }}>How can we help?</h2>

                            <div className="feature-list">
                                <div className="feature-item">
                                    <div className="feature-item__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />

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
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />

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
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <span className="feature-item__text">
                                        <strong>Office</strong><br />
                                        16, Balaji Industrial Park<br />Kathwada, Ahmedabad<br />Daskroi, Gujarat<br />India,
                                        382430
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* Simple Contact Form */}
                            <div className="contact-form">
                                <h3 className="card__title" style={{ marginBottom: 'var(--space-6)' }}>Send us a Message</h3>

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
                                        ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
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
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input type="text" name="name" className="form-input" required placeholder="Your Name" value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" name="email" className="form-input" required placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Message</label>
                                        <textarea name="message" className="form-textarea" required placeholder="How can we help?" value={formData.message} onChange={handleChange}></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn--primary"
                                        style={{ width: '100%', justifyContent: 'center' }}
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}


        </div>
    );
};

export default Contact;
