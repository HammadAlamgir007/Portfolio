import { motion } from "framer-motion";
import React from "react";
import fusionnerpdf from "../assets/images/fusionnerpdf.png";
import portfolio from "../assets/images/portfolio.png";
import youtube from "../assets/images/youtube.png";
import Card from "../components/Card";
const Projects = () => {
  const cards = [
    {
      title: "FusionnerPDF – PDF Merging Tool",
      description:
        "Built a responsive, user-friendly web application for merging PDF files using drag-and-drop interface.\nIntegrated client-side file handling with efficient memory use for real-time file combination.\nDeployed on AWS for high availability and fast response times.",
      explore: "https://fusionnerpdf.net",
      altText: "FusionnerPDF",
      imageUrl: fusionnerpdf,
    },
    {
      title: "YouTube Video Downloader",
      description:
        "Download YouTube videos easily and in high quality with this free online downloader.\nFast, secure, no registration required.\nSimple user interface: Paste URL and click Start.",
      altText: "YouTube Video Downloader",
      imageUrl: youtube,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website to showcase my skills and projects.\nTech Stack: HTML, CSS, Tailwind CSS, Vite",
      imageUrl: portfolio,
      altText: "Personal Portfolio Website",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900"
      id="project"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">
        Projects
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
          
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
