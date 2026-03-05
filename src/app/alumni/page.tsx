"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const alumniData = {
    "2024-25": [
        { name: "Aayush Jaiswal", role: "Coordinator", image: "/Alumni/2024 - 25/Aayush Jaiswal.jpeg", linkedin: "https://www.linkedin.com/in/aayush-jaiswal-431b34223/" },
        { name: "Manvi Bengani", role: "Coordinator", image: "/Alumni/2024 - 25/manvi Bengani.jpg", linkedin: "https://www.linkedin.com/in/manvi-bengani-7397641b0/" },
        { name: "Yuval Bansal", role: "Coordinator", image: "/Alumni/2024 - 25/Yuval Bansal.jpg", linkedin: "https://www.linkedin.com/in/yuval-bansal-01465b212/" }
    ],
    "2023-24": [
        { name: "Aniket Sen", role: "Coordinator", image: "/Alumni/2023 -24/Aniket Sen.jpg", linkedin: "https://www.linkedin.com/mwlite/in/aniketsen001" },
        { name: "Aryan Kumar", role: "Coordinator", image: "/Alumni/2023 -24/Aryan Kumar.jpg", linkedin: "https://www.linkedin.com/in/aryan-kumar-524b20257" },
        { name: "Om Shivam Verma", role: "Coordinator", image: "/Alumni/2023 -24/Om Shivam Verma.jpeg", linkedin: "https://www.linkedin.com/in/om-shivam-verma-5b5092230/" },
        { name: "Shaurya Singh", role: "Coordinator", image: "/Alumni/2023 -24/Shaurya Singh.jpeg", linkedin: "https://www.linkedin.com/in/shaurya-singh-b44457199" }
    ],
    "2022-23": [
        { name: "Akshat Arya", role: "Coordinator", image: "/Alumni/2022 - 23/Akshat Arya.jpg", linkedin: "https://www.linkedin.com/in/akshat-arya-4b0318202/" },
        { name: "Arnav Panday", role: "Coordinator", image: "/Alumni/2022 - 23/Arnav Panday.jpg", linkedin: "#" },
        { name: "Aryan Jain", role: "Coordinator", image: "/Alumni/2022 - 23/Aryan Jain.jpg", linkedin: "https://www.linkedin.com/in/aryan-jain-1908/" },
        { name: "Suhani", role: "Coordinator", image: "/Alumni/2022 - 23/Suhani.jpg", linkedin: "https://www.linkedin.com/in/suhani-sharma-39a0591b3" }
    ],
    "2021-22": [
        { name: "Adit Khokar", role: "Coordinator", image: "/Alumni/2021 - 22/adit Khokar.jpg", linkedin: "#" },
        { name: "Azhar Tanweer", role: "Coordinator", image: "/Alumni/2021 - 22/azhar Tanweer.jpg", linkedin: "#" },
        { name: "Jaagrati Jain", role: "Coordinator", image: "/Alumni/2021 - 22/jaagrati Jain.jpg", linkedin: "#" },
        { name: "Prateek Jain", role: "Coordinator", image: "/Alumni/2021 - 22/prateek Jain.jpg", linkedin: "#" }
    ],
    "2020-21": [
        { name: "Prakash Choudhary", role: "Coordinator", image: "/Alumni/2020 -21/prakash.jpg", linkedin: "#" },
        { name: "Ramyata Pate", role: "Coordinator", image: "/Alumni/2020 -21/ramyata Pate.jpg", linkedin: "#" },
        { name: "Suman Singha", role: "Coordinator", image: "/Alumni/2020 -21/suman Singha.jpg", linkedin: "#" }
    ],
    "2019-20": [
        { name: "Abhay Varshney", role: "Coordinator", image: "/Alumni/2019-20/abhay Varshney.jpg", linkedin: "#" },
        { name: "Madhur Deep Jain", role: "Coordinator", image: "/Alumni/2019-20/madhur Deep Jain.jpg", linkedin: "#" },
        { name: "Neil Shirude", role: "Coordinator", image: "/Alumni/2019-20/Neil Shirude.jpg", linkedin: "#" }
    ],
    "2018-19": [
        { name: "Ayush Singh", role: "Coordinator", image: "/Alumni/2018 - 19/ayush Singh.png", linkedin: "#" },
        { name: "Manas Rawat", role: "Coordinator", image: "/Alumni/2018 - 19/manas Rawat.png", linkedin: "#" },
        { name: "Maneet Kaur", role: "Coordinator", image: "/Alumni/2018 - 19/maneet Kaur.jpg", linkedin: "#" },
        { name: "Suraj Mishra", role: "Coordinator", image: "/Alumni/2018 - 19/Suraj Mishra.jpg", linkedin: "#" }
    ],
    "2017-18": [
        { name: "Akash Jain", role: "Coordinator", image: "/Alumni/2017 - 18/Akash Jain.jpg", linkedin: "#" },
        { name: "Bhuvi Gupta", role: "Coordinator", image: "/Alumni/2017 - 18/Bhuvi Gupta.jpg", linkedin: "#" },
        { name: "Saurabh Ranjan", role: "Coordinator", image: "/Alumni/2017 - 18/Saurabh Ranjan.jpg", linkedin: "#" },
        { name: "Ujjwal Varshney", role: "Coordinator", image: "/Alumni/2017 - 18/Ujjwal Varshney.jpg", linkedin: "#" }
    ],
    "2016-17": [
        { name: "Ankit Kumar", role: "Coordinator", image: "/Alumni/2016 - 17/Ankit Kumar.jpg", linkedin: "#" },
        { name: "Anvesh Jadon", role: "Coordinator", image: "/Alumni/2016 - 17/Anvesh Jadon.jpeg", linkedin: "#" },
        { name: "Hemant Kumar", role: "Coordinator", image: "/Alumni/2016 - 17/Hemant Kumar.jpg", linkedin: "#" },
        { name: "Mayank Mittal", role: "Coordinator", image: "/Alumni/2016 - 17/Mayank Mittal.jpg", linkedin: "#" },

    ],
    "2015-16": [
        { name: "Aakash Gupta", role: "Coordinator", image: "/Alumni/2015 - 16/Aakash Gupta.jpg", linkedin: "#" },
        { name: "Amit Saharan", role: "Coordinator", image: "/Alumni/2015 - 16/Amit Saharan.jpeg", linkedin: "#" },
        { name: "Ayush Poddar", role: "Coordinator", image: "/Alumni/2015 - 16/Ayush Poddar.jpg", linkedin: "#" },
        { name: "Prashant Kumar", role: "Coordinator", image: "/Alumni/2015 - 16/Prashant Kumar.jpg", linkedin: "#" }
    ]
};

