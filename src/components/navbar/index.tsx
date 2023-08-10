"use client";

import { ThemeToggle } from "@/components/themeToggle";
import { BatteryHigh, Flower, WifiMedium } from "@phosphor-icons/react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { Clock } from "@/components/clock";
import { useDevice } from "@/contexts/deviceContext";

export const Navbar = () => {
	const currentDateTime = new Date();
	const formattedDate = format(currentDateTime, "EEE d MMM", { locale: enUS });
	const { deviceWidth } = useDevice();

	return (
		<div className="h-8 pr-4 flex justify-between items-center bg-slate-200 dark:bg-slate-800 dark:text-gray-200">
			<div className="flex items-center justify-between gap-6 pl-4">
				<button>
					<Flower width={25} height={25} weight={"duotone"} />
				</button>
				<button>About</button>
				{deviceWidth > 640 ? (
					<>
						<button>Files</button>
						<button>Settings</button>
					</>
				) : null}
			</div>
			<div className="flex items-center justify-between gap-6">
				{deviceWidth > 640 ? (
					<>
						<div className="flex items-center">
							<span className="text-sm pr-1">75%</span>
							<BatteryHigh width={25} height={25} weight={"duotone"} />
						</div>
						<div>
							<WifiMedium width={25} height={25} weight={"duotone"} />
						</div>
					</>
				) : null}
				<ThemeToggle />
				<div className="flex items-center">
					<span className="pr-2">{formattedDate}</span>
					<Clock />
				</div>
			</div>
		</div>
	);
};
