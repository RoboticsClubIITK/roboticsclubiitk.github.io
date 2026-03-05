"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Globe, Users, Settings, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const backgroundImages = [
  "/diwali.jpeg", // Diwali Celebration
  "/session.jpeg", // Club Session
  "/oat.jpeg", // OAT Event
  "/dog.jpeg", // Dog
];

function BackgroundSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('${backgroundImages[index]}')`,
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent pt-20 md:pt-32">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
          {/* Layer 1: Background Image Slider */}
          <BackgroundSlider />

          {/* Layer 2: Base Overlay for Readability */}
          <div className="absolute inset-0 bg-slate-950/40" />

          {/* Layer 3: Vignette & Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
        </div>

        <div className="relative z-10 grid gap-8 px-6 md:grid-cols-2 md:gap-16 md:px-12 w-full max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm text-primary max-w-fit backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cta mr-2 animate-pulse" />
              Innovating the Future
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-outfit">
              Robotics Club <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">IIT Kanpur</span>
            </h1>
            <p className="max-w-[600px] text-base text-muted-foreground md:text-lg leading-relaxed">
              Welcome to the Robotics Club IIT Kanpur! We are a passionate community dedicated to hands-on learning and building together. We engage students through immersive mentorship, equipping them to design advanced systems and compete fiercely in top-tier robotics competitions.
            </p>
          </motion.div>

          {/* Hero Image / Graphic */}

        </div>
      </section>

      {/* Intro / Stats Section */}
      <section className="border-y border-white/5 bg-black/20 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg bg-card/50 border hover:border-primary/50 transition-colors">
              <Settings className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-2xl font-bold">Mechanical</h3>
              <p className="text-muted-foreground">Designing robust mechanisms, chassis, and manipulating systems for autonomous rovers.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg bg-card/50 border hover:border-primary/50 transition-colors">
              <Cpu className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-2xl font-bold">Electronics</h3>
              <p className="text-muted-foreground">Developing efficient PCBs, power distribution systems, and embedded control units.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg bg-card/50 border hover:border-primary/50 transition-colors">
              <Code className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-2xl font-bold">Software</h3>
              <p className="text-muted-foreground">Programming autonomous navigation, computer vision, and AI algorithms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have questions? innovative ideas? or just want to visit our Club?
            Reach out to us.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="mailto:roboticsclubiitkanpur@gmail.com">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
