"use client";

import { AnimatePresence, motion } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
	<AnimatePresence>
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<div className="h-full">{children}</div>
		</motion.div>
	</AnimatePresence>
);
