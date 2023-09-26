"use client";

import { PageWrapper } from "@/components/pageWrapper";
import { Window } from "@/components/window";
import { useDevice } from "@/contexts/deviceContext";
import { Circuitry, Cpu, Disc, TerminalWindow } from "@phosphor-icons/react";

export const About = () => {
	const device = useDevice();

	return (
		<PageWrapper>
			<Window
				height={device.deviceWidth < 640 ? 35 : 30}
				width={device.deviceWidth < 640 ? 22 : 45}
			>
				<div className="h-full p-6 flex flex-col gap-8 md:p-8 md:gap-10 md:flex-row md:justify-between md:items-center">
					<div className="flex flex-col items-center gap-2 md:gap-4 md:w-1/2">
						<img
							className="border-2 border-gray-400 rounded-full"
							height={device.deviceWidth < 640 ? 80 : 120}
							width={device.deviceWidth < 640 ? 80 : 120}
							src={"https://avatars.githubusercontent.com/u/49321724?v=4"}
						/>
						<div className="flex flex-col gap-2 md:gap-4">
							<span className="text-xl font-bold">
								Sander dos Santos Zuchinalli
							</span>
							<span>
								I’m a software engineer specialized in building (occasionally
								designing) excellent digital experiences, which I tend to switch
								between backend and frontend technologies at NTT Data.
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-2 md:gap-4 md:w-1/2">
						<div className="text-lg md:text-2xl">
							<span className="mr-1 font-bold">KyrieOS</span>
							<span className="font-thin">Version 2</span>
						</div>
						<span className="text-lg">Made under NEXT.js</span>
						{device.deviceWidth > 640 && (
							<span className="text-lg">Ubuntu 22.04 LTS Generic Linux</span>
						)}
						<span className="flex items-center text-sm md:text-lg">
							<Circuitry
								className="mr-2"
								width={device.deviceWidth < 640 ? 25 : 30}
								height={device.deviceWidth < 640 ? 25 : 30}
								weight={"duotone"}
							/>
							Intel i5-8250uU (3) @ 1.8 GHz
						</span>
						<span className="flex items-center">
							<Cpu
								className="mr-2"
								width={device.deviceWidth < 640 ? 25 : 30}
								height={device.deviceWidth < 640 ? 25 : 30}
								weight={"duotone"}
							/>
							Intel Iris Graphics 520M
						</span>
						<span className="flex items-center">
							<Disc
								className="mr-2"
								width={device.deviceWidth < 640 ? 25 : 30}
								height={device.deviceWidth < 640 ? 25 : 30}
								weight={"duotone"}
							/>
							2588 MiB / 16000 MiB
						</span>
						<span className="flex items-center">
							<TerminalWindow
								className="mr-2"
								width={device.deviceWidth < 640 ? 25 : 30}
								height={device.deviceWidth < 640 ? 25 : 30}
								weight={"duotone"}
							/>
							Bash 4.4.23
						</span>
					</div>
				</div>
			</Window>
		</PageWrapper>
	);
};
