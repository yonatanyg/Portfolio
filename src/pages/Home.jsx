import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="home-container">
      <div className="profile-card">
        {/* Profile Image */}
        <div className="profile-container">
          <img
            src="/imgs/profile.png"
            alt="Yonatan Green"
            className="profile-image"
          />
        </div>

        {/* About Me */}
        <div className="text-center about-me">
          <h1 className="name">Hi, I'm Yonatan Green</h1>
          <p className="bio">
            Hi, I'm Yonatan, a Computer Science student at Hebrew University,
            graduating this year. I'm passionate about software development,
            with a special place at heart for game dev. I enjoy tackling
            challenges and finding creative solutions through programming. As I
            prepare to graduate, I'm excited to continue growing as a developer
            and explore new opportunities.
          </p>
        </div>

        {/* Key Skills */}
        <div className="skills">
          <h2 className="skills-title">Key Skills</h2>
          <ul className="skills-list">
            <li className="skill-item">Java</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">C#</li>
            <li className="skill-item">C/C++</li>
            <li className="skill-item">Unity</li>
            <li className="skill-item">Git</li>
            <li className="skill-item">HTML</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">CSS</li>
            <li className="skill-item">Game Development</li>
            <li className="skill-item">Problem Solving</li>
          </ul>
        </div>

        {/* Hobbies */}
        <div className="hobbies">
          <h2 className="hobbies-title">Hobbies</h2>
          <ul className="hobbies-list">
            <li className="hobby-item">
              <a
                href="https://letterboxd.com/yonatanyg"
                target="_blank"
                rel="noopener noreferrer"
                className="hobby-link"
              >
                Cinema
              </a>
            </li>
            <li className="hobby-item">Music</li>
            <li className="hobby-item">Chess</li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="contact-btn">
          <a href="#contact" className="contact-link" onClick={togglePopup}>
            Get in Touch
          </a>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Email: yonatanyg@gmail.com</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/yonatanyg123/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin profile
                </a>
              </p>
              <button onClick={togglePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
