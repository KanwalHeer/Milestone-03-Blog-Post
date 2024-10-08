// Importing FontAwesome icons
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="px-4 lg:px-8 py-8">
      <h1 className="text-center text-3xl font-extrabold mb-12">About Me</h1>

      <div className="max-w-4xl mx-auto p-6 lg:p-8 rounded-2xl shadow-2xl bg-[#f8f5f4]">
        <h2 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl mb-4 text-center">
          A Little About My Journey
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          I am a Full-Stack Developer with over a year of experience in creating
          dynamic and responsive web applications. My journey in the tech world
          has been both exciting and rewarding, with numerous projects completed
          that showcase my skills in both frontend and backend development.
        </p>
        <p className="text-gray-600 mb-4 text-center">
          I have a passion for technology and enjoy sharing my knowledge through
          blog posts. You can find my latest articles and insights on various
          technology topics on my LinkedIn profile. Feel free to connect with me
          to discuss potential projects, explore new technologies, or simply
          share ideas!
        </p>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-600 hover:text-[#270d0d]/100 text-3xl transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-gray-600 hover:text-[#270d0d]/100 text-3xl transition-colors" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-600 hover:text-[#270d0d]/100 text-3xl transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
