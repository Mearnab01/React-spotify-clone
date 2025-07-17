import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Music, Users, TrendingUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../assets";

const links = [
  { name: "Discover", to: "/", icon: Home },
  { name: "Around You", to: "/around-you", icon: Music },
  { name: "Top Artists", to: "/top-artists", icon: Users },
  { name: "Top Charts", to: "/top-charts", icon: TrendingUp },
];

const NavLinks = ({ handleClick }) => (
  <nav className="mt-10 space-y-6">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className={({ isActive }) =>
          `flex items-center px-4 py-3 rounded-xl transition-all ${
            isActive
              ? "bg-gradient-to-r from-purple-600/20 to-blue-500/20 text-white shadow-lg shadow-purple-500/10"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`
        }
        onClick={() => handleClick?.()}
      >
        <item.icon className="w-5 h-5 mr-3" />
        <span className="font-medium">{item.name}</span>
      </NavLink>
    ))}
  </nav>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0 h-full">
        <div
          className="fixed w-64 h-full px-6 py-8 border-r border-gray-800/50 z-10"
          style={{
            background: `linear-gradient(to top left, rgba(18, 18, 134, 0.9), rgba(0, 0, 0, 0.9))`,
          }}
        >
          <div className="flex items-center space-x-3 px-2 mb-10">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              SoundWave
            </span>
          </div>
          <NavLinks />
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-6 right-6 z-30 p-2 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-20">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute inset-y-0 left-0 w-72 h-full px-6 py-8 bg-gradient-to-b from-gray-900 to-gray-800 backdrop-blur-lg shadow-2xl">
            <div className="flex items-center space-x-3 px-2 mb-10">
              <img src={logo} alt="logo" className="h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                SoundWave
              </span>
            </div>
            <NavLinks handleClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
