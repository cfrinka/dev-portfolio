"use client";
import profilePicture from "@/assets/profilepic.png";
import {
  useMotionValue,
  animate,
  useMotionTemplate,
  motion,
} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const handleDownloadEng = () => {
    const link = document.createElement("a");
    link.href = "/files/eng.pdf"; // Relative to your public folder
    link.download = "Carlos-Frinka-Neto-CV-English.pdf"; // Optional: force a download with a specific name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPTBR = () => {
    const link = document.createElement("a");
    link.href = "/files/ptbr.pdf"; // Relative to your public folder
    link.download = "Carlos-Frinka-Neto-CV-PT-BR.pdf"; // Optional: force a download with a specific name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Open for work
        </span>
        <h1 className="text-5xl md:text-7xl font-black leading-tight text-white/40">
          Hi there, I am{" "}
          <span className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            Neto
          </span>
        </h1>

        <div>
          <Image src={profilePicture} alt="profile picture" width={250} />
        </div>
        <p className="my-6 max-w-3xl text-center text-2xl">
          Fullstack Developer based in Brazil, with over 5 years experience
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
            onClick={() => handleDownloadEng()}
          >
            Download CV English
            <FiArrowRight />
          </motion.button>
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
            onClick={() => handleDownloadPTBR()}
          >
            Download CV PT-BR
            <FiArrowRight />
          </motion.button>
        </div>
      </div>
      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};

export default Hero;
