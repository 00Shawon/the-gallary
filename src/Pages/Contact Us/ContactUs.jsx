import React from 'react';
import { Fade } from "react-awesome-reveal";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100">
            {/* Background Accents */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] right-[-5%] w-[30%] h-[40%] bg-purple-50/50 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[25%] h-[35%] bg-pink-50/50 blur-[100px] rounded-full"></div>
            </div>

            <main className="relative z-10 w-full max-w-7xl mx-auto pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-3xl mb-16">
                    <Fade triggerOnce direction="up">
                        <span className="text-purple-600 font-bold uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
                        <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-none mb-6 text-gray-900">
                            We'd love to hear <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-6xl">from you.</span>
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Have a question about an artwork, an artist, or our platform? Our team is here to help you navigate the world of digital and physical art.
                        </p>
                    </Fade>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Contact Form */}
                    <div className="lg:col-span-7">
                        <Fade triggerOnce direction="left">
                            <div className="p-8 md:p-10 rounded-3xl bg-gray-50/50 border border-gray-100 backdrop-blur-sm shadow-sm">
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                                            <input 
                                                type="text" 
                                                placeholder="John Doe" 
                                                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/5 outline-none transition-all placeholder:text-gray-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                                            <input 
                                                type="email" 
                                                placeholder="john@example.com" 
                                                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/5 outline-none transition-all placeholder:text-gray-300"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Subject</label>
                                        <input 
                                            type="text" 
                                            placeholder="How can we help?" 
                                            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/5 outline-none transition-all placeholder:text-gray-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                                        <textarea 
                                            rows="5" 
                                            placeholder="Tell us more about your inquiry..." 
                                            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/5 outline-none transition-all placeholder:text-gray-300 resize-none"
                                        ></textarea>
                                    </div>
                                    <button className="w-full md:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-lg shadow-lg hover:shadow-purple-200 hover:scale-[1.02] transform transition-all duration-300 active:scale-95 flex items-center justify-center gap-3">
                                        Send Message <FaPaperPlane className="text-sm" />
                                    </button>
                                </form>
                            </div>
                        </Fade>
                    </div>

                    {/* Right: Info & Socials */}
                    <div className="lg:col-span-5 space-y-8">
                        <Fade triggerOnce direction="right" cascade damping={0.2}>
                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                <div className="p-6 rounded-3xl bg-purple-50/50 border border-purple-100 flex items-start gap-5">
                                    <div className="p-4 rounded-2xl bg-white text-purple-600 shadow-sm border border-purple-100">
                                        <FaEnvelope className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</h3>
                                        <p className="text-lg font-bold text-gray-900">support@artisan.com</p>
                                        <p className="text-sm text-gray-500">We reply within 24 hours</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-3xl bg-pink-50/50 border border-pink-100 flex items-start gap-5">
                                    <div className="p-4 rounded-2xl bg-white text-pink-500 shadow-sm border border-pink-100">
                                        <FaPhone className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</h3>
                                        <p className="text-lg font-bold text-gray-900">+1 (555) 123-4567</p>
                                        <p className="text-sm text-gray-500">Mon - Fri, 9am - 6pm EST</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 flex items-start gap-5">
                                    <div className="p-4 rounded-2xl bg-white text-gray-600 shadow-sm border border-gray-100">
                                        <FaMapMarkerAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</h3>
                                        <p className="text-lg font-bold text-gray-900">Artisan HQ, New York</p>
                                        <p className="text-sm text-gray-500">123 Canvas Street, Soho</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="p-8 rounded-[2rem] bg-gray-900 text-white overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full"></div>
                                <h3 className="text-xl font-bold mb-6 relative z-10">Follow our collection</h3>
                                <div className="flex gap-4 relative z-10">
                                    {[
                                        { icon: <FaFacebook />, color: "hover:bg-blue-600" },
                                        { icon: <FaTwitter />, color: "hover:bg-sky-500" },
                                        { icon: <FaInstagram />, color: "hover:bg-pink-600" },
                                        { icon: <FaLinkedin />, color: "hover:bg-blue-700" }
                                    ].map((social, idx) => (
                                        <a key={idx} href="#" className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl transition-all ${social.color} hover:-translate-y-1`}>
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactUs;
