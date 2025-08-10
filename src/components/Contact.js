import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const actionUrl = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT";

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <div className="container">
        <motion.h3
          className="mb-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h3>

        <div className="row g-4">
          {/* Contact Info */}
          <motion.div
            className="col-md-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card-custom p-4 h-100">
             <h5 className="mb-3 text-light">Get in Touch</h5>
              <p style={{ color: "var(--muted)" }}>
                I'm available for freelance projects. Send a message and I’ll reply within 24–48 hours.
              </p>
              <ul style={{ color: "var(--muted)", listStyle: "none", paddingLeft: 0 }}>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@yourmail.com" className="text-light text-decoration-none">
                    info@yourmail.com
                  </a>
                </li>
                <li>
                  <strong>Location:</strong> Saharanpur, India
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="col-md-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form action={actionUrl} method="POST" className="card-custom p-4">
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary w-100 py-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
