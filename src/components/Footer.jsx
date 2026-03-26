import { Link } from "react-router-dom";
import { Palette } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Palette className="w-6 h-6 text-gray-900" />
            <span className="text-2xl font-bold text-gray-900">ArtFolio</span>
          </div>
          
          {/* Tagline */}
          <p className="text-gray-600 text-sm text-center">
            Showcase your creative vision and connect with clients worldwide.
          </p>
          
          {/* Copyright */}
          <p className="text-gray-500 text-xs">
            © 2025 ArtFolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;