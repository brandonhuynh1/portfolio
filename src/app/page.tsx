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

  const personalDescSec1 = `Growing up in Bellevue, Washington, I've always been intrigued by the intersection of human interaction, new technologies, and programming.`;
  const personalDescSec2 = `I'm a passionate software engineer with expertise in backend programming, manufacturing IT, and web technologies. Welcome to my portfolio!`;
  const personalDescSec3 = `Recently, I earned my B.S. in Computer Science from California Polytechnic State University, San Luis Obispo.`;

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
          <h2 className="text-3xl font-bold mb-4">Hey, I'm Brandon!</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 space-y-4">
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-lg">{personalDescSec1}</p>
              <p className="text-lg">{personalDescSec2}</p>
              <p className="text-lg">{personalDescSec3}</p>
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
              <h3 className="text-xl font-semibold mb-2">365DeliveryService</h3>
              <p>
                Built command line interface that handles concurrent users and
                transactions backed by a MySQL database.{" "}
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">ProfileDrop</h3>
              <p>
                Built a mobile app with Flutter to connect nearby networking
                individuals by sharing relevant social media platforms using
                Android Studio and MapBox API. Worked closely within a team of
                5, utilizing agile methodologies (e.g., Scrum, Kanban) –
                emphasizing the importance of deliverables and communication.
              </p>
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
          <p>When I'm not coding, I enjoy spending my spare time:</p>
          <ul className="list-disc list-inside">
            <li>Weight lifting</li>
            <li>Hiking</li>
            <li>Surfing</li>
            <li>Thrifting</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Brandon Huynh. All rights reserved.</p>
      </footer>
    </div>
  );
}
