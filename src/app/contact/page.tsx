import Navbar from '@//components/Navbar';
import Footer from '@//components/Footer';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen"> 
      
      <Navbar />

      <main className="flex-grow">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-screen"
          style={{
            backgroundImage: "url('/background-image.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Contact Content */}
          <div className="relative py-20 px-8 text-center text-white z-10">
            {/* Contact Header */}
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              We value your input and are here to assist.Whether you have questions, feedback, or insights to share, do not hesitate to get in touch with us.
            </p>

            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="mailto:sairarizvi6@gmail.com"
                className="text-lime-300 hover:text-blue-500 text-4xl transition-all"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/saira-rizvi-3981aa295/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-blue-500 text-4xl transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/sairarizvi67"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-blue-500 text-4xl transition-all"
              >
                <FaGithub />
              </a>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg p-8 shadow-xl">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Full Name"
                    className="w-full border border-red-400 text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email Address"
                    className="w-full border border-red-400 text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="What would you like to say?"
                    className="w-full border border-red-400 text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={6}
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}