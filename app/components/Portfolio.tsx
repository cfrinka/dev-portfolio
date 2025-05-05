"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import MentalNotes from "@/assets/mentalNotes.jpg";
import project2 from "@/assets/proj6.png";
import project3 from "@/assets/proj7.png";
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
  },
  {
    id: 2,
    year: 2024,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: project2,
  },
  {
    id: 3,
    year: 2024,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: project3,
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
              <p className="text-lg mb-2 text-purple-400">{project.year}</p>
              <h3
                className={` cursor-pointer text-3xl font-semibold group-hover:text-purple-400 transition-colors ${
                  selectedProject.id === project.id ? "text-purple-200" : ""
                } duration-300`}
              >
                {project.title}
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
