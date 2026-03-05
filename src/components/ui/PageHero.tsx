"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description: string;
    gradientText?: string;
    bgColors?: {
        top?: string;
        bottom?: string;
        center?: string;
    };
}

export function PageHero({
    title,
    subtitle,
    description,
    gradientText,
    bgColors = {
        top: "bg-primary/5",
        bottom: "bg-purple-500/5",
        center: "bg-rose-500/5",
    },
}: PageHeroProps) {
    return (
        <div className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-20">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className={`absolute top-[-10%] right-[10%] w-[600px] h-[600px] ${bgColors.top} rounded-full blur-3xl opacity-40`} />
                <div className={`absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] ${bgColors.bottom} rounded-full blur-3xl opacity-40`} />
                {bgColors.center && (
                    <div className={`absolute top-[40%] right-[10%] w-96 h-96 ${bgColors.center} rounded-full blur-3xl opacity-30`} />
                )}
            </div>

            <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
                        {title} {gradientText && <span className="text-primary">{gradientText}</span>}
                    </h1>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
