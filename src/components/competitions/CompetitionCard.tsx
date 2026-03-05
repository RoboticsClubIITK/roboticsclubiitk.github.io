"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Competition } from "@/data/competitions";

interface CompetitionCardProps {
    competition: Competition;
    index: number;
}

export function CompetitionCard({ competition, index }: CompetitionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Card className="h-full glass-card hover:border-blue-500/50 transition-all duration-300 flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Trophy className="h-24 w-24 text-primary transform rotate-12" />
                </div>
                <CardContent className="p-8 flex flex-col gap-6 flex-1 relative z-10">
                    <div className="flex items-start justify-between">
                        <div className="flex-shrink-0 bg-gradient-to-br from-primary/20 to-blue-500/10 p-4 rounded-2xl shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
                            <Trophy className="h-8 w-8 text-primary" />
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${competition.status === "International"
                            ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                            : "bg-green-500/10 text-green-400 border-green-500/20"
                            }`}>
                            {competition.status}
                        </span>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{competition.title}</h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            {competition.description}
                        </p>
                    </div>

                    <div className="pt-4 mt-auto">
                        {competition.link ? (
                            <Button asChild variant="outline" className="w-full gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 group-hover:text-primary transition-all">
                                <a href={competition.link} target="_blank" rel="noopener noreferrer">
                                    View Details <ExternalLink className="h-4 w-4" />
                                </a>
                            </Button>
                        ) : (
                            <Button variant="outline" className="w-full gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 group-hover:text-primary transition-all cursor-not-allowed opacity-50">
                                View Details <ExternalLink className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
