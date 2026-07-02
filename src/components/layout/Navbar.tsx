"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Competitions", href: "/competitions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
    { name: "Alumni", href: "/alumni" },
    { name: "Blogs", href: "/blogs" },
    { name: "IRC 2027", href: "/irc" },
    { name: "Outreach Activities", href: "/outreach-activities" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 text-slate-900 dark:text-zinc-100 transition-colors duration-300">
            <div className="w-full flex h-16 items-center justify-between px-4 md:px-6">
                <Link className="flex items-center" href="/">
                    <Image
                        src="/logo.png"
                        alt="Robotics Club IITK Logo"
                        width={220}
                        height={55}
                        quality={100}
                        className="h-10 w-auto object-contain invert dark:invert-0 transition-all duration-300"
                        priority
                    />
                </Link>

                {/* Right Actions Block */}
                <div className="flex items-center gap-4">
                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "transition-colors duration-200 hover:text-blue-600 dark:hover:text-sky-400 font-semibold",
                                    pathname === item.href 
                                        ? "text-blue-600 dark:text-sky-400" 
                                        : "text-slate-600 dark:text-zinc-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Theme Toggle Element */}
                    <ThemeToggle />

                    {/* Mobile Menu Trigger */}
                    <button
                        className="flex items-center lg:hidden text-slate-800 dark:text-zinc-200 p-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Expandable Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-b border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 transition-colors duration-300"
                    >
                        <div className="flex flex-col gap-3 p-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-sm font-semibold transition-colors py-1",
                                        pathname === item.href
                                            ? "text-blue-600 dark:text-sky-400"
                                            : "text-slate-600 dark:text-zinc-400"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
// clean pipleline reset