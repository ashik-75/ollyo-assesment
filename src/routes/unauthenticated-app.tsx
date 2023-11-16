import Login from "@/features/auth/routes/login";
import React from "react";

import { Route, Routes } from "react-router-dom";

const UnAuthenticatedApp: React.FC = () => {
	return (
		<div className="p-5">
			<UnAuthenticatedRoutes />
		</div>
	);
};

export default UnAuthenticatedApp;

const UnAuthenticatedRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
		</Routes>
	);
};