const AlumniCard = ({ member }: { member: any }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Card className="group relative overflow-hidden flex flex-col items-center bg-card/60 hover:bg-card/80 transition-all duration-500 border-border/40 hover:border-primary/50 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-primary/10">
                {/* Image Section */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted/20">
                    {!imgError ? (
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                            <span className="text-6xl text-primary/40 font-bold">{member.name.charAt(0)}</span>
                        </div>
                    )}

                    {/* Social Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 mt-auto mb-4">
                            {member.linkedin !== "#" && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 rounded-full bg-primary/80 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors hover:scale-110"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <CardContent className="w-full p-4 text-center z-10 bg-gradient-to-t from-card via-card to-card/90">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">
                        {member.role}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default function AlumniPage() {
    const [selectedYear, setSelectedYear] = useState("2024-25");
    const years = Object.keys(alumniData);

    return (
        <div className="flex flex-col min-h-screen bg-background py-16 md:py-24">
            <div className="container px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Alumni Network</h1>
                    <p className="text-muted-foreground">
                        Honoring the past leaders who built the foundation.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Year Sidebar */}
                    <div className="w-full md:w-64 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 shrink-0">
                        {years.map((year) => (
                            <Button
                                key={year}
                                variant={selectedYear === year ? "default" : "outline"}
                                onClick={() => setSelectedYear(year)}
                                className="justify-start w-full"
                            >
                                <Calendar className="mr-2 h-4 w-4" /> {year}
                            </Button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-border/50">
                            Class of {selectedYear}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {alumniData[selectedYear as keyof typeof alumniData]?.map((member, i) => (
                                <AlumniCard key={i} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
