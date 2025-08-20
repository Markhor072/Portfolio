import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "conferences", label: "Conferences" },
    { id: "certificates", label: "Certificates" },
    { id: "awards", label: "Awards" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Shahid Hassan</h1>
          <ul className="flex space-x-4">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`hover:text-blue-600 transition ${
                    activeSection === sec.id ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {sec.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-20">
        {/* Home */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold">
            Hi, I’m Shahid Hassan
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Data Science & AI Enthusiast | Web Developer | Event Organizer
          </p>
          <div className="flex space-x-6 mt-6">
            <a href="/ShahidHassanCV.pdf" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
              <FaDownload className="mr-2" /> Download CV
            </a>
            <a href="https://github.com/Markhor072" target="_blank" className="text-2xl hover:text-gray-700">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/malik-shahid-hassan-khokhar-44a865272/" target="_blank" className="text-2xl hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-100">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="max-w-3xl text-center text-gray-700">
            Experienced professional with a versatile skill set encompassing Data Science, Web Development, Virtual Assistance, and Event Organization. Passionate about leveraging technology to drive efficiency and innovation.
          </p>
        </section>

        {/* Education */}
        <section id="education" className="min-h-screen p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Education</h3>
          <ul className="max-w-2xl mx-auto space-y-4">
            <li>
              🎓 Master in Data Science & Computer Engineering – NUST MISIS, Moscow (2024 – Present)
            </li>
            <li>
              🎓 Bachelor of Science in Computer Science – University of Sargodha (2020 – 2024) | GPA: 3.43/4
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section id="experience" className="min-h-screen p-8 bg-gray-100">
          <h3 className="text-2xl font-bold mb-4 text-center">Work Experience</h3>
          <ul className="max-w-2xl mx-auto space-y-4">
            <li>💼 Chief Organizer – Evolution Pakistan (2023 – Present)</li>
            <li>💼 Amazon Virtual Assistant – Smart Seller 22 Store (2022 – 2023)</li>
            <li>💼 Digital Marketing Expert – A2ZSMM Panel (2019 – 2021)</li>
            <li>💼 Classroom Tutor – Scholars Academy (2021 – 2022)</li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Projects & Research</h3>
          <ul className="max-w-3xl mx-auto space-y-4">
            <li>📊 Data Science Project – Banknote Authentication Dataset (K-Means Clustering)</li>
            <li>💻 Learning Management System (Final Year Project, Web Development)</li>
            <li>📖 Research Interest: Artificial Intelligence, Machine Learning, Deep Learning</li>
          </ul>
        </section>

        {/* Conferences */}
        <section id="conferences" className="min-h-screen p-8 bg-gray-100">
          <h3 className="text-2xl font-bold mb-4 text-center">Conferences & Seminars</h3>
          <ul className="max-w-3xl mx-auto space-y-4">
            <li>🌍 ICST 2023 – International Conference of Science & Technology (Pakistan)</li>
            <li>🌍 GSTMC 2024 – Global Science Technology & Management Conference (Pakistan)</li>
            <li>🌍 ICFAC 2024 – International Conference on Food & Applied Sciences (Pakistan)</li>
            <li>🌍 Moscow International Festival of Student Entrepreneurship 2025</li>
          </ul>
        </section>

        {/* Certificates */}
        <section id="certificates" className="min-h-screen p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Certificates</h3>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>📜 Intro to AI – IBM</p>
            <p>📜 Supervised ML – Stanford & DeepLearning.AI</p>
            <p>📜 Data Science Foundations – University of London</p>
            <p>📜 Technical Support Fundamentals – Google</p>
            <p>📜 AI For Everyone – DeepLearning.AI</p>
            <p>📜 Social Media Marketing – Pakistan Youth Force</p>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="min-h-screen p-8 bg-gray-100">
          <h3 className="text-2xl font-bold mb-4 text-center">Honors & Awards</h3>
          <ul className="max-w-2xl mx-auto space-y-4">
            <li>🏆 Certificate of Appreciation – ICST 2023</li>
            <li>🏆 Certificate of Appreciation – GSTMC 2024</li>
            <li>🏆 Certificate of Achievement – Sports Gala 2022</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-8">
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <p>Email: <a href="mailto:shahidhassankhokhar@gmail.com" className="text-blue-600">shahidhassankhokhar@gmail.com</a></p>
          <p>WhatsApp: +92 3310212514</p>
          <p>Telegram: @markhor072</p>
        </section>
      </div>
    </div>
  );
}
