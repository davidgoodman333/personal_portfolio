import React from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  { label: "All", color: "#266843" },
  { label: "Web Development", color: "#266843" },
  { label: "IoT", color: "#abbc83" },
  { label: "Communication", color: "#dca563" },
  { label: "Mobile Apps", color: "#abbc83" },
  { label: "Data Science", color: "#266843" },
  { label: "UI/UX Design", color: "#dca563" },
];

export default function BubbleFilter({ active, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.label;
        return (
          <motion.button
            key={cat.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(cat.label)}
            className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border"
            style={{
              backgroundColor: isActive ? cat.color : "transparent",
              borderColor: isActive ? cat.color : "hsl(var(--border))",
              color: isActive ? "#fff" : "hsl(var(--muted-foreground))",
            }}
          >
            {/* Decorative dot */}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mr-2"
              style={{
                backgroundColor: isActive ? "#fff" : cat.color,
                opacity: isActive ? 0.6 : 0.5,
              }}
            />
            {cat.label}
          </motion.button>
        );
      })}
    </div>
  );
}