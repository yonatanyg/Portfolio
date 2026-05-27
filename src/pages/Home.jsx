import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="home-container">
      <div className="profile-card">

        {/* Hero */}
        <div className="hero">
          <img
            src="/imgs/profile.png"
            alt="Yonatan Green"
            className="profile-image"
          />
          <div className="hero-text">
            <h1 className="name">Yonatan Green</h1>
            <span className="title-badge">CS Graduate · Developer</span>
          </div>
        </div>

        <div className="divider" />

        {/* About */}
        <div className="section">
          <p className="section-label">About</p>
          <p className="bio">
            Computer Science graduate from Hebrew University. Passionate about software
            development, creative problem-solving, and building things that work elegantly.
            Always looking to grow as a developer and explore new opportunities.
          </p>
        </div>

        <div className="divider" />

        {/* Skills */}
        <div className="section">
          <p className="section-label">Skills</p>
          <ul className="skills-list">
            {["Java", "C#", "C/C++", "JavaScript", "HTML", "CSS", "SQL", "Unity", "Git", "Game Development"].map(s => (
              <li className="skill-item" key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="divider" />

        {/* Hobbies */}
        <div className="section">
          <p className="section-label">Interests</p>
          <ul className="hobbies-list">
            <li className="hobby-item">
              <a
                href="https://letterboxd.com/yonatanyg"
                target="_blank"
                rel="noopener noreferrer"
                className="hobby-link"
              >
                Cinema ↗
              </a>
            </li>
            <li className="hobby-item">Music</li>
            <li className="hobby-item">Chess</li>
          </ul>
        </div>

        <div className="divider" />

        {/* Contact */}
        <div className="contact-btn">
          <a
            href="#contact"
            className="contact-link"
            onClick={(e) => { e.preventDefault(); setShowPopup(true); }}
          >
            Get in Touch →
          </a>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <p className="popup-title">Let's connect</p>
            <p className="popup-text">📧 yonatanyg@gmail.com</p>
            <p className="popup-text">
              <a
                href="https://www.linkedin.com/in/yonatanyg123/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </p>
            <button className="popup-close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;