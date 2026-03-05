"use client";

import { PageHero } from "@/components/ui/PageHero";
import { CompetitionCard } from "@/components/competitions/CompetitionCard";
import { competitions } from "@/data/competitions";

export default function CompetitionsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
            <PageHero
                title="Major"
                gradientText="Competitions"
                description="The arenas where we prove our mettle. From desert rovers to underwater autonomous vehicles."
                bgColors={{
                    top: "bg-blue-600/10",
                    bottom: "bg-cta/5",
                }}
            />

            <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10 pb-24">
                <div className="grid gap-8 md:grid-cols-2">
                    {competitions.map((comp, index) => (
                        <CompetitionCard key={comp.id} competition={comp} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
