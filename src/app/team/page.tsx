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
        name: "Shivansh Gupta",
        role: "Coordinator",
        image: "/Team/Shivansh.jpeg",
        linkedin: "https://www.linkedin.com/in/shivansh-gupta-5a4870285",
        github: "https://github.com/Shivansh-gupta2005",
        email: "shivanshg23@iitk.ac.in",
        contact: "+91 6388630380"
    },
    {
        name: "Chinar Mhatre",
        role: "Coordinator",
        image: "/Team/Chinar.jpg",
        linkedin: "https://www.linkedin.com/in/chinar-mhatre-a03b03244/",
        github: "https://github.com/UwUBabushkaUwU/",
        email: "chinarrm23@iitk.ac.in",
        contact: "+91 8108472590"
    },
    {
        name: "Ridhima Sharma",
        role: "Coordinator",
        image: "/Team/Ridhima.jpg",
        linkedin: "#",
        github: "https://github.com/Ridhima-Sharma-2005",
        email: "ridhimas23@iitk.ac.in",
        contact: "+91 8979379101"
    },
    {
        name: "Soumyajit Halder",
        role: "Coordinator",
        image: "/Team/Soumyajit.jpeg",
        linkedin: "https://www.linkedin.com/in/soumyajit-halder-92ba00287/",
        github: "https://github.com/Soumyajith23",
        email: "soumyajith714@gmail.com",
        contact: "+91 8597653788"
    },
];

