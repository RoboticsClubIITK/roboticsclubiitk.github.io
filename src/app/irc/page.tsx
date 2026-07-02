"use client";

import { Cpu, Wrench, Code2, Activity, Layers, Map, Camera, Shield, Zap, ChevronRight, PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Subsystem Data
const subsystems = [
    {
        id: "mechanical",
        title: "Mechanical & Mobility",
        icon: <Wrench className="h-5 w-5" />,
        color: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        borderColor: "border-blue-200 dark:border-blue-500/30",
        content: "Our custom Rocker-Bogie suspension ensures maximum traction over extreme Martian landscapes. The robotic manipulator arm features 6 degrees of freedom, capable of lifting payloads up to 5kg with mm-level precision.",
        specs: ["Rocker-Bogie Suspension", "6-DoF Robotic Arm", "Custom 3D-Printed Wheels", "Carbon-Fiber Connector Frame", "Differential Bar Mechanism", "High-Torque Planetary Gears"],
    },
    {
        id: "electronics",
        title: "Electronics & Power",
        icon: <Zap className="h-5 w-5" />,
        color: "text-amber-600 dark:text-amber-400",
        bgColor: "bg-amber-50 dark:bg-amber-900/20",
        borderColor: "border-amber-200 dark:border-amber-500/30",
        content: "Powered by a high-density 6S LiPo battery system. Our custom PCBs use automotive-grade components for extreme reliability in harsh thermal conditions. The power distribution board incorporates active current monitoring and hardware-level fault protection.",
        specs: ["Custom Power Distribution", "Automotive-grade PCBs", "Active Current Monitoring", "Redundant Comms Link", "Thermal Management Sensors", "Emergency Hardware Kill-Switches"],
    },
    {
        id: "software",
        title: "Software & Autonomy",
        icon: <Code2 className="h-5 w-5" />,
        color: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        borderColor: "border-purple-200 dark:border-purple-500/30",
        content: "Built on ROS 2 Humble. Our autonomy stack uses Intel RealSense depth cameras and RTK-GPS for cm-level localization. The rover utilizes ZED stereo vision and point-cloud mapping for real-time obstacle avoidance and path planning.",
        specs: ["ROS 2 Humble Architecture", "RTK-GPS Localization", "Stereo Vision SLAM Map Generation", "Computer Vision Tag Detection", "A* Path Planning Algorithm", "WebRTC Low-Latency Telemetry"],
    },
    {
        id: "science",
        title: "Science & Biology",
        icon: <Activity className="h-5 w-5" />,
        color: "text-emerald-600 dark:text-emerald-400",
        bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
        borderColor: "border-emerald-200 dark:border-emerald-500/30",
        content: "Equipped with an onboard spectrometer and chemical assay lab to detect extinct and extant life. The soil retrieval system is completely sterilized using UV-C to prevent forward biological contamination.",
        specs: ["Onboard Raman Spectrometer", "Chemical Assay Analysis", "UV-C Sterilized Retrieval mechanism", "In-situ Soil Moisture/pH", "Microscopic Imaging Camera", "Secure Environmental Seal"],
    },
];

const teamData = [
    { name: "Chinar Mhatre", role: "Team Head", department: "Management", email: "chinarrm23@iitk.ac.in", image: "/IRC_Team/Chinar.jpg" },
    { name: "Vishnu Sarathy", role: "Electronics", email: "vishnusb24@iitk.ac.in", image: "/IRC_Team/Vishnu Sarathy.jpg" },
    { name: "Rudraksh", role: "Software", email: "rudrakshk24@iitk.ac.in", image: "/IRC_Team/Rudraksh.jpeg" },
    { name: "Anurag Patil", role: "Mechanical", email: "anuragp24@iitk.ac.in", image: "/IRC_Team/Anurag Patil.jpeg" },
    { name: "Harsh Chandwani", role: "Electronics", email: "charsh24@iitk.ac.in", image: "/IRC_Team/Harsh Chandwani.jpeg" },
    { name: "Arnav Gupta", role: "Mechanical", email: "arnavu24@iitk.ac.in", image: "/IRC_Team/Arnav Gupta.jpeg" },
    { name: "Sushil Krishna K", role: "Software", email: "sushilk24@iitk.ac.in", image: "/IRC_Team/Sushil Krishna K.jpg" },
    { name: "Manant Singhal", role: "Mechanical", email: "msinghal24@iitk.ac.in", image: "/IRC_Team/Manant Singhal.jpg" },
    { name: "Naivedya Jain", role: "Mechanical", email: "naivedyaj24@iitk.ac.in", image: "/IRC_Team/Naivedya Jain.jpg" },
];

export default function IRC2027Page() {
    const [activeTab, setActiveTab] = useState(subsystems[0].id);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Dynamic class listener monitoring the root HTML tag change
    useEffect(() => {
        const root = document.documentElement;
        setIsDarkMode(root.classList.contains("dark"));

        const observer = new MutationObserver(() => {
            setIsDarkMode(root.classList.contains("dark"));
        });

        observer.observe(root, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`flex flex-col min-h-screen font-sans tracking-normal overflow-hidden relative transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-slate-300" : "bg-slate-50 text-slate-800"}`}>

            {/* Soft Atmospheric Lighting */}
            <div className="absolute top-0 right-0 w-full md:w-3/4 h-[800px] bg-gradient-to-l from-blue-900/5 to-transparent dark:from-blue-900/10 pointer-events-none blur-3xl opacity-50" />
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl relative z-10">

                {/* 1. HERO SECTION */}
                <section id="hero" className="mb-20">
                    <div className="max-w-4xl mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={`inline-block py-1.5 px-4 rounded-full border text-sm font-semibold tracking-wide uppercase shadow-sm mb-6 ${isDarkMode ? "bg-blue-900/30 border-blue-500/30 text-blue-400" : "bg-blue-100 border-blue-200 text-blue-600"}`}>
                                Participating Team
                            </span>
                            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                                Mission <br className="hidden md:block" />
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? "from-blue-400 to-indigo-300" : "from-blue-600 to-indigo-500"}`}>
                                    IRC 2027
                                </span>
                            </h1>
                            <p className={`text-lg md:text-2xl font-medium leading-relaxed max-w-3xl ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                                Engineering the future of planetary exploration. Designing an autonomous, life-detecting rover to conquer extreme Martian terrain simulations.
                            </p>
                        </motion.div>
                    </div>

                    {/* Rover CAD Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`w-full aspect-video md:aspect-[21/9] border rounded-3xl relative flex flex-col items-center justify-center overflow-hidden group shadow-xl ${isDarkMode ? "bg-slate-900 border-slate-800 shadow-2xl" : "bg-white border-slate-200"}`}
                    >
                        <Image
                            src="/rover_photo.png"
                            alt="ARC Rover"
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-8 ${isDarkMode ? "from-slate-950/80" : "from-slate-900/20"}`}>
                            <h3 className={`text-xl md:text-2xl font-bold tracking-wide ${isDarkMode ? "text-white" : "text-slate-900"}`}>Rover System Architecture</h3>
                            <p className={`text-sm font-medium mt-2 uppercase tracking-widest ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>Official Competition Platform</p>
                        </div>
                    </motion.div>
                </section>

                {/* 2. THE CHALLENGE */}
                <section id="parameters" className="mb-20">
                    <div className="mb-12">
                        <span className={`font-bold tracking-widest uppercase text-sm mb-3 block ${isDarkMode ? "text-blue-500" : "text-blue-600"}`}>Mission Parameters</span>
                        <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>Overcoming the Challenge</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Astrobiology Expedition", desc: "Serving as a mobile science lab to collect subsurface soil, conduct onboard chemical assays for habitability, and cache sterilized samples.", icon: <Activity className="h-6 w-6" /> },
                            { title: "Autonomous Delivery", desc: "Teleoperated reconnaissance to locate objects across a chaotic 500m zone, followed by fully autonomous navigation and payload pick-up.", icon: <Map className="h-6 w-6" /> },
                            { title: "Instrument Deployment", desc: "Executing precise 6-DoF manipulation on a mock panel. The arm must turn knobs, operate joysticks, type, and connect electrical plugs.", icon: <Wrench className="h-6 w-6" /> },
                            { title: "Project Management", desc: "Demonstrating comprehensive system engineering through intensive technical reviews, business partnership planning, and rover exhibition.", icon: <Shield className="h-6 w-6" /> }
                        ].map((mission, i) => (
                            <div key={i} className={`border p-6 rounded-3xl transition-all duration-300 group shadow-md hover:shadow-xl ${isDarkMode ? "border-slate-800 bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 shadow-lg" : "border-slate-200 bg-white hover:bg-slate-100 hover:border-slate-300"}`}>
                                <div className={`h-14 w-14 border rounded-2xl flex items-center justify-center mb-6 transition-colors ${isDarkMode ? "bg-slate-800 border-slate-700 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-900/20 group-hover:border-blue-500/30" : "bg-slate-100 border-slate-200 text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:border-blue-200"}`}>
                                    {mission.icon}
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>{mission.title}</h3>
                                <p className={`leading-relaxed font-medium ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>{mission.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. SUBSYSTEM DOCUMENTATION */}
                <section id="architecture" className="mb-20 relative">
                    <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="mb-12 text-center max-w-2xl mx-auto">
                        <span className={`font-bold tracking-widest uppercase text-sm mb-3 block ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>Engineering</span>
                        <h2 className={`text-3xl md:text-5xl font-black tracking-tight mb-4 ${isDarkMode ? "text-white" : "text-slate-900"}`}>System Architecture Specs</h2>
                        <p className={`text-lg ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>A highly modular, ruggedized platform balancing mechanical resilience with advanced computational autonomy.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
                        {/* Interactive Pill Menu */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-2">
                            {subsystems.map((sub) => {
                                const activeColorClass = isDarkMode ? sub.borderColor : sub.borderColor.replace('dark:', '');
                                return (
                                    <button
                                        key={sub.id}
                                        onClick={() => setActiveTab(sub.id)}
                                        className={`w-full text-left px-6 py-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 group ${activeTab === sub.id
                                            ? `${isDarkMode ? 'bg-slate-900 border-blue-500/50 shadow-lg' : 'bg-white border-blue-500 shadow-md'} scale-100`
                                            : `${isDarkMode ? 'bg-slate-900/30 border-slate-800/50 hover:bg-slate-800/80' : 'bg-white/50 border-slate-200 hover:bg-slate-100'} scale-[0.98]`
                                            }`}
                                    >
                                        <div className={`p-3 rounded-xl transition-colors ${activeTab === sub.id ? `${sub.bgColor} ${sub.color}` : isDarkMode ? 'bg-slate-800 text-slate-500 group-hover:text-slate-300' : 'bg-slate-200 text-slate-400 group-hover:text-slate-600'}`}>
                                            {sub.icon}
                                        </div>
                                        <span className={`font-bold text-lg tracking-wide ${activeTab === sub.id ? isDarkMode ? 'text-white' : 'text-slate-900' : isDarkMode ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-500 group-hover:text-slate-700'}`}>
                                            {sub.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Soft Data Sheet Display */}
                        <div className="w-full lg:w-2/3">
                            <AnimatePresence mode="wait">
                                {subsystems.map((sub) => (
                                    activeTab === sub.id && (
                                        <motion.div
                                            key={sub.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className={`border rounded-3xl p-6 sm:p-10 shadow-md backdrop-blur-md relative overflow-hidden ${isDarkMode ? "bg-slate-900/50 border-slate-800 shadow-xl" : "bg-white border-slate-200"}`}
                                        >
                                            <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-10 dark:opacity-20 ${sub.bgColor}`} />

                                            <div className="relative z-10">
                                                <div className="flex items-center gap-5 mb-8">
                                                    <div className={`p-4 rounded-2xl ${sub.bgColor} ${sub.color} shadow-inner`}>
                                                        {sub.icon}
                                                    </div>
                                                    <h3 className={`text-3xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>{sub.title} Overview</h3>
                                                </div>

                                                <p className={`text-lg font-medium leading-relaxed mb-10 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                                                    {sub.content}
                                                </p>

                                                <div className={`rounded-2xl p-6 md:p-8 border ${isDarkMode ? "bg-slate-950/50 border-slate-800/50" : "bg-slate-50 border-slate-200"}`}>
                                                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                                                        <Activity className="h-4 w-4" /> Technical Integration Focus
                                                    </h4>

                                                    <div className="grid sm:grid-cols-2 gap-4">
                                                        {sub.specs.map((spec, i) => (
                                                            <div key={i} className={`flex items-start gap-3 p-4 rounded-xl border ${isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"}`}>
                                                                <ChevronRight className={`h-5 w-5 shrink-0 transition-colors ${isDarkMode ? sub.color.split(' ').pop() : sub.color.split(' ')[0]}`} />
                                                                <span className={`font-semibold leading-tight ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>{spec}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* 4. TEAM DIRECTORY */}
                <section id="personnel" className="mb-16">
                    <div className="mb-12">
                        <span className={`font-bold tracking-widest uppercase text-sm mb-3 block ${isDarkMode ? "text-indigo-400" : "text-indigo-600"}`}>Personnel Directory</span>
                        <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>Senior Team Members</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {teamData.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 4) * 0.1 }}
                                className={`flex flex-col border rounded-3xl transition-all duration-300 p-4 md:p-6 group shadow-md ${
                                    isDarkMode 
                                        ? `border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 hover:border-slate-700 shadow-lg ${i === 0 ? "border-indigo-900/50 bg-indigo-950/10 hover:border-indigo-700/50" : ""}` 
                                        : `border-slate-200 bg-white hover:bg-slate-100 hover:border-slate-300 ${i === 0 ? "border-indigo-200 bg-indigo-50/30 hover:border-indigo-300" : ""}`
                                } ${i === 0 ? "sm:col-span-2 lg:col-span-3 xl:col-span-4" : ""}`}
                            >
                                <div className={`flex items-center gap-6 ${i === 0 ? "flex-col sm:flex-row" : "flex-col text-center"}`}>

                                    {/* Rounded Photo / Placeholder */}
                                    <div className={`border rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden shadow-inner ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200"} ${i === 0 ? "h-32 w-32 md:h-40 md:w-40" : "h-24 w-24"}`}>
                                        {"image" in member && member.image ? (
                                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                                        ) : (
                                            <Cpu className={`transition-colors ${isDarkMode ? "text-slate-500 group-hover:text-indigo-400" : "text-slate-400 group-hover:text-indigo-600"} ${i === 0 ? "h-12 w-12" : "h-10 w-10"}`} />
                                        )}
                                    </div>

                                    {/* Personnel Info */}
                                    <div className={`flex flex-col flex-1 w-full ${i === 0 ? "items-start text-left" : "items-center"}`}>
                                        <h3 className={`font-bold transition-colors mb-2 ${isDarkMode ? "text-slate-100 group-hover:text-white" : "text-slate-800 group-hover:text-slate-900"} ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
                                            {member.name}
                                        </h3>

                                        <span className={`inline-block font-semibold uppercase tracking-wider rounded-full mb-4 ${
                                            i === 0 
                                                ? isDarkMode ? "text-indigo-300 text-sm bg-indigo-900/30 px-4 py-1.5 border border-indigo-800/50" : "text-indigo-600 text-sm bg-indigo-100 px-4 py-1.5 border border-indigo-200"
                                                : isDarkMode ? "text-slate-400 text-xs" : "text-slate-500 text-xs"
                                        }`}>
                                            {member.role}
                                        </span>

                                        <div className={`text-sm text-slate-500 flex gap-4 ${i !== 0 && `justify-center w-full border-t pt-4 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`}`}>
                                            {"department" in member && member.department && (
                                                <>
                                                    <span className="font-medium">{member.department}</span>
                                                    <span className="hidden sm:inline">&bull;</span>
                                                </>
                                            )}
                                            <span className="truncate max-w-[150px]">{member.email}</span>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}