"use client"

import { Navbar } from "@/components/navbar";
import {Window} from "@/components/window";
import {useDevice} from "@/contexts/deviceContext";
import {useRouter} from "next/navigation";
import {AnimatePresence, MotionConfig, motion} from "framer-motion";
import {PageWrapper} from "@/components/pageWrapper";

type PageProps = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Home({searchParams}: PageProps) {
	const device = useDevice();
	const showModal = searchParams?.window == "about";

	return (
		<PageWrapper>
			<main>
			</main>
		</PageWrapper>
	);
}