const secretaries = [
    { name: "Vishnu Sarathy", role: "Secretary", image: "/Team/Vishnu Sarathy.jpg", linkedin: "https://www.linkedin.com/in/vishnu-sarathy-071255371/?originalSubdomain=in", github: "https://github.com/VishnuSarathy", email: "vishnusb24@iitk.ac.in" },
    { name: "Rudraksh", role: "Secretary", image: "/Team/Rudraksh.jpeg", linkedin: "https://www.linkedin.com/in/rudraksh-kumawat-04165431b/", github: "https://github.com/Rudraksh919", email: "rudrakshk24@iitk.ac.in" },
    { name: "Anurag Patil", role: "Secretary", image: "/Team/Anurag Patil.jpeg", linkedin: "https://www.linkedin.com/in/anurag-rameshgouda-patil-96570b314/", github: "https://github.com/AnuragPatil24", email: "anuragrp24@iitk.ac.in" },
    { name: "Harsh Chandwani", role: "Secretary", image: "/Team/Harsh Chandwani.jpeg", linkedin: "#", github: "#", email: "charsh24@iitk.ac.in" },
    { name: "Arnav Gupta", role: "Secretary", image: "/Team/Arnav Gupta.jpeg", linkedin: "https://www.linkedin.com/in/arnav-gupta-b0b3b7323/", github: "https://github.com/Arnav526", email: "arnavu24@iitk.ac.in" },
    { name: "Sushil Krishna K.", role: "Secretary", image: "/Team/Sushil Krishna K.jpg", linkedin: "#", github: "#", email: "sushilk24@iitk.ac.in" },
    { name: "Pari Singla", role: "Secretary", image: "/Team/Pari Singla.png", linkedin: "https://in.linkedin.com/in/pari-singla-372619327", github: "#", email: "parisingla24@iitk.ac.in" },
    { name: "Adithya Vishnu", role: "Secretary", image: "/Team/Adithya_Vishnu.jpg", linkedin: "https://www.linkedin.com/in/adithya-vishnu-874737211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", github: "https://github.com/Adithya-Vishnu", email: "adithyav24@iitk.ac.in" },
    { name: "Manant Singhal", role: "Secretary", image: "/Team/Manant Singhal.jpg", linkedin: "https://www.linkedin.com/in/manant-singhal-91592a320/", github: "https://github.com/Manant1234", email: "msinghal24@iitk.ac.in" },
    { name: "M. Vivekananda", role: "Secretary", image: "/Team/M.Vivekananda.jpg", linkedin: "#", github: "#", email: "#" },
    { name: "Naivedya Jain", role: "Secretary", image: "/Team/Naivedya Jain.jpg", linkedin: "https://www.linkedin.com/in/naivedya-jain-9621b5319/", github: "https://github.com/naivedyajain3009", email: "naivedyaj24@iitk.ac.in" },
    { name: "Aradhya Goel", role: "Secretary", image: "/Team/Aradhya Goel.jpg", linkedin: "#", github: "https://github.com/aradhyagnov", email: "aradhyag24@iitk.ac.in" },
    { name: "Ayush Dwivedi", role: "Secretary", image: "/Team/AyushDwivedi.jpg", linkedin: "https://www.linkedin.com/in/linkedin.com/in/ayush-dwivedi186", github: "https://github.com/github.com/TF-141-0", email: "ayushd24@iitk.ac.in" },
    { name: "Devyani Singh", role: "Secretary", image: "/Team/Devyani Singh.jpeg", linkedin: "https://www.linkedin.com/in/devyani-singh-01108236b/", github: "https://github.com/devyanids", email: "devyanis24@iitk.ac.in" },
    { name: "Dibyanshu Das", role: "Secretary", image: "/Team/Dibyanshu Das.jpg", linkedin: "https://www.linkedin.com/in/dibyanshu-das-75674631b", github: "https://github.com/TimePass133", email: "dibyanshud24@iitk.ac.in" },
    { name: "Ishwin Kumar", role: "Secretary", image: "/Team/Ishwin kumar.jpg", linkedin: "#", github: "https://github.com/Ironwin-15", email: "ishwink24@iitk.ac.in" },
    { name: "Karan Chauhan", role: "Secretary", image: "/Team/Karan Chauhan.jpg", linkedin: "https://www.linkedin.com/in/karan-chauhan-217a8a311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "https://github.com/kc-debug", email: "karanc24@iitk.ac.in" },
    { name: "Kaushik Kumar", role: "Secretary", image: "/Team/Kaushik Kumar.jpg", linkedin: "https://in.linkedin.com/in/kaushik-kumar-3844aa314", github: "#", email: "kaushik24@iitk.ac.in" },
    { name: "Kushal Jain", role: "Secretary", image: "/Team/Kushal Jain.jpg", linkedin: "https://www.linkedin.com/in/kushal-jain-534844320/", github: "https://github.com/Kushaljain213", email: "kushaljain24@iitk.ac.in" },
    { name: "Manish Kajla", role: "Secretary", image: "/Team/Manish kajla.jpg", linkedin: "https://www.linkedin.com/in/manish-kajla-1315672b5/", github: "https://github.com/kajlaM", email: "mkajla24@iitk.ac.in" },
    { name: "Mayukh Chowdhury", role: "Secretary", image: "/Team/Mayukh Chowdhury.jpg", linkedin: "https://www.linkedin.com/in/mayukh-chowdhury-6b8180358", github: "#", email: "cmayukh24@iitk.ac.in" },
    { name: "Medini", role: "Secretary", image: "/Team/Medini.jpg", linkedin: "https://www.linkedin.com/in/medini-mudraboina-2b8291314/", github: "https://github.com/medini20", email: "medinim24@iitk.ac.in" },
    { name: "Mukund Advaith", role: "Secretary", image: "/Team/Mukund Advaith.jpg", linkedin: "https://www.linkedin.com/in/mukund-advaith-balaji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", github: "https://github.com/advaithmukund24", email: "mukund@iitk.ac.in" },
    { name: "Nandini Yadav", role: "Secretary", image: "/Team/Nandini Yadav.jpg", linkedin: "https://www.linkedin.com/in/nandini-yadav-ba0617289", github: "#", email: "nandiniy24@iitk.ac.in" },
    { name: "Swastik Bhardwaj", role: "Secretary", image: "/Team/Swastik Bhardwaj.jpg", linkedin: "#", github: "https://github.com/swastik-git-bit", email: "swastikb24@iitk.ac.in" },
    { name: "Vaibhav", role: "Secretary", image: "/Team/Vaibhav.jpg", linkedin: "https://www.linkedin.com/in/vaibhav-gupta-53a3b9325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "#", email: "kvaibhav24@iitk.ac.in" },
    { name: "Varshini Ridikka S K.", role: "Secretary", image: "/Team/Varshini Ridikka S K.jpg", linkedin: "#", github: "#", email: "#" },
    { name: "Virendrakala", role: "Secretary", image: "/Team/Virendrakala.jpg", linkedin: "https://www.linkedin.com/in/virendra-kala-39b784317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "https://github.com/virendrakala", email: "virendrak24@iitk.ac.in" },
    { name: "Anushka Chaurasia", role: "Secretary", image: "/Team/Anushka Chaurasia.jpeg", linkedin: "#", github: "https://github.com/anushka-2201", email: "anushkac24@iitk.ac.in" },
    { name: "Yash Vardhan Pratihast", role: "Secretary", image: "/Team/Yash Vardhan Pratihast.jpg", linkedin: "https://www.linkedin.com/in/yash-vardhan-pratihast-55b1b3331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "https://github.com/YashVardhanPratihast", email: "#" },
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
