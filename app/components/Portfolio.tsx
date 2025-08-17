"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import MentalNotes from "@/assets/mentalNotes.jpg";
import JarvisGatekeeper from "@/assets/jarvis.jpg";
import Turing from "@/assets/timeline.jpg";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    year: 2025,
    title: "Mental Notes",
    description:
      "Mental Notes is a web platform designed to support mental health care by streamlining communication and engagement between patients and therapists. The application allows for role-based access, personalized content, and a user-friendly experience aimed at empowering mental health journeys.",
    image: MentalNotes,
    link: "https://github.com/cfrinka/mental-notes",
    demo: "diariomental.netodev.tech",
  },
  {
    id: 2,
    year: 2025,
    title: "Jarvis Gatekeeper",
    description:
      "A complete visitor access control solution for corporate environments. The system enables visitor registration, check-in/check-out, and real-time monitoring with a modern and intuitive interface.",
    image: JarvisGatekeeper,
    link: "https://github.com/cfrinka/jarvis-gatekeeper",
    demo: "",
  },
  {
    id: 3,
    year: 2025,
    title: "Timeline",
    description:
      "A React-based interactive timeline component built with Next.js and Tailwind CSS that visualizes tasks in a horizontal timeline with compact lane assignment, category-based filtering, and persistent task editing.",
    image: Turing, // Placeholder - you'll add the actual image later
    link: "https://github.com/cfrinka/turing",
    demo: "",
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  return (
    <motion.section
      id="portfolio"
      className="py-32 text-white min-h-screen"
      style={{ backgroundImage }}
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-purple-400">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="mb-8 group"
            >
              <h3
                className={` cursor-pointer text-3xl font-semibold group-hover:text-purple-400 transition-colors ${
                  selectedProject.id === project.id ? "text-purple-200" : ""
                } duration-300`}
              >
                • {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-b-2 border-purple-200 my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p className="text-purple-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
              {selectedProject.id === project.id && (
                <>
                  <div className="border-b-2 border-purple-200 my-4"></div>
                  <Link
                    className="text-purple-400 text-xl transition-all duration-500 ease-in-out hover:text-white"
                    href={project.link ? project.link : ""}
                  >
                    Github Repository
                  </Link>
                </>
              )}
            </div>
          ))}
          
          {/* Work in Progress Indicator */}
          <div className="mt-12 p-6 border-2 border-dashed border-purple-400/50 rounded-lg bg-purple-900/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-semibold text-purple-300">More Projects Coming Soon</h3>
            </div>
            <p className="text-purple-400/80 text-sm leading-relaxed">
              I&apos;m currently working on preparing additional projects for showcase. 
              Most of my work involves confidential client projects, so I&apos;m creating 
              sanitized versions that don&apos;t expose any client business information. 
              Stay tuned for more exciting projects!
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
