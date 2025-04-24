import "./Resume.css";
import { useState, useEffect } from "react";
//import { Document, Page, pdfjs } from "react-pdf";

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Resume() {
  const [width, setWidth] = useState(window.innerWidth);
  const [error, setError] = useState(null); // To track any errors
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 1024 ? 1.7 : width > 768 ? 1.2 : 0.6;

  const handleLoadSuccess = () => {
    setLoading(false);
  };

  const handleLoadError = (error) => {
    setError(error);
    setLoading(false); // Stop loading on error
  };

  return (
    <div className="resume-wrapper">
      {/* Updated href to use correct path */}
      <a href="/cv.pdf" download className="download-button">
        ⬇ Download CV
      </a>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className="resume">
          <Viewer fileUrl="/cv.pdf" />
        </div>
      </Worker>
      {/* <Document
        file="/cv.pdf" // Correct path to the PDF
        className="pdf-viewer"
        onLoadSuccess={handleLoadSuccess} // Handle successful load
        onLoadError={handleLoadError} // Handle errors during load
      >
        <Page pageNumber={1} scale={scale} />
      </Document> */}
    </div>
  );
}
