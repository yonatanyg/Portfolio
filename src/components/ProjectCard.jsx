import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ title, description, images, videoUrl, youtubeUrl }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handlePrev = () =>
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="image-carousel">
        {images.length > 1 && (
          <button className="carousel-btn" onClick={handlePrev}>‹</button>
        )}
        <img
          src={images[currentImageIndex]}
          alt={title}
          onClick={() => setIsImageOpen(true)}
        />
        {images.length > 1 && (
          <button className="carousel-btn" onClick={handleNext}>›</button>
        )}
      </div>

      {videoUrl && (
        <button className="video-button" onClick={() => setIsVideoOpen(true)}>
          ▶ Play Video
        </button>
      )}

      {youtubeUrl && (
        <a className="video-button" href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          ▶ Watch on YouTube
        </a>
      )}

      {isVideoOpen && (
        <div className="video-modal" onClick={() => setIsVideoOpen(false)}>
          <div className="video-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsVideoOpen(false)}>✕</button>
            <video controls autoPlay width="100%">
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {isImageOpen && (
        <div className="image-modal" onClick={() => setIsImageOpen(false)}>
          <div className="image-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsImageOpen(false)}>✕</button>
            <img src={images[currentImageIndex]} alt={title} />
          </div>
        </div>
      )}
    </div>
  );
}