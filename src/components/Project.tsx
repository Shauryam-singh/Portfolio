import Slider from "react-slick";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Task Manager App",
    languages: "React, Html, TailwindCSS",
    image: "/taskmanager.png",
    link: "https://taskmanager-shauryam.vercel.app/",
  },
  {
    title: "Smart Canteen",
    languages: "Python, MySQL, Flask, Bootstrap",
    image: "/smartcanteen.png",
    link: "https://github.com/Shauryam-singh/Smart-Canteen",
  },
  {
    title: "Shyama Ventures",
    languages: "React, TailwindCSS, firebase",
    image: "/shyamaventures.png",
    link: "https://github.com/Shauryam-singh/Shyama-Ventures",
  },
  {
    title: "Advance Attendance",
    languages: "Python, Flask, Html, CSS",
    image: "/attendance.png",
    link: "https://github.com/Shauryam-singh/Advance-Attendance",
  },
  {
    title: "Women Safety",
    languages: "Python, Flask, OpenCV, Mediapipe",
    image: "/womensafety.png",
    link: "https://github.com/Shauryam-singh/Women-Safety",
  },
  {
    title: "Herbal Garden",
    languages: "Python, Flask, OpenCV, Mediapipe",
    image: "/herbalgarden.png",
    link: "https://github.com/Shauryam-singh/Virtual-Herbal-Garden",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};

export default function Project() {
  return (
    <section
      id="project"
      data-scroll-index={4}
      className="section projects-section bg-gray-50 min-h-screen flex flex-col justify-center py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h4 className="text-3xl font-semibold text-gray-900">Projects</h4>
          <hr className="w-16 h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
          <p className="text-gray-600 text-lg">What I Have Made.</p>
        </div>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-3">
              <motion.div
                className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
              >
                {/* Project Image */}
                <div className="aspect-w-16 aspect-h-9">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-lg"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                </div>

                {/* Project Info */}
                <div className="p-4 bg-white text-gray-900 rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.languages}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
