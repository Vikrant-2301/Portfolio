"use client";

import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Loader2 } from "lucide-react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ url }) {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Measure the container width to scale the PDF appropriately
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Prevent right click to make downloading harder
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      className="flex-1 overflow-y-auto overflow-x-hidden bg-[#121212] custom-scrollbar" 
      ref={containerRef}
      onContextMenu={handleContextMenu}
    >
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex flex-col items-center justify-center h-64 text-gray-400 gap-4">
            <Loader2 className="animate-spin" size={32} />
            <p>Loading Portfolio...</p>
          </div>
        }
        error={
          <div className="flex items-center justify-center h-64 text-red-400">
            <p>Failed to load PDF file.</p>
          </div>
        }
      >
        {Array.from(new Array(numPages || 0), (el, index) => (
          <div key={`page_${index + 1}`} className="mb-4 flex justify-center shadow-lg mx-auto bg-white" style={{ width: 'fit-content' }}>
            <Page 
              pageNumber={index + 1} 
              width={containerWidth ? containerWidth - 32 : undefined} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="max-w-full"
            />
          </div>
        ))}
      </Document>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}} />
    </div>
  );
}
