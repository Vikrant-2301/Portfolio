"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import QRCode from "react-qr-code";
import { Share2, Loader2, Images } from "lucide-react";

// Dynamically import the FlipbookViewer to prevent SSR errors
const FlipbookViewer = dynamic(() => import("@/components/FlipbookViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4 flex-1">
      <Loader2 className="animate-spin" size={32} />
      <p>Initializing Flipbook Engine...</p>
    </div>
  ),
});

export default function PortfolioPage() {
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    // Use the production domain for the QR code so it always works securely
    // Pointing to /portfolio ensures they use the secure viewer on mobile
    setQrUrl("https://vikrant-yadav.site/portfolio");
  }, []);

  return (
    <div className="min-h-screen bg-black/95 text-white flex flex-col items-center py-12 px-4 md:px-8">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-white/10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white flex items-center gap-3">
              <Images className="text-gray-400" size={36} />
              Interactive Portfolio
            </h1>
            <p className="text-gray-400 text-lg">
              Drag pages to turn or use the arrows to navigate through the flipbook.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Flipbook Viewer Container */}
          <div className="lg:col-span-3 bg-white/5 rounded-2xl overflow-hidden border border-white/10 h-[70vh] md:h-[80vh] flex flex-col relative">
            <FlipbookViewer />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* QR Code Card */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                <Share2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scan & Share</h3>
              <p className="text-gray-400 text-sm mb-6">
                Scan this QR code to view the 3D flipbook on your mobile device.
              </p>
              
              <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-[200px] aspect-square flex items-center justify-center">
                {qrUrl ? (
                  <QRCode 
                    value={qrUrl} 
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    viewBox={`0 0 256 256`}
                  />
                ) : (
                  <div className="w-full h-full animate-pulse bg-gray-200 rounded-lg"></div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
