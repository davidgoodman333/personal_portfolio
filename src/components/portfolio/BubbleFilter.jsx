import React from "react";
import { motion } from "framer-motion";

const CATEGORY_COLORS = {
  All: "#266843",
  "Web Development": "#266843",
  "Data Science": "#266843",
  "UI/UX Design": "#dca563",
  "Game Development": "#abbc83",
};

export default function BubbleFilter({ active, onSelect, categories = [] }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((label) => {
        const isActive = active === label;
        const color = CATEGORY_COLORS[label] || "#266843";
        return (
          <motion.button
            key={label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(label)}
            className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border"
            style={{
              backgroundColor: isActive ? color : "transparent",
              borderColor: isActive ? color : "hsl(var(--border))",
              color: isActive ? "#fff" : "hsl(var(--muted-foreground))",
            }}
          >
            {/* Decorative dot */}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mr-2"
              style={{
                backgroundColor: isActive ? "#fff" : color,
                opacity: isActive ? 0.6 : 0.5,
              }}
            />
            {label}
          </motion.button>
        );
      })}
    </div>
  );
}
