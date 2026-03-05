"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { TeamMember } from "@/data/team";

interface MemberCardProps {
    member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Card className="overflow-hidden glass-card group relative h-full flex flex-col hover:border-primary/50 transition-all duration-300 border-primary/10">
                {/* Image Section */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                        <span className="text-6xl font-bold text-muted-foreground/30">
                            {member.name.charAt(0)}
                        </span>
                    </div>
                    {member.image && (
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}

                    {/* Social Overlay on Image */}
                    {((member.linkedin && member.linkedin !== "#") || (member.github && member.github !== "#")) && (
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-6">
                            {member.linkedin && member.linkedin !== "#" && (
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors transform hover:scale-120">
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            )}
                            {member.github && member.github !== "#" && (
                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors transform hover:scale-120">
                                    <Github className="h-6 w-6" />
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <CardContent className="p-6 flex flex-col gap-3 flex-grow bg-card/10">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-xl tracking-tight leading-tight">{member.name}</h3>
                        <p className="text-sm text-primary font-semibold uppercase tracking-wider">{member.role}</p>
                    </div>

                    {/* Role Specific Contact Info */}
                    {(member.role === "Coordinator" || member.role === "Secretary") && (
                        <div className="mt-2 pt-3 border-t border-primary/10 flex flex-col gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                                <Mail className="h-4 w-4 shrink-0" />
                                <span className="truncate">{member.email || "N/A"}</span>
                            </div>
                            {member.contact && (
                                <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                                    <Phone className="h-4 w-4 shrink-0" />
                                    <span>{member.contact}</span>
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
