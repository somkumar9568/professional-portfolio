import React from "react";
import { motion } from "framer-motion";
import img1 from './images/Project1.png';

const projects = [
  {
    id: 1,
    title: "Custom WordPress Theme",
    desc: "Developed a modern, SEO-optimized WordPress theme from scratch for a local business, including custom widgets and advanced custom fields.",
    tech: ["WordPress Custom", "PHP","JavaScript", "Jquery", "Ajax"],
    img: img1,
    live: "https://www.mesinc.net/",
  },
  {
    id: 2,
    title: "E-commerce Platform (Laravel)",
    desc: "Built a scalable e-commerce platform with Laravel featuring product management, cart, checkout, and payment integration.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap",],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    live: "https://example-laravel-shop.com",
    repo: "https://github.com/yourusername/laravel-ecommerce"
  },
  {
    id: 3,
    title: "Portfolio Website (React)",
    desc: "A sleek portfolio website showcasing projects, blogs, and contact forms with React, Framer Motion, and Tailwind CSS.",
    tech: ["React","Bootstrap","Firebase"],
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    live: "https://your-portfolio.netlify.app",
    repo: "https://github.com/yourusername/react-portfolio"
  }
];

// Hover fadeUp variant
const fadeUpOnHover = {
  initial: { opacity: 1, y: 0 }, // stays still initially
  hover: { opacity: 1, y: -10, transition: { duration: 0.4 } } // slight lift on hover
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-5"
      style={{
        backgroundColor: "#0f172a",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      <div className="container">
        {/* Heading */}
        <h3
          className="text-center fw-bold mb-5"
          style={{ color: "#e0e7ff", fontSize: "2.4rem", letterSpacing: "1.5px" }}
        >
          Projects
        </h3>

        {/* Projects Grid */}
        <div className="row gy-5">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              className="col-md-6 col-lg-4"
              variants={fadeUpOnHover}
              initial="initial"
              whileHover="hover"
            >
              <div
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundColor: "#1e293b",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease"
                }}
              >
                {/* Image */}
                <div style={{ height: 180, overflow: "hidden" }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      borderBottom: "3px solid #3b82f6"
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h5
                    style={{
                      color: "#e0e7ff",
                      fontWeight: "700",
                      marginBottom: "10px",
                      minHeight: "56px",
                      lineHeight: "1.2",
                      fontSize: "1.3rem"
                    }}
                  >
                    {p.title}
                  </h5>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.95rem",
                      minHeight: "64px",
                      fontWeight: 500
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
                          color: "#fff",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "0.85rem",
                          fontWeight: "600",
                          boxShadow: "0 3px 12px rgba(59, 130, 246, 0.4)"
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm me-3"
                      style={{
                        padding: "8px 22px",
                        borderRadius: "30px",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        backgroundColor: "#3b82f6",
                        borderColor: "#3b82f6"
                      }}
                    >
                      Live Demo
                    </a>
                    {/* <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm"
                      style={{
                        padding: "8px 22px",
                        borderRadius: "30px",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        borderWidth: "2px",
                        borderColor: "#3b82f6",
                        color: "#3b82f6"
                      }}
                    >
                      Source Code
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
