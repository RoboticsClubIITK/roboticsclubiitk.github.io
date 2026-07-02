"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";

// Outreach Activities
const outreachActivities = [
    {
        id: "SchoolSTEMOutreach",
        title: "School STEM Outreach",
        category: "Education & Outreach",
        description: "A weekly outreach initiative where Robotics Club secretaries visit schools to mentor students in STEM through engaging lessons, practical activities, and hands-on robotics demonstrations, inspiring young minds to explore science and technology.",
        image: "/outreach/school visit JK.jpeg",
        techStack: ["STEM", "School Outreach", "Weekly", "Mentorship", "Sir Padampat Singhania Education Centre : School Kanpur"],
        docLink: "mailto:roboticsclubiitkanpur@gmail.com?subject=School%20STEM%20Outreach%20Request",
    },






];

// Helper to determine badge color based on tech name length (deterministic)
const getBadgeColor = (tech: string) => {
    const colors = [
        "bg-blue-500/10 text-blue-500 border-blue-500/20",
        "bg-green-500/10 text-green-500 border-green-500/20",
        "bg-purple-500/10 text-purple-500 border-purple-500/20",
        "bg-orange-500/10 text-orange-500 border-orange-500/20",
        "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
        "bg-pink-500/10 text-pink-500 border-pink-500/20",
    ];
    return colors[tech.length % colors.length];
};

export default function OutreachActivitiesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background py-16 md:py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-pan-bg bg-[length:200%_auto]">Outreach Activities</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover the Robotics Club IITK's outreach initiatives, workshops, school visits, exhibitions, and STEM engagement programs that inspire innovation beyond the campus.
                    </p>
                </div>

                <div className="grid gap-8">
                    {outreachActivities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                        >
                            <Card className="group overflow-hidden glass-card hover:border-primary/50 transition-all duration-300">
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row gap-0">
                                        {/* Text Section */}
                                        <div className="flex-1 p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
                                            <div className="mb-6">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary shadow-sm">
                                                        {activity.category}
                                                    </span>
                                                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                                                </div>
                                                <h2 className="text-2xl font-bold md:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70 group-hover:to-primary transition-colors duration-300">
                                                    {activity.title}
                                                </h2>
                                            </div>

                                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                                {activity.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {activity.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold ${getBadgeColor(tech)} transition-transform hover:scale-105`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-4 mt-auto">
                                                <Button className="gap-2 bg-cta text-cta-foreground hover:bg-cta/90 border-none shadow-md shadow-cta/10 transition-all hover:translate-y-[-2px]" asChild>
                                                    <a href={activity.docLink} target="_blank" rel="noopener noreferrer">
                                                        <Mail className="h-4 w-4" /> Request a School Visit                                                    </a>
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Image Section */}
                                        <div className="w-full md:w-2/5 xl:w-2/5 order-1 md:order-2 relative aspect-[16/10] md:aspect-auto overflow-hidden bg-muted/30">
                                            <Image
                                                src={activity.image}
                                                alt={activity.title}
                                                fill
                                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                            />
                                            {/* Overlay Gradient on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
