import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "./images/Som kumar.png";

export default function Hero() {
  const roles = [
    "Som Kumar",
    "a PHP Developer",
    "a WordPress Developer",
    "a Full-Stack Developer",
    "an Upwork Freelancer",
  ];

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 40 : 120;
    const pauseTime = 1800;

    if (!deleting && charIndex < roles[index].length) {
      const timeout = setTimeout(() => {
        setDisplayText(roles[index].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!deleting && charIndex === roles[index].length) {
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(roles[index].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, deleting, index, roles]);

  return (
    <section
      id="home"
      className="hero text-center d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d1117, #161b22)",
        color: "#e0e0e0",
        paddingTop: "80px",
        paddingBottom: "80px",
        flexDirection: "column",
        justifyContent: "center",
      }}
      aria-label="Introduction"
    >
      {/* Profile Image */}
      <motion.img
        src={img1}
        alt="Avatar of Som Kumar"
        className="hero-img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(14,165,233,0.6)" }}
      />

      {/* Heading with Typing Effect */}
      <motion.h1
        className="fw-bold hero-title"
        style={{ color: "#58a6ff", marginBottom: 12 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
      >
        Hi, I'm{" "}
        <span style={{ color: "var(--accent)" }}>
          {displayText}
          <span className="cursor" aria-hidden="true">
            |
          </span>
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
      >
        Building high-quality, scalable, and modern web applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6, ease: "easeOut" }}
      >
        <motion.a
          href="#projects"
          className="btn btn-primary btn-lg"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 20px rgba(0,123,255,0.4)" }}
          whileTap={{ scale: 0.97 }}
        >
          View Projects
        </motion.a>

        <motion.a
          href="#contact"
          className="btn btn-outline-light btn-lg"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 20px rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.97 }}
        >
          Hire Me
        </motion.a>
      </motion.div>

      {/* Styles */}
      <style>{`
        .hero-img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 4px solid var(--accent);
          box-shadow: 0 0 30px rgba(14,165,233,0.4);
          margin-bottom: 30px;
          cursor: default;
        }
        .hero-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
        }
        .hero-subtitle {
          color: var(--muted);
          max-width: 540px;
          margin: 0 auto;
          font-size: clamp(1rem, 2.5vw, 1.1rem);
        }
        .hero-buttons {
          margin-top: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .cursor {
          display: inline-block;
          margin-left: 3px;
          font-weight: 700;
          color: var(--accent);
          animation: blink 1s step-start infinite;
          user-select: none;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
        @media (max-width: 576px) {
          .hero-img {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </section>
  );
}
