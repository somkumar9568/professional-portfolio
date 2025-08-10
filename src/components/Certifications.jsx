import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const certifications = [
  {
  id: 1,
  title: "PHP Developer",
  issuer: "eWeb A1Professionals Pvt Ltd",
  date: "July 2023",
  description:
    "Developed expertise in PHP, MySQL, and server-side logic to create dynamic, secure, and scalable websites. Contributed to multiple live client projects, implementing custom CMS features and ensuring high performance.",
  },
  {
    id: 2,
    title: "Laravel Developer",
    issuer: "eWeb A1Professionals Pvt Ltd",
    date: "July 2025",
    description:
      "Completed an advanced full-stack development program covering frontend (React, Bootstrap) and backend (Laravel, MySQL) technologies. Designed, developed, and deployed real-world client projects with responsive layouts, optimized performance, and secure coding practices.",
  },
  {
    id: 3,
    title: "WordPress Custom Development & ACF Mastery",
    issuer: "Baseline IT Development",
    date: "May 2025",
    description:
      "Specialized in developing fully custom WordPress themes and plugins using PHP, HTML, CSS, and JavaScript. Utilized Advanced Custom Fields (ACF) to create dynamic, client-friendly backends, enhancing site flexibility, SEO, and user experience. Delivered high-performance websites tailored to specific business needs.",
  }

];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-5"
      style={{
        backgroundColor: "#0f172a",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="container">
        {/* Heading */}
        <motion.h3
          className="text-center fw-bold mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            color: "#e0e7ff",
            fontSize: "2.4rem",
            letterSpacing: "1.5px",
          }}
        >
          Certifications
        </motion.h3>

        {/* Cards */}
        <div className="row gy-4 justify-content-center">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="col-md-6 col-lg-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{
                delay: i * 0.2,
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div
                style={{
                  backgroundColor: "#1e293b",
                  borderRadius: "15px",
                  padding: "25px 30px",
                  cursor: "default",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                className="certification-card"
              >
                <div>
                  <h5
                    style={{
                      color: "#e0e7ff",
                      fontWeight: "700",
                      marginBottom: "8px",
                    }}
                  >
                    {cert.title}
                  </h5>
                  <p
                    style={{
                      color: "#94a3b8",
                      marginBottom: "6px",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    {cert.issuer}
                  </p>
                  <p
                    style={{
                      color: "#60a5fa",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {cert.date}
                  </p>
                  <p
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.85rem",
                      marginTop: "8px",
                      lineHeight: "1.5",
                    }}
                  >
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
