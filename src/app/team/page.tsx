"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

// Mock Data
const faculty = [
    {
        name: "Prof. Abhilash Patel",
        role: "Faculty Advisor",
        image: "/Team/AbhilashPatel.png",
        linkedin: "https://www.linkedin.com/company/dynamics-and-control-laboratory/",
    },
];

const coordinators = [
    {
        name: "Vishnu Sarathy",
        role: "Coordinator",
        image: "/Team/Vishnu Sarathy.jpg",
        linkedin: "https://www.linkedin.com/in/vishnu-sarathy-071255371/?originalSubdomain=in",
        github: "https://github.com/VishnuSarathy",
        email: "vishnusb24@iitk.ac.in",
        contact: "+91 9500728429",
    },
    {
        name: "Rudraksh Kumawat",
        role: "Coordinator",
        image: "/Team/Rudraksh Kumawat.jpeg",
        linkedin: "https://www.linkedin.com/in/rudraksh-kumawat-04165431b/",
        github: "https://github.com/Rudraksh919",
        email: "rudrakshk24@iitk.ac.in",
        contact: "+91 8306821003",
    },
    {
        name: "Anurag Patil",
        role: "Coordinator",
        image: "/Team/Anurag Patil.jpeg",
        linkedin: "https://www.linkedin.com/in/anurag-rameshgouda-patil-96570b314/",
        github: "https://github.com/AnuragPatil24",
        email: "anuragrp24@iitk.ac.in",
        contact: "+91 70191 34056",
    },
    {
        name: "Harsh Chandwani",
        role: "Coordinator",
        image: "/Team/Harsh Chandwani.jpeg",
        linkedin: "#",
        github: "#",
        email: "charsh24@iitk.ac.in",
        contact: "+91 82510 23339",
    },
];

