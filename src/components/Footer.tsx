import {
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          {/* Left side: logo and copyright */}
          <div className="flex items-center space-x-4 py-2">
            <img
              src="https://avatars.githubusercontent.com/u/175140016?v=4"
              alt="Logo"
              draggable="false"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-gray-600 text-sm">
              © 2025 Shauryam Singh | All rights reserved
            </span>
          </div>

          {/* Right side: social icons */}
          <div className="flex space-x-6 py-2 text-gray-600">
            <a
              href="https://github.com/Shauryam-singh/"
              aria-label="GitHub"
              className="hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/shauryam-singh"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/shauryam_singh"
              aria-label="Instagram"
              className="hover:text-pink-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
