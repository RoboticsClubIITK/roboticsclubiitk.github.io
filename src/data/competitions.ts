export interface Competition {
    id: string;
    title: string;
    description: string;
    status: "International" | "National";
    link?: string;
}

export const competitions: Competition[] = [
    {
        id: "irc",
        title: "International Rover Challenge",
        description: "An engineering design challenge to build a next-generation Mars rover. We push the boundaries of robotics in rough terrains.",
        status: "International",
        link: "/irc",
    },
    {
        id: "wrc",
        title: "World Robotics Competition",
        description: "A global robotics championship where teams tackle challenging problem statements and showcase cutting-edge automation capabilities.",
        status: "International",
    },
    {
        id: "sih",
        title: "Smart India Hackathon",
        description: "A nationwide initiative to provide students a platform to solve pressing problems in our daily lives, using hardware and tech solutions.",
        status: "National",
        link: "https://sih.gov.in/",
    },
    {
        id: "robofest",
        title: "Robofest",
        description: "An annual international robotics challenge focusing on autonomous robotics technologies to inspire students in STEM.",
        status: "International",
        link: "https://robofest.gujarat.gov.in/Robofest/RoboCategory",
    },
];
