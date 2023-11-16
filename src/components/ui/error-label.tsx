import React from "react";

type ErrorLabelProps = {
	message?: string;
};

const ErrorLabel: React.FC<ErrorLabelProps> = ({ message }) => {
	return <div className="text-rose-500 mt-2">{message}</div>;
};

export default ErrorLabel;
