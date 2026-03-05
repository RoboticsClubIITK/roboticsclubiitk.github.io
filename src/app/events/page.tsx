"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { TimelineEvent } from "@/components/events/TimelineEvent";
import { events } from "@/data/events";

export default function EventsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
            {/* AI Background Image */}
            <div className="fixed inset-0 z-0 text-center">
                <Image
                    src="/backgrounds/events-bg.png"
                    alt="Futuristic Robotics Background"
                    fill
                    className="object-cover opacity-10 grayscale-[50%]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            <PageHero
                title="Event"
                gradientText="Timeline"
                description="Follow our journey through workshops, competitions, and technical talks."
                bgColors={{
                    top: "bg-purple-500/10",
                    bottom: "bg-amber-500/10",
                    center: "bg-rose-500/10",
                }}
            />

            <div className="container px-4 md:px-8 max-w-5xl mx-auto relative z-10 pb-24">
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-rose-500/50 to-transparent md:-ml-0.5" />

                    <div className="space-y-8">
                        {events.map((event, index) => (
                            <TimelineEvent key={event.id} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
