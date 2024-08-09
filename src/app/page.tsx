"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import headShot from "@/public/headshot.jpg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sections = [
    { id: "intro", title: "Home" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "skills", title: "Skills" },
    { id: "hobbies", title: "Hobbies" },
  ];

  const personalDesc = `I'm a passionate software engineer with expertise in web
  technologies, manufacturing IT, and backend programming.\nWelcome to my portfolio!`;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Brandon Huynh</h1>
          <div className="hidden md:flex space-x-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-white hover:text-blue-200 transition duration-300"
              >
                {section.title}
              </a>
            ))}
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-white hover:text-blue-200 py-2 transition duration-300"
                onClick={toggleMenu}
              >
                {section.title}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="container mx-auto mt-8 px-4">
        <section id="intro" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg">{personalDesc}</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/headshot.jpg"
                  alt="Brandon Huynh"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <ul className="list-disc list-inside">
            <li>Application Engineer @ Qualitel (Dec 2023 - Present)</li>
            <li>
              Ground Software Engineer Intern @ Terran Orbital (Jun 2023 - Sep
              2023)
            </li>
            <li>Software Developer @ Hack4Impact (2016-2018)</li>
            <li>Software Developer Intern @ DxHub (Jun 2022 - Jan 2023) </li>
            <li>
              Computer Science Tutor @ Cal Poly CS Dept (Oct 2021 - Jun 2023){" "}
            </li>
          </ul>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p>A brief description of Project 1 and its key features.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p>A brief description of Project 2 and its key features.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "JavaScript", "HTML", "CSS", "Node.js", "Python"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>

        <section id="hobbies" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Hobbies</h2>
          <ul className="list-disc list-inside">
            <li>Photography</li>
            <li>Hiking</li>
            <li>Reading sci-fi novels</li>
            <li>Playing guitar</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Developer Name. All rights reserved.</p>
      </footer>
    </div>
  );
}