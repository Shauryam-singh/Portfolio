import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    toast.loading("Sending message...", { id: "send" });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!", { id: "send" });
        form.current?.reset();
      })
      .catch(() => {
        toast.error("Failed to send message.", { id: "send" });
      });
  };

  return (
    <section id="contact" data-scroll-index="6" className="section contact-section py-16 bg-gray-50">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-semibold">Take a Coffee &amp; chat with me</h3>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-8 mb-10">
          <a href="#" className="flex items-center space-x-4">
            <img src="/email.png" alt="Email" className="w-8 h-8" />
            <span className="text-gray-700">shauryamsingh9@gmail.com</span>
          </a>
          <a href="#" className="flex items-center space-x-4">
            <img src="/phone.png" alt="Phone" className="w-8 h-8" />
            <span className="text-gray-700">+91 6307257097</span>
          </a>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Your Name"
                className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 placeholder-transparent text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <label htmlFor="user_name" className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                placeholder="name@example.com"
                className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 placeholder-transparent text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <label htmlFor="user_email" className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
                Email Address
              </label>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 placeholder-transparent text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <label htmlFor="subject" className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
              Subject
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              id="message"
              placeholder="Leave a comment here"
              style={{ height: "150px" }}
              required
              className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 placeholder-transparent text-gray-900 resize-none focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <label htmlFor="message" className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
              Your Message here
            </label>
          </div>

          <div className="text-center">
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
              SEND INQUIRY
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
