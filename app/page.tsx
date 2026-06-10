"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaPhoneAlt,
  FaDownload,
  FaBars,
  FaTimes,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "./emailjs-config";

const personalInfo = {
  name: "Bezawada Priyavardhan",
  role: "AI & Data Science Student | Full Stack Developer | AI Enthusiast",
  email: "priyavardhan.bezawada@gmail.com",
  phone: "+916303604865",
  github: "https://github.com/Priyavardhanbezawada",
  linkedin: "https://www.linkedin.com/in/priya-vardhan-bezawada-24eu01009",
  instagram: "https://www.instagram.com/priyavardhanbezawada/",
  resume: "/priyaresume.pdf",
  profileImage: "/profile.jpg", // Add your profile image to public folder
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        e.target as HTMLFormElement,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        (result) => {
          setFormStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setFormStatus('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">
            {personalInfo.name}
          </h1>

          {/* Desktop Navigation */}
          <div className="space-x-6 hidden md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-purple-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg hover:text-purple-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content - Left Side */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              BEZAWADA
              <br />
              PRIYAVARDHAN
            </h1>

            <p className="text-gray-300 text-lg max-w-3xl mb-8">
              {personalInfo.role}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-black rounded-xl flex items-center gap-2 hover:bg-gray-200 transition-colors duration-200 transform hover:scale-105 justify-center"
              >
                <FaDownload />
                View Resume
              </a>

              <a
                href={personalInfo.resume}
                download
                className="px-6 py-3 border border-white rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition-colors duration-200 transform hover:scale-105 justify-center"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition-colors duration-200 transform hover:scale-105 text-center"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="flex-shrink-0">
            <div className="relative w-70 h-70 md:w-84 md:h-84 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 ">
              <img
                src={personalInfo.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23333' width='200' height='200'/%3E%3Ctext fill='%23666' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Personal Profile
        </h2>

        <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
          <p className="text-gray-300 text-lg leading-8 text-center">
            I am Bezawada Priyavardhan, a B.Tech student specializing in
            Artificial Intelligence & Data Science. I am passionate about
            AI, Machine Learning, Full-Stack Development, and building
            innovative solutions that solve real-world problems. My interests
            include Web Development, NLP, Automation, and Data-Driven Applications.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">
                B.Tech in AI & Data Science
              </h3>
              <p className="text-purple-400 font-semibold mb-2">
                Siddhartha Engineering College
              </p>
              <p className="text-gray-400">
                Currently pursuing B.Tech in Artificial Intelligence & Data Science
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Experience Highlights
        </h2>

        <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Frontend Developer
              </h3>
              <p className="text-gray-300 text-lg leading-8">
                Built reusable UI components to improve development efficiency and design consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Toolkit
        </h2>

        <p className="text-center text-gray-300 text-lg mb-12">
          Technologies and Tools I Use to Bring Ideas to Life
        </p>

        {/* React Ecosystem */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">
            React Ecosystem Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React.js", "React Native", "Next.js", "Tailwind CSS"].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-gray-800 rounded-full hover:bg-cyan-600 transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Complete Technical Skillset */}
        <h3 className="text-2xl font-bold text-center mb-8 text-purple-400">
          Complete Technical Skillset
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend Development */}
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition-colors duration-300">
            <h4 className="text-xl font-bold mb-4 text-purple-400">Frontend Development</h4>
            <div className="space-y-2">
              {["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"].map((skill) => (
                <div key={skill} className="text-gray-300 hover:text-purple-300 transition-colors">
                  • {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Database */}
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500 transition-colors duration-300">
            <h4 className="text-xl font-bold mb-4 text-green-400">Backend & Database</h4>
            <div className="space-y-2">
              {["Python", "Node.js", "FastAPI", "PostgreSQL"].map((skill) => (
                <div key={skill} className="text-gray-300 hover:text-green-300 transition-colors">
                  • {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors duration-300">
            <h4 className="text-xl font-bold mb-4 text-blue-400">Development Tools</h4>
            <div className="space-y-2">
              {["Git", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"].map((skill) => (
                <div key={skill} className="text-gray-300 hover:text-blue-300 transition-colors">
                  • {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Design & Documentation */}
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-pink-500 transition-colors duration-300">
            <h4 className="text-xl font-bold mb-4 text-pink-400">Design & Documentation</h4>
            <div className="space-y-2">
              {["UI/UX Design", "Documentation", "Responsive Design"].map((skill) => (
                <div key={skill} className="text-gray-300 hover:text-pink-300 transition-colors">
                  • {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Car Parking System",
              description:
                "Designed and developed an IoT-based smart parking solution using sensors and embedded systems to monitor parking slot availability in real time. Integrated LCD displays and alert mechanisms to improve parking efficiency.",
              icon: "�"
            },
            {
              title: "Syllabus Genius",
              description:
                "Built an AI-powered study planner that extracts syllabus content from university PDF documents using NLP techniques and generates personalized learning roadmaps with curated educational resources and YouTube tutorials.",
              icon: "🤖"
            },
            {
              title: "WhatsApp Reminder Bot",
              description:
                "Developed a WhatsApp automation bot using the Baileys library to schedule reminders and notifications through chat commands while ensuring complete local execution and user privacy.",
              icon: "�"
            }
          ].map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Box */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors duration-200"
              >
                <FaEnvelope className="text-2xl" />
                {personalInfo.email}
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors duration-200"
              >
                <FaPhoneAlt className="text-2xl" />
                {personalInfo.phone}
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors duration-200"
              >
                <FaGithub className="text-2xl" />
                GitHub
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors duration-200"
              >
                <FaLinkedin className="text-2xl" />
                LinkedIn
              </a>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-lg hover:text-purple-400 transition-colors duration-200"
              >
                <FaInstagram className="text-2xl" />
                Instagram
              </a>
            </div>
          </div>

          {/* Contact Form Box */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Send Me a Message
            </h3>
            <form
              className="space-y-5"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-white/30 text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-white/30 text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-white/30 text-white placeholder-gray-400 resize-none"
              />

              {formStatus && (
                <div className={`p-3 rounded-xl text-sm font-medium ${
                  formStatus.includes('successfully')
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {formStatus}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-semibold transition duration-300 bg-white text-black hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
        <p>© 2026 Bezawada Priyavardhan | AI & Data Science Student</p>
        <p className="text-sm mt-2 text-gray-500">
          Built with Next.js, React, and Tailwind CSS
        </p>
      </footer>
    </div>
  );
}