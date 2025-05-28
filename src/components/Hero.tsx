"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('/bg.jpg')",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10 py-12 md:py-24">
        {/* Left Content */}
        <div className="text-white max-w-xl space-y-6 text-center md:text-left">
          <h6 className="flex items-center justify-center md:justify-start gap-2 text-xl font-semibold text-black">
            <img
              src="hend.png"
              alt="hello"
              className="h-6"
              draggable="false"
            />
            HELLO, I AM
          </h6>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-500">
            Shauryam Singh
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            FULL STACK & SOFTWARE DEVELOPER{" "}
            <span className="text-blue-400">
              <Typewriter
                words={[
                  "React & Next.js",
                  "Python & C++",
                  "SQL & Firebase",
                  "Frontend + Backend",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1400}
              />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-black/80 max-w-md mx-auto md:mx-0">
            I'm a passionate developer who crafts clean, performant software and web solutions. Whether it's a dynamic web app or a robust desktop tool.
          </p>
        </div>

        {/* Right Profile Image */}
        <div className="mt-10 md:mt-0 md:ml-8 flex-shrink-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
          <img
            src="https://avatars.githubusercontent.com/u/175140016?v=4"
            alt="Shauryam Singh"
            className="w-full h-auto object-contain rounded-2xl shadow-xl"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
