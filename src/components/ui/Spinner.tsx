import { cn } from "@/utils/merge";
import React from "react";

interface SpinnerPros {
	size?: number;
}

const Spinner: React.FC<SpinnerPros> = ({ size = 5 }) => {
	return (
		<div>
			<img
				src="/spinner-solid.svg"
				className={cn("animate-spin", `w-${size} h-${size}`)}
				alt=""
			/>
		</div>
	);
};

export default Spinner;
