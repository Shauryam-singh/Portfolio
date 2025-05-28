"use client";
import { useEffect, useState } from "react";

const sections = ["home", "about", "resume", "services", "project", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const scrollPosition = scrollY + 100;
      for (let section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          el.offsetTop + el.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/60 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/175140016?v=4"
            alt="Logo"
            draggable="false"
            className="h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center flex-1">
          <ul className="flex space-x-6">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`text-xl transition ${
                    activeSection === section
                      ? "text-blue-400"
                      : "text-gray-800 hover:text-blue-400"
                  }`}
                >
                  {section.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hire Me Button (desktop only) */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={handleLinkClick}
                  className={`block text-lg font-medium ${
                    activeSection === section
                      ? "text-blue-500"
                      : "text-gray-800 hover:text-blue-500"
                  }`}
                >
                  {section.toUpperCase()}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700 transition"
              >
                HIRE ME
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
