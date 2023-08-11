"use client";

import { motion } from "framer-motion";

export const PageWrapper = ({children}: {
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
  >
    <div className="h-full">
      {children}
    </div>
  </motion.div>
);