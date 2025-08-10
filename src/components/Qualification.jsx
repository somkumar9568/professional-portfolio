import React from "react";
import { motion } from "framer-motion";

const qualifications = [
  {
  year: "2016",
  title: "Higher Secondary (10th Grade)",
  institution: "National Model Inter College",
  description:
    "Specialized in the Science stream (Physics, Chemistry, Mathematics) with a strong foundation in logical reasoning and problem-solving."
  },
  {
    year: "2018",
    title: "Secondary School (10th Grade)",
    institution: "National Model Inter College",
    description:
      "Specialized in the Science stream (Physics, Chemistry, Mathematics) with a strong foundation in logical reasoning and problem-solving.",
  },
  {
    year: "2018 - 2022",
    title: "Bachelor of Technology (B Tech)",
    institution: "AKTU University",
    description:
      "Focused on web development, database management, and modern programming practices."
  }
];

export default function Qualification() {
  return (
    <section id="qualification" className="py-5" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h3 className="fw-bold" style={{ color: "#1e293b" }}>Qualification</h3>
          <p style={{ maxWidth: "600px", margin: "auto", color: "#475569" }}>
            My educational journey and the milestones that shaped my career as a web developer.
          </p>
        </motion.div>

        <div className="timeline">
          {qualifications.map((qual, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <span className="timeline-year">{qual.year}</span>
                <h5>{qual.title}</h5>
                <h6 className="text-muted">{qual.institution}</h6>
                <p>{qual.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          margin: 20px 0;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%);
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
        }
        .timeline-item {
          position: relative;
          width: 50%;
          padding: 25px 50px;
        }
        .timeline-item:nth-child(odd) {
          left: 0;
          text-align: right;
        }
        .timeline-item:nth-child(even) {
          left: 50%;
        }
        .timeline-content {
          background: #ffffff;
          padding: 25px 30px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(14, 30, 37, 0.1);
          transition: box-shadow 0.3s ease;
        }
        .timeline-content:hover {
          box-shadow: 0 12px 28px rgba(14, 30, 37, 0.2);
        }
        .timeline-year {
          display: inline-block;
          font-weight: 700;
          color: #3b82f6;
          margin-bottom: 8px;
          font-size: 0.95rem;
        }
        h5 {
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 6px;
        }
        h6.text-muted {
          color: #64748b;
          font-weight: 500;
          margin-bottom: 10px;
          font-style: italic;
        }
        p {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 0;
        }
        @media (max-width: 768px) {
          .timeline::before {
            left: 12px;
            height: 100%;
          }
          .timeline-item {
            width: 100%;
            padding-left: 40px;
            padding-right: 0;
            text-align: left !important;
          }
          .timeline-item:nth-child(even) {
            left: 0;
          }
        }
      `}</style>
    </section>
  );
}
