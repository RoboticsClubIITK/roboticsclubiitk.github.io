"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ClientPageProps {
    galleryData: Record<string, string[]>;
}

export default function ClientPage({ galleryData }: ClientPageProps) {
    const categories = ["All", ...Object.keys(galleryData)];
    // Default to 'All' or the first available category if none
    const [filter, setFilter] = useState("All");

    // Flatten for "All" view or filter
    const displayedImages = filter === "All"
        ? Object.entries(galleryData).flatMap(([cat, imgs]) => imgs.map(img => ({ src: img, cat })))
        : galleryData[filter as keyof typeof galleryData]?.map(img => ({ src: img, cat: filter })) || [];

    return (
        <div className="flex flex-col min-h-screen bg-background py-16 md:py-24">
            <div className="container px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                        Gallery
                    </h1>
                    <p className="text-muted-foreground">Capturing moments of innovation and teamwork.</p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={filter === cat ? "default" : "outline"}
                            onClick={() => setFilter(cat)}
                            size="sm"
                            className="rounded-full"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Masonry Grid Simulation */}
                {displayedImages.length > 0 ? (
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                        {displayedImages.map((item, index) => (
                            <motion.div
                                key={`${item.src}-${index}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="break-inside-avoid relative group rounded-xl overflow-hidden bg-muted"
                            >
                                <div className="aspect-auto w-full relative">
                                    <Image
                                        src={item.src}
                                        alt={`Gallery Image - ${item.cat}`}
                                        width={600}
                                        height={800}
                                        className="w-full h-auto object-cover"
                                        priority={index < 10}
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <span className="text-white text-sm font-medium">{item.cat}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-muted-foreground">
                        <p>No photos have been uploaded to the gallery yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
