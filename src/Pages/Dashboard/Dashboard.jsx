import React, { useContext } from 'react';
import { AuthContext } from '../../Firebase/context/AuthContext';
import { Fade } from "react-awesome-reveal";
import { FaUserAlt, FaImages, FaHeart, FaCalendarAlt, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    if (!user) return null;

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100">
            {/* Background Accents */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] right-[-5%] w-[30%] h-[40%] bg-purple-50/50 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[25%] h-[35%] bg-pink-50/50 blur-[100px] rounded-full"></div>
            </div>

            <main className="relative z-10 w-full max-w-7xl mx-auto pt-32 pb-20 px-6 md:px-12">
                <div className="mb-12">
                    <Fade triggerOnce direction="up">
                        <span className="text-purple-600 font-bold uppercase tracking-widest text-xs mb-4 block">Control Panel</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight leading-none mb-4">
                            Welcome Back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">{user.displayName.split(' ')[0]}!</span>
                        </h1>
                        <p className="text-gray-500 text-lg">Manage your artistic presence and track your favorite collections.</p>
                    </Fade>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Profile Card */}
                    <div className="lg:col-span-4">
                        <Fade triggerOnce direction="left">
                            <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-purple-200/50 transition-colors"></div>
                                
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-purple-500 to-pink-500 p-[3px] mb-6 shadow-xl">
                                        <div className="w-full h-full rounded-[1.3rem] bg-white overflow-hidden">
                                            <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.displayName}</h2>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                                        <FaEnvelope className="text-purple-400" />
                                        <span>{user.email}</span>
                                    </div>

                                    <div className="w-full grid grid-cols-2 gap-3">
                                        <div className="p-4 rounded-2xl bg-white border border-gray-100 flex flex-col items-center">
                                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Status</span>
                                            <span className="text-sm font-bold text-green-500">Verified Artist</span>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-white border border-gray-100 flex flex-col items-center">
                                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Role</span>
                                            <span className="text-sm font-bold text-gray-700">Creator</span>
                                        </div>
                                    </div>
                                    
                                    <button className="w-full mt-6 py-4 rounded-2xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                                        Edit Profile <FaUserAlt className="text-xs" />
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Right: Stats and Actions */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Stats Grid */}
                        <Fade triggerOnce cascade damping={0.1} direction="up">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-center gap-5 hover:border-purple-200 transition-colors">
                                    <div className="p-4 rounded-2xl bg-purple-50 text-purple-600">
                                        <FaImages className="text-2xl" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mb-1">Total Artworks</span>
                                        <span className="text-2xl font-black text-gray-900">12</span>
                                    </div>
                                </div>
                                <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-center gap-5 hover:border-pink-200 transition-colors">
                                    <div className="p-4 rounded-2xl bg-pink-50 text-pink-500">
                                        <FaHeart className="text-2xl" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mb-1">Favorites</span>
                                        <span className="text-2xl font-black text-gray-900">48</span>
                                    </div>
                                </div>
                                <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-center gap-5 hover:border-blue-200 transition-colors">
                                    <div className="p-4 rounded-2xl bg-blue-50 text-blue-500">
                                        <FaCalendarAlt className="text-2xl" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mb-1">Last Active</span>
                                        <span className="text-base font-bold text-gray-900 truncate">2 hours ago</span>
                                    </div>
                                </div>
                            </div>

                            {/* Selection Cards */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <Link to="/myGallery" className="p-8 rounded-[2rem] bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-100 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 rounded-xl bg-white shadow-sm text-purple-600">
                                            <FaImages className="text-xl" />
                                        </div>
                                        <FaExternalLinkAlt className="text-purple-300 group-hover:text-purple-500 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">My Artwork Gallery</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">View and manage all the masterpieces you've shared with the community.</p>
                                    <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">Open Gallery →</span>
                                </Link>

                                <Link to="/myFavorites" className="p-8 rounded-[2rem] bg-gradient-to-br from-pink-50 to-pink-100/50 border border-pink-100 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 rounded-xl bg-white shadow-sm text-pink-500">
                                            <FaHeart className="text-xl" />
                                        </div>
                                        <FaExternalLinkAlt className="text-pink-300 group-hover:text-pink-500 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Favorite Collection</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Access your curated list of artworks that inspire you every day.</p>
                                    <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">Explore Favorites →</span>
                                </Link>
                            </div>
                        </Fade>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;