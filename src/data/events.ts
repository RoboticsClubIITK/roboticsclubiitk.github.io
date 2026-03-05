export interface Event {
    id: number;
    title: string;
    timing: string;
    description: string;
    type: string;
}

export const events: Event[] = [
    {
        id: 1,
        title: "Robotics 101",
        timing: "August",
        description: "Explore the exciting world of robotics at IIT Kanpur’s introductory session. Enjoy an inspiring lecture, interactive Q&A, and a live demonstration of the impressive SVAN M2 Quadruped Robot in action.",
        type: "Session",
    },
    {
        id: 2,
        title: "Robotics Workshop",
        timing: "August",
        description: "As automation reshapes global industries, understanding the how behind the hardware is essential. This workshop offers a high-level overview of robotic integration in commercial sectors, from logistics to manufacturing.",
        type: "Workshop",
    },
    {
        id: 3,
        title: "RoboBreak",
        timing: "September",
        description: "Robo-break is a competition challenging four-student teams to design and build useful, innovative projects using specific sensors and actuators across presentation and implementation stages.",
        type: "Competition",
    },
    {
        id: 4,
        title: "Robodive",
        timing: "November - Januray",
        description: "Break through the theory and get your hands dirty this winter. Robodive is an intensive, mentor-led program designed to take you from a basic understanding of electronics to deploying fully autonomous systems.This isn't a lecture series—it's a mission. Over 8 weeks, you will work in small squads under the guidance of Secretaries to solve a complex robotics challenge.",
        type: "Mentorship Programme",
    },
    {
        id: 5,
        title: "Robothon",
        timing: "February - March",
        description: "Robothon is a two-stage competition by Robotics Club IITK challenging students to solve agricultural issues using robotics ideation, hardware implementation, and final project development.",
        type: "Competition",
    },
];

export const eventTypeColors: Record<string, { bg: string, text: string, border: string, hover: string }> = {
    "Session": { bg: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/20", hover: "group-hover:text-violet-500 hover:border-violet-500/50" },
    "Workshop": { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/20", hover: "group-hover:text-amber-500 hover:border-amber-500/50" },
    "Competition": { bg: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/20", hover: "group-hover:text-rose-500 hover:border-rose-500/50" },
    "Mentorship Programme": { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/20", hover: "group-hover:text-cyan-500 hover:border-cyan-500/50" },
    "default": { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20", hover: "group-hover:text-primary hover:border-primary/50" }
};
