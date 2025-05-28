export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white py-8"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-gray-800">About Me</h4>
          <div className="w-24 mx-auto h-1 bg-blue-500 my-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Software & Web Developer
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/175140016?v=4"
              alt="Shauryam Singh"
              draggable="false"
              className="w-48 sm:w-56 md:w-64 lg:w-full max-h-[60vh] md:max-h-[80vh] object-contain rounded-xl shadow-lg"
            />
          </div>

          {/* About Content */}
          <div className="w-full lg:w-2/3 lg:pl-10">
            <div className="space-y-4 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <h6 className="text-xs sm:text-sm font-semibold uppercase text-blue-500 tracking-wide">
                My Introduction
              </h6>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                I am <span className="text-blue-500">Shauryam Singh</span>
              </h2>
              <h5 className="text-base sm:text-lg text-gray-600">
                A Full Stack & Software Developer based in India
              </h5>

              <div className="text-gray-600 space-y-3 text-sm sm:text-base">
                <p>
                  I build robust software and modern web applications using tools like React, Python, Node.js, and C++. Whether it's a full-stack web platform or a standalone software solution, I focus on writing clean, efficient, and maintainable code.
                </p>
                <p>
                  I’m constantly learning and evolving—adapting to new technologies and creating impactful solutions that solve real-world problems. Innovation and user experience are at the heart of my development process.
                </p>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-sm sm:text-base text-gray-700">
                <ul className="space-y-2">
                  <li><span className="font-semibold">Birthday:</span> 01st March 2006</li>
                  <li><span className="font-semibold">Age:</span> 19 years</li>
                  <li><span className="font-semibold">Location:</span> India</li>
                </ul>
                <ul className="space-y-2">
                  <li><span className="font-semibold">Phone:</span> +91 6307257097</li>
                  <li><span className="font-semibold">Email:</span> shauryamsingh9@gmail.com</li>
                  <li><span className="font-semibold">LinkedIn:</span> shauryam-singh</li>
                </ul>
              </div>

              {/* Download CV Button */}
              <div className="pt-6">
                <a
                  href="/Shauryamsingh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
