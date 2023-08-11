import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { DeviceProvider } from "@/contexts/deviceContext";
import {Navbar} from "@/components/navbar";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${spaceGrotesk.className}`}>
				<DeviceProvider>
					<Navbar />
					<div
						className="min-h-screen bg-[url('../../public/Taieri.svg')] bg-gray-100
						dark:bg-gray-600"
					>
						{children}
					</div>
				</DeviceProvider>
			</body>
		</html>
	);
}
