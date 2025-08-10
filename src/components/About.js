import React from "react";
import { motion } from "framer-motion";

export default function About() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };


  const highlights = [
    {
      title: "Modern Web Development",
      desc: "Specializing in cutting-edge technologies like React, PHP, and API integrations to deliver fast, secure, and scalable web solutions. My approach ensures seamless user experiences and maintainable code for long-term success."
    },
    {
      title: "Responsive Design",
      desc: "Crafting mobile-first, pixel-perfect layouts that adapt beautifully to every screen size. I focus on intuitive interfaces and clean aesthetics, ensuring accessibility and flawless performance across devices for a consistent brand experience."
    },
    {
      title: "Freelance Expertise",
      desc: "Delivering high-quality, custom solutions with a proven record of client satisfaction on platforms like Upwork. I prioritize clear communication, timely delivery, and creative problem-solving to help businesses achieve their digital goals."
    },
    {
      title: "End-to-End Project Delivery",
      desc: "Managing the complete development process—from planning and design to coding, testing, and deployment—ensuring every project is delivered on time, within budget, and exceeding client expectations."
    }
  ];



  return (
    <section id="about" className="py-5 bg-dark text-light position-relative">
      <div className="container">
        {/* Heading */}
        <motion.h2
          className="text-center mb-4 fw-bold display-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="lead text-center mx-auto"
          style={{ maxWidth: "800px", color: "var(--muted)" }}
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I’m a dedicated <strong>Full-Stack PHP & React Developer</strong> 
          helping businesses and entrepreneurs bring their ideas to life 
          through modern, scalable, and user-friendly web applications.  
          With expertise in <strong>PHP, React, MySQL, Node.js, and Bootstrap</strong>, 
          I deliver pixel-perfect designs with smooth animations and 
          top-notch performance.
        </motion.p>

        {/* Highlights */}
        <div className="row mt-5" style={{ justifyContent: "flex-start" }}>
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-3 mb-4 text-start"
              variants={fadeUp}
              custom={index * 0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                className="p-4 rounded shadow-lg h-100"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h5 className="fw-bold mb-2" style={{ color: "var(--accent)" }}>
                  {item.title}
                </h5>
                <p style={{ color: "var(--muted)" }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Call to Action */}
        <motion.div
          className="text-center mt-5"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="btn btn-primary px-5 py-3 shadow-lg"
            style={{
              borderRadius: "30px",
              fontSize: "1.1rem",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