const secretaries = [
    { name: "Atharv Mishra", role: "Secretary", image: "/Team/Atharv Mishra.jpg", linkedin: "https://linkedin.com/in/atharvm54", github: "https://GitHub.com/matharv07", email: "atharvm25@iitk.ac.in" },
    { name: "Aarush Bhatt", role: "Secretary", image: "/Team/Aarush Bhatt.jpeg", linkedin: "https://www.linkedin.com/in/aarush-bhatt-30216b1ba", github: "https://github.com/aarush2111bhatt-cpu", email: "aarushb25@iitk.ac.in" },
    { name: "Puspa Kumari", role: "Secretary", image: "/Team/Puspa Kumari.jpeg", linkedin: "https://www.linkedin.com/in/puspa-kumari-57471b419/", github: "https://github.com/PiaHans", email: "puspak25@iitk.ac.in" },
    { name: "Sai Krish", role: "Secretary", image: "/Team/Sai Krish.jpeg", linkedin: "https://www.linkedin.com/in/saikrish-k-7b6000380/", github: "https://github.com/saikrishkailash21-del", email: "saikk25@iitk.ac.in" },
    { name: "Prateek", role: "Secretary", image: "/Team/Prateek.jpg", linkedin: "https://www.linkedin.com/in/prateek-3921bb344?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "https://github.com/Prtkx25", email: "prateek25@iitk.ac.in" },
    { name: "Pranjali Singh", role: "Secretary", image: "/Team/Pranjali Singh.jpeg", linkedin: "https://www.linkedin.com/in/pranjali-singh-859aa63a0?utm_source=share_via&utm_content=profile&utm_medium=member_ios", github: "https://github.com/pazgungpj-hub", email: "pazgungpj@gmail.com" },
    { name: "Dev Choudhary", role: "Secretary", image: "/Team/Dev Choudhary.jpeg", linkedin: "https://www.linkedin.com/in/dev-choudhary-7435283a0", github: "https://github.com/devchoudhary0506", email: "devch25@iitk.ac.in" },
    { name: "Ameeth Kulkarni", role: "Secretary", image: "/Team/Ameeth Kulkarni.jpg", linkedin: "https://www.linkedin.com/in/ameeth-kulkarni-bb61a43a5", github: "https://github.com/AmeethKulkarni", email: "ameetk25@iitk.ac.in" },
    { name: "Pankaj Meena", role: "Secretary", image: "/Team/Pankaj Meena.jpg", linkedin: "#", github: "https://github.com/pankaj-iitk", email: "pankajm25@iitk.ac.in" },
    { name: "Arsh Khan", role: "Secretary", image: "/Team/Arsh Khan.jpg", linkedin: "https://www.linkedin.com/in/arsh-khan-8598a93b7/", github: "https://github.com/arsh-iitk", email: "arshkhan25@iitk.ac.in" },
    { name: "Manish Parmar", role: "Secretary", image: "/Team/Manish Parmar.png", linkedin: "https://www.linkedin.com/in/manish-parmar-2a103a37a/", github: "https://github.com/manishparmariitk-droid", email: "pmanish25@iitk.ac.in" },
    { name: "Om Erandole", role: "Secretary", image: "/Team/Om Erandole.jpeg", linkedin: "https://www.linkedin.com/in/om-erandole-67521b380/", github: "https://github.com/omerandoledp-tech", email: "erandole25@iitk.ac.in" },
    { name: "Niharika", role: "Secretary", image: "/Team/pathri niharika.jpg", linkedin: "#", github: "https://github.com/pathriniharika13-ship-it", email: "pathrin25@iitk.ac.in" },
    { name: "Yashwant", role: "Secretary", image: "/Team/Yashwant Soni.png", linkedin: "https://www.linkedin.com/in/yashwant-soni-68b8b4376", github: "https://github.com/yashwantsoni3906-bit", email: "Yashwantsoni25@iitk.ac.in" },
    { name: "Akshay Biju B N", role: "Secretary", image: "/Team/Akshay Biju.jpeg", linkedin: "https://www.linkedin.com/in/akshay-biju-bn/", github: "https://github.com/akshay-biju-bn", email: "akshayb25@iitk.ac.in" },
    { name: "Aryan Deshpande", role: "Secretary", image: "/Team/Aryan Deshpande.png", linkedin: "https://www.linkedin.com/in/aryan-deshpande-9b0672377", github: "https://github.com/aryand079", email: "aryanatuld25@iitk.ac.in" },
    { name: "Anshruta Das", role: "Secretary", image: "/Team/Anshruta Das.jpg", linkedin: "#", github: "#", email: "anshrutad25@iitk.ac.in" },
    { name: "Saanvi Singh", role: "Secretary", image: "/Team/Saanvi Singh.jpg", linkedin: "#", github: "https://github.com/singhsaanvi019", email: "saanvisingh25@iitk.ac.in" },
    { name: "Ch Uday Adithya", role: "Secretary", image: "/Team/Uday Adithya.jpeg", linkedin: "https://www.linkedin.com/in/uday-adithya-chintapalli-164333386", github: "https://github.com/ua82-byte", email: "adithyauc25@iitk.ac.in" },
    { name: "Durgesh Vyas", role: "Secretary", image: "/Team/Durgesh Vyas.jpg", linkedin: "https://www.linkedin.com/in/durgesh-vyas-7bb079379", github: "https://github.com/durgeshbkn2024-stack", email: "durgeshkv25@iitk.ac.in" },
    { name: "Dhruvjyoti Deb", role: "Secretary", image: "/Team/Dhruvjyoti Deb.jpeg", linkedin: "https://www.linkedin.com/in/dhruvjyoti-deb-50209b388/", github: "https://github.com/DhruvjyotiDeb", email: "dhruvjyotind25@iitk.ac.in" },
    { name: "Priyanka Kumari", role: "Secretary", image: "/Team/Priyanka Kumari.jpeg",linkedin: "#", github: "https://github.com/Priyanka-debug123", email: "priyankak25@iitk.ac.in" },
    { name: "Krishna Kumar Sharma", role: "Secretary", image: "/Team/Krishna Kumar Sharma.PNG", linkedin: "#", github: "https://github.com/sharmakks02", email: "krishnaks25@iitk.ac.in" },
    { name: "Utkarsh Gupta", role: "Secretary", image: "/Team/Utkarsh Gupta.jpg", linkedin: "https://www.linkedin.com/in/utkarsh-gupta-a82080416?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "https://github.com/gutkarsh25", email: "gutkarsh25@iitk.ac.in" },
    { name: "Nishant Dawale", role: "Secretary", image: "/Team/Nishant Dawale.jpg", linkedin: "https://www.linkedin.com/in/nishant-dawale-671571250/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9OPQSV5ATCmNWNCr6xMWeg%3D%3D", github: "https://github.com/dawalenishant-cool-one", email: "dnishant25@iitk.ac.in" },
    { name: "Nikhil Kunwar", role: "Secretary", image: "/Team/Nikhilkumar Kunwar.jpg", linkedin: "https://www.linkedin.com/in/nikhilkumar-kunwar-1679b0392?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "https://github.com/xpyaracetamole", email: "nnkunwar25@iitk.ac.in" },
    { name: "Tanmay Bardia", role: "Secretary", image: "/Team/Tanmay Bardia.jpg", linkedin: "#", github: "https://github.com/tanmaybardia", email: "banmay25@iitk.ac.in" },
    { name: "Krishna Sharma", role: "Secretary", image: "/Team/Krishna Sharma.jpeg", linkedin: "https://www.linkedin.com/in/krishna-sharma-undefined-375261403?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "https://github.com/ksharma999", email: "ksharma25@iitk.ac.in" },
    { name: "Jayant Kumar", role: "Secretary", image: "/Team/Jayant Kumar.jpeg", linkedin: "https://www.linkedin.com/in/jayant-kumar-57a9433a4/", github: "https://github.com/Jayant-kmr25", email: "jayantkmr25@iitk.ac.in" },
    { name: "Arjun Kori", role: "Secretary", image: "/Team/Arjun Kori.webp", linkedin: "#", github: "https://github.com/Arjunkori190", email: "arjunk25@iitk.ac.in" },
    { name: "Konark J Shah", role: "Secretary", image: "/Team/Konark Shah.jpg", linkedin: "https://www.linkedin.com/in/konark-shah-734211352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "https://github.com/konarkshah", email: "konarkjs25@iitk.ac.in" },
    { name: "Sarwesh Barnwal", role: "Secretary", image: "/Team/Sarwesh Barnwal.jpg", linkedin: "https://www.linkedin.com/in/sarwesh-barnwal-5ab4ba3b6?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "https://github.com/sarweshbarnwal", email: "sarweshb25@iitk.ac.in" },
];

const MemberCard = ({ member }: { member: any }) => (
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

export default function TeamPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background py-16 md:py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
                        Meet the <span className="text-primary">Team</span>
                    </h1>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                        The brilliant minds behind the machines. Innovators, builders, and dreamers.
                    </p>
                </div>

                {/* Faculty Section */}
                <section className="mb-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-px w-12 bg-primary/30" />
                        <h2 className="text-2xl font-bold text-center text-foreground/80 uppercase tracking-widest">
                            Faculty Advisor
                        </h2>
                        <div className="h-px w-12 bg-primary/30" />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-[280px]">
                            {faculty.map((member) => (
                                <MemberCard key={member.name} member={member} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Coordinators Section */}
                <section className="mb-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-px w-12 bg-primary/30" />
                        <h2 className="text-2xl font-bold text-center text-foreground/80 uppercase tracking-widest">
                            Coordinators
                        </h2>
                        <div className="h-px w-12 bg-primary/30" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                        {coordinators.map((member) => (
                            <MemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </section>

                {/* Secretaries Section */}
                <section>
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-px w-12 bg-primary/30" />
                        <h2 className="text-2xl font-bold text-center text-foreground/80 uppercase tracking-widest">
                            Secretaries
                        </h2>
                        <div className="h-px w-12 bg-primary/30" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {secretaries.map((member, i) => (
                            <MemberCard key={i} member={member} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
