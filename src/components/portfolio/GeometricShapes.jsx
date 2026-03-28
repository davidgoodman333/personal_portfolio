import React from "react";
import { motion } from "framer-motion";

export function FloatingTriangle({ className = "", delay = 0, size = 80 }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <polygon points="50,10 90,90 10,90" fill="#266843" opacity="0.15" />
        <polygon points="50,10 90,90 10,90" stroke="#266843" strokeWidth="2" fill="none" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

export function FloatingCircle({ className = "", delay = 0, size = 60, color = "#abbc83" }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" fill={color} opacity="0.12" />
        <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="2" fill="none" opacity="0.35" />
      </svg>
    </motion.div>
  );
}

export function FloatingDiamond({ className = "", delay = 0, size = 50 }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -12, 0], rotate: [45, 50, 45] }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="15" y="15" width="70" height="70" fill="#dca563" opacity="0.15" transform="rotate(45 50 50)" />
        <rect x="15" y="15" width="70" height="70" stroke="#dca563" strokeWidth="2" fill="none" opacity="0.4" transform="rotate(45 50 50)" />
      </svg>
    </motion.div>
  );
}

export function FloatingHexagon({ className = "", delay = 0, size = 70, color = "#266843" }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -18, 0], rotate: [0, -8, 0] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill={color} opacity="0.1" />
        <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" stroke={color} strokeWidth="2" fill="none" opacity="0.3" />
      </svg>
    </motion.div>
  );
}

export function GridPattern({ className = "" }) {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity: 0.04 }}>
      <svg width="100%" height="100%">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#266843" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}