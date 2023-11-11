import React from "react";

const FullPageLoader: React.FC = () => {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<img
				src={"/spinner-solid.svg"}
				alt=""
				className="h-20 w-20 animate-spin"
			/>
		</div>
	);
};

export default FullPageLoader;
