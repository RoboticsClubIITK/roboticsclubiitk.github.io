"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Event, eventTypeColors } from "@/data/events";

interface TimelineEventProps {
    event: Event;
    index: number;
}

export function TimelineEvent({ event, index }: TimelineEventProps) {
    const colors = eventTypeColors[event.type] || eventTypeColors["default"];

    return (
        <motion.div
            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
        >
            {/* Timeline Dot */}
            <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-background border-2 rounded-full z-10 -translate-x-1.5 md:-translate-x-2 mt-6 ${colors.border.replace('/20', '')}`}>
                <div className={`absolute inset-0 rounded-full animate-ping ${colors.bg}`} />
            </div>

            {/* Content Card */}
            <div className="flex-1 ml-12 md:ml-0">
                <Card className={`glass-card transition-all duration-300 group relative overflow-hidden ${colors.hover.split(' ')[1]}`}>
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Calendar className={`h-16 w-16 transform rotate-12 ${colors.text}`} />
                    </div>

                    <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border max-w-fit ${colors.bg} ${colors.text} ${colors.border}`}>
                                {event.type}
                            </span>
                            <div className="flex items-center text-sm font-semibold text-accent">
                                <Clock className="mr-1.5 h-4 w-4" />
                                {event.timing}
                            </div>
                        </div>
                        <CardTitle className={`text-xl font-bold transition-colors ${colors.hover.split(' ')[0]}`}>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4">
                        <CardDescription className="text-sm text-foreground/80 leading-relaxed">
                            {event.description}
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>

            <div className="hidden md:block flex-1" />
        </motion.div>
    );
}
