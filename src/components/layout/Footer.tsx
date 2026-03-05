import Link from "next/link";
import Image from "next/image";
import { Bot, Github, Linkedin, Instagram, Mail, MapPin, Youtube } from "lucide-react";


export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background text-foreground overflow-hidden">
            {/* Top Section with Pattern */}
            <div className="relative border-b border-white/5">
                {/* Wavy Lines SVG Pattern */}
                <div
                    className="absolute inset-0 z-0 opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='40' viewBox='0 0 160 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q 40 0 80 20 T 160 20' fill='none' stroke='%23334155' stroke-width='2'/%3E%3Cpath d='M0 30 Q 40 10 80 30 T 160 30' fill='none' stroke='%23334155' stroke-width='1.5'/%3E%3Cpath d='M0 10 Q 40 -10 80 10 T 160 10' fill='none' stroke='%23334155' stroke-width='1.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '160px 40px',
                        backgroundRepeat: 'repeat'
                    }}
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

                <div className="container relative z-10 flex flex-col gap-8 py-8 md:py-12 px-4 md:px-8 max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div className="flex flex-col gap-2">
                            <Link className="flex items-center space-x-2" href="/">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={300}
                                    height={300}
                                    quality={100}
                                    className="h-10 w-auto object-contain"
                                />
                            </Link>
                            <p className="text-lg text-muted-foreground max-w-sm">
                                #HappyRoboting
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-xl text-foreground">Contact</h3>
                            <div className="flex items-center gap-4 text-lg text-muted-foreground">
                                <Mail className="h-6 w-6 text-primary" />
                                <a href="mailto:roboticsclubiitkanpur@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">roboticsclubiitkanpur@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-4 text-lg text-muted-foreground">
                                <MapPin className="h-6 w-6 text-primary" />
                                <span>A3 Common Room, Hall 12, IIT Kanpur</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-xl text-foreground">Follow Us</h3>
                            <div className="grid grid-cols-3 gap-6 max-w-fit">
                                <Link href="https://github.com/RoboticsClubIITK" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                                    <Github className="h-8 w-8" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link href="https://www.linkedin.com/company/robotics-club-iit-kanpur/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                                    <Linkedin className="h-8 w-8" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                                <Link href="https://www.instagram.com/roboticsclub_iitk/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                                    <Instagram className="h-8 w-8" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                                <Link href="https://www.youtube.com/c/RoboticsClubIITKanpur" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                                    <Youtube className="h-8 w-8" />
                                    <span className="sr-only">YouTube</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar (No Pattern) */}
            <div className="bg-background/80 py-8">
                <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Robotics Club IIT Kanpur. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
