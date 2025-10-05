"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "caseCobra",
    description: `Features:
🛠️ Complete shop built from scratch in Next.js 14
💻 Beautiful landing page included
🎨 Custom artworks made by a professional illustrator
💳 Secret admin dashboard to manage orders
🖥️ Drag-and-drop file uploads
🛍️ Customers can purchase directly from you
🌟 Clean, modern UI on top of shadcn-ui
🛒 Completely custom phone case configurator
🔑 Authentication using Kinde
✉️ Beautiful thank-you email after purchase
✅ Apple-inspired configuration design
⌨️ 100% written in TypeScript
🎁 ...much more`,
    image: "/images/projects/caseCobra.png",
    tag: ["All", "FUllStack","BackEnd","FrontEnd"],
    gitUrl: "https://github.com/Abd-El-RahmanHemida/casecobra",
    previewUrl: "https://casecobra-phi-lyart.vercel.app/",
  },
  {
    id: 2,
    title: "breaddit",
    description: `Features:
🔄 Infinite scrolling for dynamically loading posts
🔒 Authentication using NextAuth & Google
🌐 Custom feed for authenticated users
🗄️ Advanced caching using Upstash Redis
⚡ Optimistic updates for a great user experience
📤 Modern data fetching using React-Query
🖊️ A beautiful and highly functional post editor
📸 Image uploads & link previews
💬 Full comment functionality with nested replies`,
    image: "/images/projects/breaddit.png",
    tag: ["All", "FUllStack","BackEnd","FrontEnd"],
    gitUrl: "https://github.com/Abd-El-RahmanHemida/breadit-reddit-clone",
    previewUrl: "https://breadit-reddit-clone-mu.vercel.app",
  },
  {
    id: 3,
    title: "ImageProcessing",
    description: `🖼️ Image Processing Backend
    A powerful and efficient backend solution designed for advanced image processing. This project
    provides a robust set of tools for tasks like resizing, cropping, filtering, and converting images, all
    through seamless API integration. Built to handle high-performance image manipulation, it ensures
    fast and reliable processing even under heavy loads. With support for various image formats and
    quality optimizations, this backend is perfect for applications requiring scalable, real-time image
    handling. It empowers developers to easily integrate sophisticated image processing features into
    their web applications, while maintaining flexibility and speed.`,
    image: "/images/projects/ImageProcessing.png",
    tag: ["All", "BackEnd"],
    gitUrl: "https://github.com/Abd-El-RahmanHemida/Image-Processing-API-udacity",
    previewUrl: "https://github.com/Abd-El-RahmanHemida/Image-Processing-API-udacity",
  },
  {
    id: 4,
    title: "HTML & CSS Template",
    description: `💫 Stunning HTML & CSS Template
    A meticulously crafted, visually captivating template designed to make an impression. This
    template blends clean, modern design with seamless user experience, offering a perfect balance
    between elegance and functionality. Its responsive layout adapts beautifully to any device, ensuring
    that your content shines on every screen. With a harmonious color palette, subtle animations, and
    refined typography, this template is built to elevate your website and leave a lasting impression.
    Ideal for those who value simplicity, beauty, and sophistication in web design.`,
    image: "/images/projects/htmlCss.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "https://github.com/Abd-El-RahmanHemida/html-css-template",
    previewUrl: "https://abd-el-rahmanhemida.github.io/html-css-template/",
  },
  {
    id: 5,
    title: "memory Game",
    description: `🧠 Memory Game
    A fun and engaging memory matching game, built using pure JavaScript, HTML, and CSS. This
    project challenges players to test and improve their memory skills by flipping over cards to find
    matching pairs. With a simple yet captivating interface, the game provides an intuitive, interactive
    experience for players of all ages. Responsive design ensures smooth gameplay across all devices,
    while dynamic animations and timers keep the experience exciting and engaging. Ideal for anyone
    looking to implement a classic memory game with a modern, polished touch!`,
    image: "/images/projects/memoryGame.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "https://github.com/Abd-El-RahmanHemida/Memory-game",
    previewUrl: "https://abd-el-rahmanhemida.github.io/Memory-game/",
  },
  {
    id: 6,
    title: "storeforntBackend",
    description: `🛒 Backend API for Storefront
    A robust and scalable backend API designed for managing a storefront, built with Node.js and
    PostgreSQL. This API handles key functionalities such as product management, user authentication,
    order processing, and payment integration. With a well-structured database schema in PostgreSQL
    it ensures reliable data storage and fast queries, making it perfect for e-commerce applications. The
    API is designed for flexibility and scalability, supporting features like dynamic product listings,
    inventory tracking, and customer management. It provides secure, RESTful endpoints, allowing
    seamless integration with any frontend and third-party services.s`,
    image: "/images/projects/storeforntBackend.png",
    tag: ["All", "BackEnd"],
    gitUrl: "https://github.com/Abd-El-RahmanHemida/storefornt-backend-udacity",
    previewUrl: "https://github.com/Abd-El-RahmanHemida/storefornt-backend-udacity",
  },
  {
    id: 7,
    title: "quizApp",
    description: `📝 Quiz App (Next.js & Pure JavaScript Versions)
   An interactive and engaging quiz application available in two versions: one built with Next.js for
   modern, server-side rendering and fast performance, and another crafted with pure JavaScript for,
   a lightweight, browser-based experience. Both versions allow users to test their knowledge across
   multiple categories, with instant feedback and scoring. The Next.js version offers dynamic, fast-
   loading pages and better SEO, while the JavaScript version provides a simple, efficient solution for
   users looking for a client-side app. Both versions feature a clean UI, intuitive question navigation,
   and responsive design, making them ideal for creating quiz apps with ease.`,
    image: "/images/projects/quizApp.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "https://github.com/Abd-El-RahmanHemida/Quiz-app",
    previewUrl: "https://github.com/Abd-El-RahmanHemida/quiz-app-rebuild-nextjs",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    console.log(tag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex justify-center items-center gap-2 py-6 flex-col lg:flex-row">
        <div className="flex flex-row gap-2">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="FUllStack"
          isSelected={tag === "FUllStack"}          
        />
        </div>
        <div  className="flex flex-row gap-2">
        <ProjectTag
          onClick={handleTagChange}
          name="BackEnd"
          isSelected={tag === "BackEnd"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FrontEnd"
          isSelected={tag === "FrontEnd"}
        />
        </div>
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
