"use client"

import {PageWrapper} from "@/components/pageWrapper";

type PageProps = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Home({searchParams}: PageProps) {

	return (
		<PageWrapper>
			<main>
			</main>
		</PageWrapper>
	);
}
