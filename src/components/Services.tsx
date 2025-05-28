export default function Services() {
  return (
    <section
      id="services"
      className="py-16 bg-gray-50 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h4 className="text-3xl font-semibold text-gray-900">Services</h4>
          <hr className="w-16 h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
          <p className="text-gray-600 text-lg">What I Do.</p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* UI/UX Design */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-500 ease-in-out relative flex flex-col items-center text-center">
            <div className="text-blue-500 mb-6 w-16 h-16">
              {/* Icon */}
              <svg className="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M204.3 5C104.9 24.3 38.2 110.3 38.2 210.7c0 66 38.5 123.3 98.9 150.4c0 0 0 0 0 0c6.8 3.5 10.8 11.2 10.5 19.4c-.3 7.8-6.7 14.3-14.5 14.3H102c-17.7 0-32 14.3-32 32c0 17.7 14.3 32 32 32h194.6c53.1 0 97.7-43.1 98-96.2c.3-59.7-44.4-108-99.4-108c-6.6 0-13-3.3-16.5-9.2c-2.4-3.9-3.5-8.4-3.2-12.9c.4-6.7 3.3-13.1 8.3-18c13.9-13.9 21.6-33.2 21.6-53.6c0-43.4-37.1-78.6-79.6-78.6c-8.2 0-16.4 1.6-24 4.8z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
            <p className="text-gray-600">
              Designing intuitive user interfaces and seamless user experiences focused on performance, accessibility, and responsiveness.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-500 ease-in-out relative flex flex-col items-center text-center">
            <div className="text-blue-500 mb-6 w-16 h-16">
              <svg className="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  fill="currentColor"
                  d="M288 288h64v32h-64zm256-176H96c-17.7 0-32 14.3-32 32v224H0v32h640v-32h-64V144c0-17.7-14.3-32-32-32zM96 352V160h448v192H96z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
            <p className="text-gray-600">
              Crafting dynamic and scalable frontends using React, Tailwind CSS, and modern UI libraries to deliver high-quality user interfaces.
            </p>
          </div>

          {/* Backend + API Development */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-500 ease-in-out relative flex flex-col items-center text-center">
            <div className="text-blue-500 mb-6 w-16 h-16">
              <svg className="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  fill="currentColor"
                  d="M64 64h512v128H64V64zm0 192h512v128H64V256zm0 192h512v32H64v-32z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Backend & API Development</h4>
            <p className="text-gray-600">
              Building secure and efficient backend services with Node.js, Python, and PHP. Integrating REST APIs, databases, and server-side logic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
