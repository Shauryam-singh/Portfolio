export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-gray-800">Resume</h4>
          <div className="w-24 mx-auto h-1 bg-blue-500 my-4" />
          <p className="text-gray-600">My Education Background</p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-10">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              {/* Date Box */}
              <div className="bg-blue-100 text-blue-800 text-center px-5 py-3 rounded-xl shadow-md w-36 sm:w-44 shrink-0">
                <h4 className="text-sm font-semibold">{item.from}</h4>
                <div className="text-xs">to</div>
                <h4 className="text-sm font-semibold">{item.to}</h4>
              </div>

              {/* Content Box */}
              <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xl">
                <h4 className="text-xl font-bold text-gray-800">{item.org}</h4>
                <h5 className="text-sm text-blue-500 font-medium mb-2">{item.role}</h5>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Shauryam Singh's Updated Education Data
const educationData = [
  {
    from: "Aug 2023",
    to: "Present",
    org: "SRM University, Delhi-NCR",
    role: "Bachelor's in Computer Science",
    desc: "Currently pursuing a degree in CS while building real-world projects in React, Python, C++, and Node.js. Passionate about full-stack development and solving meaningful problems through code.",
  },
  {
    from: "Apr 2022",
    to: "Mar 2023",
    org: "Central Academy, Lucknow",
    role: "12th Grade (Science Stream)",
    desc: "Completed 12th grade with a focus on physics, chemistry, mathematics, and computer science. Actively participated in coding competitions and technical fests.",
  },
  {
    from: "Apr 2019",
    to: "Mar 2020",
    org: "Central Academy, Lucknow",
    role: "10th Grade",
    desc: "Laid the foundation in core subjects. Discovered a strong interest in programming, web technologies, and building creative digital projects.",
  },
];
