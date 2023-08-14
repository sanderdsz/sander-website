"use client";

import {
	ReactNode,
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction,
} from "react";

type ComponentContextData = {
	aboutComponent: boolean;
	setAboutComponent: Dispatch<SetStateAction<boolean>>;
	handleCloseWindow: () => void;
};

type ComponentContextProps = {
	children: ReactNode;
};

const ComponentContext = createContext({} as ComponentContextData);
export const ComponentProvider = ({ children }: ComponentContextProps) => {
	const [aboutComponent, setAboutComponent] = useState(false);

	const handleCloseWindow = () => {
		setAboutComponent(false);
	};

	return (
		<ComponentContext.Provider
			value={{ aboutComponent, setAboutComponent, handleCloseWindow }}
		>
			{children}
		</ComponentContext.Provider>
	);
};

export const useComponent = () => {
	return useContext(ComponentContext);
};
