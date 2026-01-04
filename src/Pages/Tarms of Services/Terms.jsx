import React from 'react';
import { Fade } from "react-awesome-reveal";
import { FaShieldAlt, FaFileContract, FaUserShield, FaBalanceScale } from "react-icons/fa";

const Terms = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100">
            {/* Background Accents */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[40%] bg-purple-50/30 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[25%] h-[35%] bg-pink-50/30 blur-[100px] rounded-full"></div>
            </div>

            <main className="relative z-10 w-full max-w-4xl mx-auto pt-32 pb-20 px-6">
                <Fade triggerOnce direction="up">
                    <div className="text-center mb-16">
                        <span className="text-purple-600 font-bold uppercase tracking-widest text-xs mb-4 block">Legal Center</span>
                        <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-none mb-6">
                            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Service</span>
                        </h1>
                        <p className="text-gray-500 font-medium">Last updated: January 2026</p>
                    </div>
                </Fade>

                <div className="space-y-12">
                    <Fade triggerOnce cascade damping={0.1}>
                        <section className="p-8 rounded-3xl bg-gray-50/50 border border-gray-100 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-purple-600 text-white">
                                    <FaFileContract />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">1. Acceptance of Terms</h2>
                            </div>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>By accessing or using the Artisan platform, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>
                                <p>Artisan is a social media marketplace for discovering, buying, and selling original artwork. We provide the infrastructure for artists and collectors to connect.</p>
                            </div>
                        </section>

                        <section className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-pink-500 text-white">
                                    <FaUserShield />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">2. User Accounts & Security</h2>
                            </div>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>To use certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Provide accurate and complete information.</li>
                                    <li>Notify us immediately of any unauthorized use.</li>
                                    <li>You must be at least 18 years old to use this service.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="p-8 rounded-3xl bg-gray-50/50 border border-gray-100 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-purple-600 text-white">
                                    <FaBalanceScale />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">3. Marketplace & Transactions</h2>
                            </div>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>Artisan facilitates transactions between buyers and sellers. We are not a party to the actual sale contract unless specified. All payments are processed through secure third-party gateways.</p>
                                <p>Artists retain copyright to their work unless explicitly transferred. Buyers receive the physical or digital artwork as described in the listing.</p>
                            </div>
                        </section>

                        <section className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-blue-500 text-white">
                                    <FaShieldAlt />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">4. Prohibited Conduct</h2>
                            </div>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>Users may not post infringing, illegal, or offensive content. We reserve the right to remove any content or terminate any account that violates our community standards.</p>
                                <p>Spamming, hacking, or attempting to circumvent our platform's security is strictly prohibited.</p>
                            </div>
                        </section>
                    </Fade>
                </div>

                <div className="mt-20 p-10 rounded-[2rem] bg-gray-900 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20"></div>
                    <h3 className="text-2xl font-bold mb-4 relative z-10">Questions about our Terms?</h3>
                    <p className="text-gray-400 mb-8 relative z-10 leading-relaxed">We're here to help you understand your rights and responsibilities on Artisan.</p>
                    <a href="/contact" className="inline-block px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold hover:bg-purple-50 transition-colors relative z-10">
                        Contact Legal Team
                    </a>
                </div>
            </main>
        </div>
    );
};

export default Terms;
