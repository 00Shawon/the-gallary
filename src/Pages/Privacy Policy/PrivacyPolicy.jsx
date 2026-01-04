import React from 'react';
import { Fade } from "react-awesome-reveal";
import { FaLock, FaEyeSlash, FaDatabase, FaCookieBite } from "react-icons/fa";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-100">
            {/* Background Accents */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[40%] bg-pink-50/30 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-5%] right-[-5%] w-[25%] h-[35%] bg-purple-50/30 blur-[100px] rounded-full"></div>
            </div>

            <main className="relative z-10 w-full max-w-4xl mx-auto pt-32 pb-20 px-6">
                <Fade triggerOnce direction="up">
                    <div className="text-center mb-16">
                        <span className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-4 block">Privacy Center</span>
                        <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-none mb-6 text-gray-900">
                            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Policy</span>
                        </h1>
                        <p className="text-gray-500 font-medium">Protecting your data since 2026</p>
                    </div>
                </Fade>

                <div className="space-y-12">
                    <Fade triggerOnce cascade damping={0.1}>
                        <section className="p-8 rounded-3xl bg-pink-50/30 border border-pink-100 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-pink-500 text-white">
                                    <FaLock />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">1. Information We Collect</h2>
                            </div>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>We collect information that you provide directly to us, such as when you create an account, post artwork, or communicate with us.</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Personal details (Name, Email, Photo).</li>
                                    <li>Transaction data and artist profiles.</li>
                                    <li>Usage data via cookies and analytics.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-purple-600 text-white">
                                    <FaDatabase />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">2. How We Use Your Data</h2>
                            </div>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>Your data allows us to provide, maintain, and improve our services. We use it to process transactions, send technical notices, and personalize your experience.</p>
                                <p>We do not sell your personal data to third parties. We only share information as necessary to provide our services or comply with legal obligations.</p>
                            </div>
                        </section>

                        <section className="p-8 rounded-3xl bg-pink-50/30 border border-pink-100 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-pink-500 text-white">
                                    <FaEyeSlash />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">3. Data Security</h2>
                            </div>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>We implement industry-standard security measures to protect your information from unauthorized access, alteration, or destruction. However, no internet transmission is perfectly secure.</p>
                                <p>All sensitive financial information is encrypted using Secure Socket Layer (SSL) technology.</p>
                            </div>
                        </section>

                        <section className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-blue-500 text-white">
                                    <FaCookieBite />
                                </div>
                                <h2 className="text-2xl font-heading font-bold">4. Cookies & Tracking</h2>
                            </div>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>We use cookies to enhance your navigation and remember your preferences. You can disable cookies in your browser settings, but some features of Artisan may not function correctly.</p>
                            </div>
                        </section>
                    </Fade>
                </div>

                <div className="mt-20 p-10 rounded-[2rem] bg-gray-900 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Your Data, Your Control</h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">If you wish to access, correct, or delete your personal information, please reach out to our privacy officer.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold hover:bg-pink-50 transition-colors">
                            Request Data Export
                        </a>
                        <a href="/terms" className="px-8 py-4 rounded-2xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors">
                            View Terms
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;