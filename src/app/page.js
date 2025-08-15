"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import RobotScene  from "./Robot";
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';
import StarryBackground from "./components/StarryBackground";
import Head from "next/head";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
    <Head>
      <title>Kristofer</title>
    </Head>
    <main className="min-h-screen relative bg-black overflow-hidden">
      <StarryBackground />

    {/* Floating Navbar */}
    <motion.nav
      className="bg-black shadow fixed w-full z-20 top-0"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative max-w-6xl mx-auto px-4 py-4 flex items-center">
        {/* Left: Name */}
        <h1 className="text-xl font-bold text-white">Kristofer</h1>

        {/* Center: Navigation */}
        <ul className="absolute left-1/2 -translate-x-1/2 flex space-x-6 font-medium">
          {[
            { name: "About", to: "about" },
            { name: "Projects", to: "projects" },
            { name: "Home", to: "home" },
            { name: "Skills", to: "skills" },
            { name: "Contact", to: "contact" },
          ].map((item) => (
            <li key={item.to} className="relative group">
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                spy={true}
                activeClass="active"
                className="text-white hover:text-cyan-400 transition cursor-pointer pb-1"
              >
                {item.name}
              </Link>

              {/* Underline */}
              <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-cyan-400 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Active state styling */}
      <style jsx global>{`
        .active {
          color: #22d3ee; /* cyan-400 */
          border-bottom: 2px solid #22d3ee;
        }
      `}</style>
    </motion.nav>

      {/* Robot & Home */}
      <div className="pt-40"> {}
          {/* <RobotScene /> */}
        <motion.section
          id="home"
          className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 pt-32 pb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I am <span className="text-cyan-500">Kristofer</span>
          </h2>

          <p className="text-lg text-cyan-400 font-semibold mb-6">
            <Typewriter
              words={['Web Developer', 'Full-stack Developer', 'Back-end Engineer']}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000} // 1 second pause before changing
            />
          </p>

          {/* Download CV Button */}
          <a
            href="/CV_Kristofer.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-cyan-500 text-black 
            font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_0_15px_10px_rgba(6,182,212,0.8)]"
          >
            <FiDownload className="mr-2 w-5 h-5 text-black" />
            Download CV
          </a>
        </div>

          <motion.div
            className="mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/profile.png"
              alt="Profile"
              className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
              style={{
                boxShadow: "0 0 30px 15px rgba(6, 182, 212, 0.7)" // cyan glow
              }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: "0 0 30px 20px rgba(6, 182, 212, 0.9)",
                transition: { duration: 0.4, ease: "easeInOut" }
              }}
            />
          </motion.div>
        </motion.section>
</div>

      <AboutSection />
      <ProjectsSection/>
      <SkillsSection/>

      {/* Contact Section */}
<motion.section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center p-8 bg-black text-white"
  variants={fadeIn}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
>
  <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
    <h3 className="text-3xl font-bold text-white">Got an idea? Let’s make it happen 🚀</h3>

  {/* Contact Form */}
  <form
  action="https://formspree.io/f/manbkabk"
  method="POST"
  className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 md:mt-10"
>
  <div>
    <label className="block mb-1 font-medium">Name</label>
    <input
      type="text"
      name="name"
      required
      className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Your Name"
    />
  </div>
  <div>
    <label className="block mb-1 font-medium">Email</label>
    <input
      type="email"
      name="email"
      required
      className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Your Email"
    />
  </div>
  <div>
    <label className="block mb-1 font-medium">Message</label>
    <textarea
      name="message"
      rows="4"
      className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Your Message"
      required
    ></textarea>
  </div>
  <button
    type="submit"
    className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded font-semibold transition"
  >
    Send Message
  </button>
</form>


  {/* Social Icons */}
      <motion.div
        className="flex justify-center gap-6 mt-6 text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <a href="https://www.linkedin.com/in/kristofer755/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Kristofer755" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/krisvinsen_755/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
          <FaInstagram />
        </a>
      </motion.div>
</motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-black shadow mt-10 text-black w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-white">
          © {new Date().getFullYear()} Kristofer. All rights reserved.
        </div>
      </motion.footer>
    </main>
    </>
  );
}

