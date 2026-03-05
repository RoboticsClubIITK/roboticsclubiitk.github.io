"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import Image from "next/image";

// Mock Data for Projects
const projects = [
    {
        id: "Rover",
        title: "Rover",
        category: "Planetary Exploration",
        description:
            "A rover is an autonomous or remote-controlled vehicle designed to traverse extraterrestrial terrain. Equipped with specialized sensors and robust suspension, it explores planetary surfaces, collects vital geological samples, and searches for biological presence",
        image: "/projects/rover-f.png", // Placeholder
        techStack: ["ROS", "Electronics", "Rockerbogie", "Differential"],
        docLink: "#",
    },
    {
        id: "Hexapod",
        title: "Hexapod (6-legged robot)",
        category: "Legged Robotics",
        description:
            "A hexapod is a six-legged robot using biomimetic walking gaits for superior stability. Unlike wheeled rovers, it employs Inverse Kinematics to navigate extreme, uneven terrain by lifting and placing each leg, ensuring constant static balance.",
        image: "/projects/Hexapod.png", // Placeholder
        techStack: ["Controller", "PID", "Inverse Kinematics", "Servo"],
        docLink: "https://github.com/RoboticsClubIITK/Hexapod_Summer_Project_2025",
    },
    {
        id: "Turk",
        title: "Mechanical Turk",
        category: "Chess Playing Robot",
        description:
            "The Mechanical Turk at the IITK Robotics Club is an autonomous chess-playing robot. It uses Computer Vision to detect opponent moves, a chess engine for strategy, and a 2-DOF robotic arm with an electromagnet to physically move the pieces.",
        image: "/projects/Turk.png", // Placeholder
        techStack: ["Mechanical Design", "Computer Vision", "Inverse Kinematics"],
        docLink: "#",
        githubLink: "https://github.com/UwUBabushkaUwU/Mechanical-Turk",
    },
    {
        id: "BallBot",
        title: "Ball Balancing Bot",
        category: "Playing Robot",
        description:
            "A Ball Balancing Bot is a dynamically stable robot that maintains its center of gravity over a single spherical wheel. Using omni-wheels and high-speed IMU feedback, it performs continuous micro-adjustments to remain upright, offering 360-degree maneuverability in tight spaces.",
        image: "/projects/ball.png", // Placeholder
        techStack: ["Control Theory", "IMU", "PID", "Omni-wheels"],
        docLink: "#",
        githubLink: "#",
    },
    {
        id: "Step",
        title: "StepXplorer",
        category: "Stairs climbing bot",
        description:
            "StepXplorer is an autonomous stair-climbing robot at the IITK Robotics Club. It uses ultrasonic sensors for distance-based stair detection and stepper motors for high-precision motion control, ensuring stable ascent and real-time failure recovery during vertical transitions.",
        image: "/projects/StepClimbing.png", // Placeholder
        techStack: ["BNO055", "Utlrasonic Sensors", "PID", "Stepper Motors", "Mega 2560"],
        docLink: "https://github.com/RoboticsClubIITK/StepXplorer-Summer-Project-2025-",
        githubLink: "#",
    },
    {
        id: "GyroBot",
        title: "GyroBot",
        category: "Self Balancing Robot",
        description:
            "A Gyrobot is a self-balancing robot that maintains its upright posture using gyroscopic precession. Unlike common two-wheeled balancers, it often uses an internal high-speed flywheel to generate a corrective torque, allowing it to remain stable even when completely stationary.",
        image: "/projects/Gyrobot.png", // Placeholder
        techStack: ["BNO055", "IMU", "PID", "LQR", "Teensy"],
        docLink: "https://github.com/RoboticsClubIITK/Gyrobot",
        githubLink: "#",
    },
];

// Helper to determine badge color based on tech name length (deterministic)
const getBadgeColor = (tech: string) => {
    const colors = [
        "bg-blue-500/10 text-blue-500 border-blue-500/20",
        "bg-green-500/10 text-green-500 border-green-500/20",
        "bg-purple-500/10 text-purple-500 border-purple-500/20",
        "bg-orange-500/10 text-orange-500 border-orange-500/20",
        "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
        "bg-pink-500/10 text-pink-500 border-pink-500/20",
    ];
    return colors[tech.length % colors.length];
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background py-16 md:py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-pan-bg bg-[length:200%_auto]">Projects</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore the cutting-edge robotic systems built by students under the mentorship of Robotics Club IITK.
                    </p>
                </div>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                        >
                            <Card className="group overflow-hidden glass-card hover:border-primary/50 transition-all duration-300">
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row gap-0">
                                        {/* Text Section */}
                                        <div className="flex-1 p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
                                            <div className="mb-6">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary shadow-sm">
                                                        {project.category}
                                                    </span>
                                                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                                                </div>
                                                <h2 className="text-2xl font-bold md:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70 group-hover:to-primary transition-colors duration-300">
                                                    {project.title}
                                                </h2>
                                            </div>

                                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold ${getBadgeColor(tech)} transition-transform hover:scale-105`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-4 mt-auto">
                                                <Button className="gap-2 bg-cta text-cta-foreground hover:bg-cta/90 border-none shadow-md shadow-cta/10 transition-all hover:translate-y-[-2px]" asChild>
                                                    <a href={project.docLink} target="_blank" rel="noopener noreferrer">
                                                        <FileText className="h-4 w-4" /> Documentation
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Image Section */}
                                        <div className="w-full md:w-2/5 xl:w-2/5 order-1 md:order-2 relative aspect-[16/10] md:aspect-auto overflow-hidden bg-muted/30">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                            />
                                            {/* Overlay Gradient on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
