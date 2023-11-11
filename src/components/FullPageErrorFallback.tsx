import React from "react";

interface FullPageErrorFallbackProps {
	error: Error;
}

const FullPageErrorFallback: React.FC<FullPageErrorFallbackProps> = ({
	error,
}) => {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<div>
				<p>uhh, something went wrong, please refresh the page</p>
				<pre>{error.message}</pre>
			</div>
		</div>
	);
};

export default FullPageErrorFallback;
