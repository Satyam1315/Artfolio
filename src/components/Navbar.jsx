import { Link } from "react-router-dom";
import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            ArtFolio
          </Link>

          {/* Menu button - visible on all screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors hover:cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Menu - Grid on desktop, Column on mobile */}
        {isOpen && (
          <div className="pb-4 animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Main Navigation Column */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase hidden md:block">
                  Navigation
                </div>
                <Link
                  to="/explore"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Explore
                </Link>
                <Link
                  to="/features"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
              </div>

              {/* Account Column */}
              <div className="space-y-2 md:border-l md:border-gray-200 md:pl-6">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase hidden md:block">
                  Account
                </div>
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-red-700 hover:bg-gray-100 rounded-lg transition-colors border border-red-700 cursor-pointer"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 bg-gray-900 text-white text-center rounded-lg hover:bg-gray-800 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 bg-gray-900 text-white text-center rounded-lg hover:bg-gray-800 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>

              {/* Legal Column */}
              <div className="space-y-2 md:border-l md:border-gray-200 md:pl-6">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                  Legal
                </div>
                <Link
                  to="/terms"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/cookies"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Cookie Policy
                </Link>
                <Link
                  to="/license"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  License
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;