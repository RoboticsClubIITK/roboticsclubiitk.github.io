"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Bot, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Competitions", href: "/competitions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
    // IRC 2027 and Alumni might be secondary or in a "More" dropdown, 
    // but for now keeping them accessible.
    { name: "Alumni", href: "/alumni" },
    { name: "Blogs", href: "/blogs" },
    { name: "IRC 2027", href: "/irc" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <Link className="flex items-center space-x-2" href="/">
                    {/* <Bot className="h-8 w-8 text-primary" /> */}
                    <Image
                        src="/logo.png"
                        alt="Robotics Club IITK Logo"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === item.href ? "text-cta" : "text-foreground/60"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Filter */}
                <button
                    className="flex items-center space-x-2 lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle Menu</span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-b bg-background"
                    >
                        <div className="container flex flex-col gap-4 p-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        pathname === item.href
                                            ? "text-cta"
                                            : "text-foreground/60"
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
