import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript/Jquery", level: 85 },
  { name: "Bootstrap", level: 90 },
  { name: "React", level: 90 },
  { name: "PHP", level: 88 },
  { name: "MySQL", level: 85 },
  { name: "Laravel", level: 87 },
  { name: "Wordpress", level: 75 },
  { name: "Git", level: 92 },
  { name: "Github", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-dark text-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="mb-4 fw-bold">My Skills</h3>
          <p className="mb-5"
            style={{
              maxWidth: "600px",
              margin: "auto",
              background: "linear-gradient(90deg, #00d4ff, #007bff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "500"
            }}>
            I have expertise in crafting responsive, high-performance web applications using modern technologies. My focus is on delivering secure, scalable, and visually appealing solutions that provide exceptional user experiences and meet diverse client requirements with precision and efficiency.
          </p>

        </motion.div>

        <div className="row">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="col-md-6 mb-4"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="d-flex justify-content-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div
                style={{
                  background: "#444",
                  borderRadius: "50px",
                  overflow: "hidden",
                  height: "10px"
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    height: "10px",
                    background: "linear-gradient(90deg, #007bff, #00d4ff)"
                  }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
