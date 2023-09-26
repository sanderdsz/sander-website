"use client";

import { PageWrapper } from "@/components/pageWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { useComponent } from "@/contexts/componentContext";
import { About } from "@/components/about";

type PageProps = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: PageProps) {
	const component = useComponent();

	return (
		<PageWrapper>
			<main>
				<AnimatePresence>
					{component.aboutComponent && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.25 }}
						>
							<About />
						</motion.div>
					)}
				</AnimatePresence>
			</main>
		</PageWrapper>
	);
}
