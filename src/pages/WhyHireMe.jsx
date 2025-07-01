import {
  faBolt,
  faCloudUploadAlt,
  faCode,
  faPuzzlePiece,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import Card from "../components/Card";

const WhyHireMe = () => {
  const whyHireMeCards = [
    {
      title: "Full Stack Development",
      description: "Strong Full Stack Development Knowledge",
      icon: <FontAwesomeIcon icon={faCode} />,
    },
    {
      title: "Quick Learner",
      description: "Quick Learner",
      icon: <FontAwesomeIcon icon={faBolt} />,
    },
    {
      title: "Problem Solver",
      description: "Problem Solver",
      icon: <FontAwesomeIcon icon={faPuzzlePiece} />,
    },
    {
      title: "Agile Tools",
      description: "Familiar with Agile Tools like ClickUp",
      icon: <FontAwesomeIcon icon={faTasks} />,
    },
    {
      title: "Deployment",
      description: "Deployment experience with Vercel, Netlify, and Railway",
      icon: <FontAwesomeIcon icon={faCloudUploadAlt} />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 px-6 md:px-16 bg-blue-50 dark:bg-gray-900"
      id="why-hire-me"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">
        Why Hire Me?
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 max-w-4xl mx-auto">
        {whyHireMeCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Card {...card} explore={null} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyHireMe;
