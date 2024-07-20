    'use client'
    import { useState } from 'react';
    import './globals.membership.css'


    export default function MembershipPage() {
        const [activePlan, setActivePlan] = useState<'monthly' | 'yearly'>('monthly');

        const handlePlanChange = (plan: 'monthly' | 'yearly') => {
            setActivePlan(plan);
        };
        
        return (
            <>
                <main id="page" className="grid-container" style={{ transform: "none" }}>
                    <div className="membership-page">
                        <article className="content">
                            <section className="post-content">
                                <div className="toggle-container text-center">
                                    <button
                                        id="monthly-btn"
                                        className={`toggle-btn ${activePlan === 'monthly' ? 'active' : ''}`}
                                        onClick={() => handlePlanChange('monthly')}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        id="yearly-btn"
                                        className={`toggle-btn ${activePlan === 'yearly' ? 'active' : ''}`}
                                        onClick={() => handlePlanChange('yearly')}
                                    >
                                        Yearly
                                    </button>
                                </div>
                                <div className="pricing-container">
                                    <section id="monthly" className={`pricing ${activePlan === 'monthly' ? 'active' : ''}`}>
                                        <div className="plan grid-33">
                                            <h3 className="large" style={{ fontWeight: 'bold' }}>Free</h3>
                                            <p className="price">$0</p>
                                            <strong>Access to all free articles</strong>
                                            <ul>
                                                <li>Access to limited Articles</li>
                                                <li>Articles with Advertising</li>
                                                <li>No card required</li>
                                            </ul>
                                            <a href="" className="sign-up-btn">Sign Up for Free</a>
                                        </div>
                                        <div className="plan grid-33">
                                            <h3 className="large" style={{ fontWeight: 'bold' }}>Premium</h3>
                                            <p className="price">$5 <span>/Month</span></p>
                                            <strong>Full Access to Premium Content</strong>
                                            <ul>
                                                <li>Access to premium posts</li>
                                                <li>Weekly newsletters</li>
                                                <li>Simple, secure card payment</li>
                                                <li>No Advertising</li>
                                            </ul>
                                            <a href="" className="sign-up-btn sign-up-now">Sign Up Now</a>
                                        </div>
                                        <div className="plan grid-33">
                                            <h3 className="large" style={{ fontWeight: 'bold' }}>Golden+✨</h3>
                                            <p className="price">$7 <span>/Month</span></p>
                                            <strong>Access to all premium content and special offers</strong>
                                            <ul>
                                                <li>Access to premium posts</li>
                                                <li>Weekly newsletters</li>
                                                <li>No Advertising</li>
                                                <li>Special discounts</li>
                                            </ul>
                                            <a href="" className="sign-up-btn sign-up-now">Sign Up Now</a>
                                        </div>
                                    </section>
                                    <section id="yearly" className={`pricing ${activePlan === 'yearly' ? 'active' : ''}`}>
                                        <div className="plan grid-33">
                                            <h3 className="large" style={{ fontWeight: 'bold' }}>Free</h3>
                                            <p className="price">$0</p>
                                            <strong>Access to all free articles</strong>
                                            <ul>
                                                <li>Access to limited Articles</li>
                                                <li>Articles with Advertising</li>
                                                <li>No card required</li>
                                            </ul>
                                            <a href="" className="sign-up-btn">Sign Up for Free</a>
                                        </div>
                                        <div className="plan grid-33">
                                            <h3 className="large" style={{ fontWeight: 'bold' }}>Premium</h3>
                                            <p className="price">$50 <span>/Year</span></p>
                                            <strong>Full Access to Premium Content</strong>
                                            <ul>
                                                <li>Access to premium posts</li>
                                                <li>Weekly newsletters</li>
                                                <li>Simple, secure card payment</li>
                                                <li>No Advertising</li>
                                            </ul>
                                            <a href="" className="sign-up-btn sign-up-now">Sign Up Now</a>
                                        </div>
                                        <div className="plan grid-33">
                                            <h3 className="large" style={{ fontWeight: 'bold' }}>Golden+✨</h3>
                                            <p className="price">$70 <span>/Year</span></p>
                                            <strong>Access to all premium content and special offers</strong>
                                            <ul>
                                                <li>Access to premium posts</li>
                                                <li>Weekly newsletters</li>
                                                <li>No Advertising</li>
                                                <li>Special discounts</li>
                                            </ul>
                                            <a href="" className="sign-up-btn sign-up-now">Sign Up Now</a>
                                        </div>
                                    </section>
                                </div>
                            </section>
                        </article>
                        <p className="text-center" style={{ marginTop: 20 }}>
                            Already have an account? <a href="" className="sign-in-btn">Sign In</a>
                        </p>
                    </div>
                </main>
            </>
        );
    }
