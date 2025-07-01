import { motion } from "framer-motion";
import React from "react";
import SemiDonutChart from "./SemiDonutChart";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="py-16 px-6 md:px-16 bg-blue-50 dark:bg-gray-900"
      id="skills"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">
        Skills
      </h2>
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-blue-600 dark:text-blue-300">
        Frontend
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        <SemiDonutChart percentage={90} fill="#03B0FD" txt="HTML5" />
        <SemiDonutChart
          percentage={85}
          fill="#03B0FD"
          txt="CSS3 / Tailwind CSS"
        />
        <SemiDonutChart
          percentage={85}
          fill="#03B0FD"
          txt="JavaScript (ES6+)"
        />
        <SemiDonutChart percentage={80} fill="#03B0FD" txt="React.js" />
        <SemiDonutChart percentage={75} fill="#03B0FD" txt="Vite" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-blue-600 dark:text-blue-300">
        Backend
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        <SemiDonutChart percentage={85} fill="#03B0FD" txt="Node.js" />
        <SemiDonutChart percentage={80} fill="#03B0FD" txt="Express.js" />
        <SemiDonutChart percentage={85} fill="#03B0FD" txt="REST APIs" />
        <SemiDonutChart percentage={80} fill="#03B0FD" txt="MongoDB" />
        <SemiDonutChart percentage={60} fill="#03B0FD" txt="MySQL (Basic)" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-blue-600 dark:text-blue-300">
        Tools & Deployment
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        <SemiDonutChart percentage={85} fill="#03B0FD" txt="Git & GitHub" />
        <SemiDonutChart percentage={80} fill="#03B0FD" txt="Postman" />
        <SemiDonutChart percentage={90} fill="#03B0FD" txt="VS Code" />
        <SemiDonutChart
          percentage={80}
          fill="#03B0FD"
          txt="Vercel / Netlify / Railway"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
      </motion.div>
    </motion.section>
  );
};

export default Skills;
