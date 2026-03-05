"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, Layers } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { ResourcePost } from "@/lib/resources";

export default function ClientPage({ roadmaps }: { roadmaps: ResourcePost[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Get all unique tags from roadmaps
    const allTags = Array.from(new Set(roadmaps.flatMap((post) => post.tags || [])));

    const filteredRoadmaps = roadmaps.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag ? (post.tags || []).includes(selectedTag) : true;
        return matchesSearch && matchesTag;
    });

    return (
        <div className="flex flex-col min-h-screen bg-background py-16 md:py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[20%] w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container px-4 md:px-8 relative z-10 mx-auto flex flex-col items-center">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
                        Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Resources</span>
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
                        Curated learning materials and documentation for club members.
                    </p>
                </div>

                {/* Roadmaps Section */}
                <section className="mb-20 w-full">
                    <div className="flex flex-col items-center gap-3 mb-10 text-center">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold">Roadmaps</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                        {filteredRoadmaps.map((item, i) => (
                            <motion.div
                                key={item.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="glass-card text-center hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                    <CardFooter className="w-full">
                                        <Button asChild variant="outline" className="w-full gap-2 hover:bg-primary hover:text-primary-foreground group">
                                            <Link href={`/resources/${item.slug}`}>
                                                <FileText className="h-4 w-4" /> Read Guide
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
