"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    id: 1,
    value: "5+",
    label: "Years of Experience",
    description:
      "Fullstack developer with expertise in modern web technologies and scalable systems.",
  },
  {
    id: 2,
    value: "10+",
    label: "Projects Delivered",
    description:
      "Built applications for international clients, including high-profile events like Superbowl 2021.",
  },
  {
    id: 3,
    value: "95%",
    label: "Code Coverage",
    description:
      "Achieved high test coverage with React Testing Library for robust applications.",
  },
  {
    id: 4,
    value: "3x",
    label: "Legacy Systems Modernized",
    description:
      "Led migrations to modern tech stacks, reducing technical debt.",
  },
  {
    id: 5,
    value: "2+",
    label: "Teams Mentored",
    description: "Guided junior developers and improved team best practices.",
  },
  {
    id: 6,
    value: "100%",
    label: "Remote Collaboration",
    description: "Experienced in international projects and remote workflows.",
  },
];

const KeyMetrics = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="px-4 py-32 text-white glass min-h-screen"
      id="about"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl font-bold mb-12"
        >
          Key Metrics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <motion.h3
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  duration: 0.4,
                  type: "spring",
                }}
                className="text-5xl font-bold text-purple-300 mb-2"
              >
                {metric.value}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0.5 }}
                transition={{
                  delay: 0.8 + index * 0.1,
                  duration: 0.4,
                }}
                className="text-xl font-semibold mb-2"
              >
                {metric.label}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0.5 }}
                transition={{
                  delay: 0.8 + index * 0.1,
                  duration: 0.4,
                }}
                className="text-gray-400"
              >
                {metric.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default KeyMetrics;