export function AboutSection() {
  const lines = [
    "Hi, I’m Kristofer, an Informatics student at Universitas Atma Jaya Yogyakarta with a passion for web development, mobile applications, finance and Web3.",
    "I’ve worked on various projects, ReuseMart online shopping website and mobile rental car apps, combining creativity with technical skills to build functional and engaging solutions.",
    "With experience in both coding and leading teams, I aim to create impactful digital products and am always open to remote internships, freelance work, or collaborations."
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-black"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>

      <div className="max-w-3xl text-center space-y-6">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 1000, y: 20, color: "#414a58ff" }} // start gray
            whileInView={{ opacity: 1, y: 0, color: "#ffffff" }} // fade to white
            transition={{
              duration: 0.8,
              delay: index * 0.4, // stagger each line
              ease: "easeOut"
            }}
            viewport={{ once: false, amount: 0.6 }} // animate every time visible
            style={{ margin: 0 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}


export function SkillsSection() {
  const databaseTools = [
    { name: "MySQL", src: "/logos/mysql-3.svg" },
    { name: "MongoDB", src: "/logos/mongodb-icon-1.svg" },
    { name: "phpMyAdmin", src: "/logos/phpmyadmin.svg" },
    { name: "Laragon", src: "/logos/laragon.svg" },
    { name: "Visual Studio", src: "/logos/vs.svg" },
    { name: "VS Code", src: "/logos/vscode.svg" },
    { name: "Android Studio", src: "/logos/as.png" },
    { name: "Figma", src: "/logos/figma-icon.svg" },
    { name: "Wireshark", src: "/logos/wireshark.svg" },
    { name: "Cisco Packet Tracer", src: "/logos/cisco-2.svg" },
    { name: "NetBeans", src: "/logos/netbeans.svg" },
    { name: "MATLAB", src: "/logos/matlab.svg" },
    // { name: "SSIS", src: "/logos/ssis.svg" },
    { name: "Kali Linux", src: "/logos/kali-1.svg" },
    { name: "Postman", src: "/logos/postman.svg" },
    { name: "Canva", src: "/logos/canva-wordmark-2.svg" },
    { name: "Git", src: "/logos/git-icon.svg" },
    { name: "GitHub", src: "/logos/github.svg" },
  ];

  const programmingLanguages = [
    { name: "Dart", src: "/logos/dart.svg" },
    { name: "Java", src: "/logos/java-4.svg" },
    { name: "JavaScript", src: "/logos/javascript-svgrepo-com.svg" },
    { name: "HTML", src: "/logos/html-5-svgrepo-com.svg" },
    { name: "CSS", src: "/logos/css-3-svgrepo-com.svg" },
    { name: "C", src: "/logos/c-1.svg" },
    { name: "C++", src: "/logos/c.svg" },
    { name: "Python", src: "/logos/python-5.svg" },
    { name: "PHP", src: "/logos/php-6.svg" },
    { name: "MATLAB", src: "/logos/matlab.svg" },
  ];

  const frameworksLibraries = [
    { name: "Flutter", src: "/logos/flutter-logo.svg" },
    { name: "Laravel", src: "/logos/laravel-2.svg" },
    { name: "Bootstrap", src: "/logos/bootstrap-1.svg" },
    { name: "ReactJS", src: "/logos/react-2.svg" },
    { name: "NextJS", src: "/logos/next-js.svg" },
    { name: "Tailwind", src: "/logos/tailwind-css-2.svg" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
  };

  const renderSkillCategory = (title, skills) => (
    <div className="mb-10 w-full">
      <h3 className="text-xl font-semibold text-white mb-5 text-center">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-0 gap-y-8 justify-items-center">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center "
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            custom={i} // pass index for delay
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-16 h-16 object-contain hover:scale-110 transition-transform bg-white p-2 rounded-lg shadow-md"
            />
            <p className="mt-3 text-center text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-black md:mt-50"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      {renderSkillCategory("Database & Tools", databaseTools)}
      {renderSkillCategory("Programming Languages", programmingLanguages)}
      {renderSkillCategory("Frameworks & Libraries", frameworksLibraries)}
    </section>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: "project/reusemart.png",
      title: "ReuseMart",
      desc: "A second-hand goods platform built with Laravel, API integration, and phpMyAdmin. Features product listing, search, and consignment sales."
    },
    {
      img: "project/home_travel.png",
      title: "Atma Travel",
      desc: "A Flutter mobile app for car rentals with Laravel backend, MySQL, booking history, and separate driver/vehicle reviews."
    },
    {
      img: "project/portofolio.png",
      title: "Personal Portofolio",
      desc: "My own responsive and animated portfolio site showcasing my skills and projects, built with NextJS, TailwindCSS, and Framer Motion."
    },
    {
      img: "project/gym.png",
      title: "Sanctuary Fitness",
      desc: "A sleek and responsive gym website featuring an engaging UI, smooth animations, and an integrated class scheduling system for a seamless member experience."
    },
    {
      img: "project/web3wave.png",
      title: "WEB 3 WAVE",
      desc: "A comprehensive UI/UX design concept built in Figma, tailored for the Web3 ecosystem. Features include cryptocurrency dashboards, community engagement pages, Web3-focused video streaming, and more, providing a seamless and modern digital experience."
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-black pt-32"
    >
      <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
      <p className="text-gray-400 mb-12 text-center max-w-2xl">
        Here are some of the projects I have worked on, combining creativity, clean code, and user-focused design.
      </p>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 border border-white transition-transform duration-300"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-contain bg-black"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-blue-500 hover:underline font-medium"
              >
                View Details →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 p-8 rounded-lg max-w-lg w-full shadow-lg border border-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{selectedProject.title}</h3>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-48 object-contain bg-black mb-4"
              />
              <p className="text-gray-300 mb-6">{selectedProject.desc}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}