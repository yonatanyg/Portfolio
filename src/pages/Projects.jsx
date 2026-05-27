import React from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

const generalProjects = [
  {
    title: "Boggle",
    description: "Boggle game developed with Guy Fusfeld",
    images: ["/imgs/boggle1.png"],
    videoUrl: "vids/boggle.mp4",
  },
  {
    title: "AsciiArt",
    description: "Creates images from ASCII characters",
    images: ["/imgs/ascii/ascii1.png", "/imgs/ascii/ascii2.png", "/imgs/ascii/ascii3.png", "/imgs/ascii/UML.png"],
    videoUrl: "vids/asciiArt.mp4",
  },
  {
    title: "Rush Hour AI",
    description: "Rush Hour AI Agents developed with two peers",
    images: ["/imgs/RushHour/rh1.png"],
    videoUrl: "vids/rushourai.mp4",
  },
  {
    title: "Blending Images",
    description: "Smooth image blending using a pyramid-based algorithm",
    images: ["/imgs/blend/blend2.png", "/imgs/blend/blend3.png", "/imgs/blend/blend4.png", "/imgs/blend/blend5.png", "/imgs/blend/blend1.png"],
  },
];

const unityProjects = [
  {
    title: "The Way of the Dodo",
    description: "Developed with Bezalel Academy — a team of four. Help a dodo reach the dodo girl by manipulating the environment while the dodo moves autonomously.",
    images: ["/imgs/Dodo/dodo1.png", "/imgs/Dodo/dodo2.png", "/imgs/Dodo/dodo3.png", "/imgs/Dodo/dodo4.png"],
    youtubeUrl: "https://www.youtube.com/watch?v=XnXPDlK_Ux4",
  },
  {
    title: "MineMania",
    description: "Developed with Bezalel Academy — a team of four. Multiplayer game combining Snake and Bomberman.",
    images: ["/imgs/MineMania/mania1.png", "/imgs/MineMania/mania2.png", "/imgs/MineMania/mania3.png"],
    youtubeUrl: "https://www.youtube.com/watch?v=X4mvZVMu9y8",
  },
  {
    title: "Escape Room: Movies pt.1",
    description: "Movie-themed escape room built in Unity.",
    images: ["/imgs/erm/erm1.png", "/imgs/erm/erm2.png", "/imgs/erm/erm3.png", "/imgs/erm/erm4.png"],
    youtubeUrl: "https://www.youtube.com/watch?v=dlTOyIeNwYU",
  },
  {
    title: "Escape Room: Movies pt.2",
    description: "Sequel to the movie escape room.",
    images: ["/imgs/erm/erm_pt2_1.png", "/imgs/erm/erm_pt2_2.png", "/imgs/erm/erm_pt2_3.png", "/imgs/erm/erm_pt2_4.png"],
    youtubeUrl: "https://www.youtube.com/watch?v=_C1KDPDs9rw",
  },
  {
    title: "Escape Room: Movies pt.3",
    description: "Third entry in the escape room series.",
    images: ["/imgs/erm/erm_pt3_1.png", "/imgs/erm/erm_pt3_2.png", "/imgs/erm/erm_pt3_3.png"],
    youtubeUrl: "https://www.youtube.com/watch?v=OiSvwef05ds",
  },
  {
    title: "Escape Room: Avatar",
    description: "Avatar-themed escape room built in Unity.",
    images: ["/imgs/Avatar/er_avatar1.png", "/imgs/Avatar/er_avatar2.png", "/imgs/Avatar/er_avatar3.png"],
    youtubeUrl: "https://www.youtube.com/watch?v=jV54CbDJVKI",
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-text">Work developed throughout my time at university.</p>
      </div>

      <p className="section-heading">General</p>
      <div className="projects-carousel">
        {generalProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="unity-section">
        <p className="section-heading">Unity Games</p>
        <a href="https://yonatanyg.itch.io/" target="_blank" rel="noopener noreferrer" className="itch-link">
          View on itch.io ↗
        </a>
        <div className="projects-carousel">
          {unityProjects.map((project, index) => (
            <ProjectCard key={`unity-${index}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}