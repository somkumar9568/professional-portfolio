import React from "react";

export default function Footer(){
  return (
    <footer className="mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div>© {new Date().getFullYear()} Your Name</div>
        <div style={{color:"var(--muted)"}}>Built with React • Bootstrap • Framer Motion</div>
      </div>
    </footer>
  );
}
