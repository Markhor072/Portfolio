import React from "react";
import { useAbout } from "./hooks/useSanity";

export default function App() {
  const about = useAbout();

  if (!about) return <p className="text-center mt-20 text-gray-400">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg leading-relaxed">{about.bio}</p>
    </div>
  );
}
import React from "react";
import {
  useAbout,
  useEducation,
  useExperience,
  useProjects,
  useCertificates,
  useConferences,
  useAwards,
  useContact,
} from "./hooks/useSanity";

export default function App() {
  const about = useAbout();
  const education = useEducation();
  const experience = useExperience();
  const projects = useProjects();
  const certificates = useCertificates();
  const conferences = useConferences();
  const awards = useAwards();
  const contact = useContact();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-12 space-y-20">

        {/* About */}
        <section id="about">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg">{about?.bio}</p>
        </section>

        {/* Education */}
        <section id="education">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          {education?.map((edu, i) => (
            <div key={i} className="mb-3">
              <h3 className="text-xl font-bold">{edu.degree} - {edu.university}</h3>
              <p className="text-sm">{edu.year}</p>
              <p>{edu.details}</p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>
          {experience?.map((exp, i) => (
            <div key={i} className="mb-3">
              <h3 className="text-xl font-bold">{exp.role} @ {exp.company}</h3>
              <p className="text-sm">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          {projects?.map((proj, i) => (
            <div key={i} className="mb-3">
              <h3 className="text-xl font-bold">{proj.title}</h3>
              <p>{proj.description}</p>
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noreferrer" className="text-blue-300 underline">
                  View Project
                </a>
              )}
            </div>
          ))}
        </section>

        {/* Certificates */}
        <section id="certificates">
          <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
          {certificates?.map((cert, i) => (
            <div key={i} className="mb-3">
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p>{cert.issuer} ({cert.year})</p>
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noreferrer" className="text-blue-300 underline">
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </section>

        {/* Conferences */}
        <section id="conferences">
          <h2 className="text-3xl font-semibold mb-4">Conferences</h2>
          {conferences?.map((conf, i) => (
            <div key={i} className="mb-3">
              <h3 className="text-xl font-bold">{conf.title}</h3>
              <p>{conf.year} - {conf.location}</p>
              <p>{conf.details}</p>
            </div>
          ))}
        </section>

        {/* Awards */}
        <section id="awards">
          <h2 className="text-3xl font-semibold mb-4">Awards</h2>
          {awards?.map((award, i) => (
            <div key={i} className="mb-3">
              <h3 className="text-xl font-bold">{award.title}</h3>
              <p>{award.issuer} ({award.year})</p>
            </div>
          ))}
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          {contact && (
            <ul className="space-y-2">
              <li>Email: <a href={`mailto:${contact.email}`} className="text-blue-300">{contact.email}</a></li>
              <li>Phone: {contact.phone}</li>
              <li>WhatsApp: {contact.whatsapp}</li>
              <li>Telegram: {contact.telegram}</li>
              <li><a href={contact.github} target="_blank" rel="noreferrer" className="text-blue-300">GitHub</a></li>
              <li><a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-blue-300">LinkedIn</a></li>
            </ul>
          )}
        </section>

      </div>
    </div>
  );
}
