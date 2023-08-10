"use client";

import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type DeviceContextData = {
	deviceWidth: number;
	setDeviceWidth: Dispatch<SetStateAction<number>>;
};

type DeviceContextProps = {
	children: ReactNode;
};

const DeviceContext = createContext({} as DeviceContextData);
export const DeviceProvider = ({ children }: DeviceContextProps) => {
	const [deviceWidth, setDeviceWidth] = useState<number>(0);

	const handleResize = () => {
		setDeviceWidth(window.innerWidth);
	};

	useEffect(() => {
		setDeviceWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<DeviceContext.Provider value={{ deviceWidth, setDeviceWidth }}>
			{children}
		</DeviceContext.Provider>
	);
};

export const useDevice = () => {
	return useContext(DeviceContext);
};
