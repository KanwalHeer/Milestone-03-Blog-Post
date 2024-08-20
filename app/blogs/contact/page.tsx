// Importing FontAwesome icons
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link";

function Contact() {
  return (
    <div className="px-4 lg:px-8 py-8">
      <h1 className="text-center text-3xl font-extrabold mb-12">Contact Me</h1>

      <div className="max-w-4xl mx-auto p-6 lg:p-8 rounded-2xl shadow-2xl bg-[#f8f5f4]">
        <h3 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl mb-4 text-center">
          Let&apos;s Discuss Your Next Project
        </h3>
        <p className="text-gray-600 mb-4 text-center">
          Interested in a new technology project or have a question about my
          latest blog posts? Whether you are looking to explore new technologies
          or need advice on your current project, I’d love to hear from you.
          Reach out and let’s start a conversation about how we can collaborate
          on exciting new projects!
        </p>
        <div className="mt-6 text-center">
          <Link href={"https://mail.google.com/alikanwal382@gmail.com"}>
            <button className="bg-[#270d0d]/100 text-white text-center py-2 px-4 rounded-lg hover:bg-[#270d0d]/10 hover:text-gray-800 transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>

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
