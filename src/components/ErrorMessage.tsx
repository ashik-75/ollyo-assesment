import React from "react";

interface ErrorMessageProps {
	error: Error;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
	return (
		<div>
			<p>There was an error</p>
			<pre>{error.message}</pre>
		</div>
	);
};

export default ErrorMessage;
