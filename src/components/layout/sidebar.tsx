import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
	const routes = [
		{
			url: "/",
			title: "Discover",
		},
		{
			url: "/watch-list",
			title: "Watch List",
		},
		{
			url: "/favourite-list",
			title: "Favourite Movies",
		},
	];
	return (
		<nav id="sidebar" className="space-y-1">
			{routes.map((route) => (
				<NavLink
					key={route.url}
					to={route.url}
					className={({ isActive }) =>
						`bg-slate-50 p-3 block border-l-4 ${
							isActive ? "border-l-violet-700" : "border-l-slate-50"
						} `
					}
				>
					{route.title}
				</NavLink>
			))}
		</nav>
	);
};

export default Sidebar;
