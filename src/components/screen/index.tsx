import { ReactNode } from "react";

type ScreenProps = {
	children: ReactNode;
};

export const Screen = ({ children }: ScreenProps) => {
	return <div>{children}</div>;
};
