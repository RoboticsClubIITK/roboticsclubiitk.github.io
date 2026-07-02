"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Instagram, Mail, MapPin, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-[#030712] text-zinc-100 overflow-hidden relative border-t border-white/5">
            {/* Top Wavy Design Layout - Matches original dark context pattern */}
            <div className="relative py-12 md:py-16">
                <div
                    className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='40' viewBox='0 0 160 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q 40 0 80 20 T 160 20' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M0 30 Q 40 10 80 30 T 160 30' fill='none' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '140px 35px',
                        backgroundRepeat: 'repeat'
                    }}
                />

                <div className="w-full relative z-10 flex flex-col gap-10 px-4 md:px-8 max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-items-center items-start">
                        
                        {/* Logo Block */}
                        <div className="flex flex-col gap-2 md:w-64">
                            <Link className="flex items-center" href="/">
                                <Image
                                    src="/logo.png"
                                    alt="Robotics Club Logo"
                                    width={200}
                                    height={50}
                                    className="h-9 w-auto object-contain transition-all duration-300"
                                />
                            </Link>
                            <p className="text-xs text-zinc-500 font-medium tracking-wide">
                                #HappyRoboting
                            </p>
                        </div>

                        {/* Contact Block */}
                        <div className="flex flex-col gap-3 md:w-64">
                            <h3 className="font-bold text-sm text-zinc-200 tracking-wider uppercase">Contact</h3>
                            <div className="flex items-center gap-3 text-xs text-zinc-400">
                                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                                <a href="mailto:roboticsclubiitkanpur@gmail.com" className="hover:text-cyan-400 transition-colors break-all">
                                    roboticsclubiitkanpur@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-zinc-400">
                                <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                                <span>A3 Common Room, Hall 12, IIT Kanpur</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col gap-3 md:w-64">
                            <h3 className="font-bold text-sm text-zinc-200 tracking-wider uppercase">Follow Us</h3>
                            <div className="flex gap-4">
                                <Link href="https://github.com/RoboticsClubIITK" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-transform hover:scale-105">
                                    <Github className="h-5 w-5" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/robotics-club-iit-kanpur/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-transform hover:scale-105">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                                <Link href="https://www.instagram.com/roboticsclub_iitk/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-transform hover:scale-105">
                                    <Instagram className="h-5 w-5" />
                                </Link>
                                <Link href="https://www.youtube.com/c/RoboticsClubIITKanpur" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-transform hover:scale-105">
                                    <Youtube className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar Section */}
            <div className="border-t border-white/5 bg-black/40 py-4">
                <div className="w-full px-4 md:px-8 max-w-screen-2xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-[11px] font-medium text-zinc-600">
                    <p>© {new Date().getFullYear()} Robotics Club IIT Kanpur. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}