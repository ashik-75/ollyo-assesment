import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import NotFound from "./screen/not-found";
import { ErrorBoundary } from "react-error-boundary";
import FullPageErrorFallback from "./components/FullPageErrorFallback";
import WatchList from "./features/movie/routes/watchlist";
import Movie from "./features/movie/routes/movie";
import Discover from "./features/movie/routes/discover";
import ErrorMessage from "./components/ui/ErrorMessage";
import FavouriteList from "./features/movie/routes/favourite";

interface ErrorFallbackProps {
	error: Error;
}

const ErrorFallBack: React.FC<ErrorFallbackProps> = ({ error }) => {
	return <ErrorMessage message={error.message} />;
};

const AuthenticatedApp: React.FC = () => {
	return (
		<ErrorBoundary FallbackComponent={FullPageErrorFallback}>
			<div className="max-w-7xl mx-auto space-y-5">
				<Navbar />

				<div className="grid grid-cols-4 gap-5 min-h-screen">
					<Sidebar />
					<main className="col-span-3">
						<ErrorBoundary FallbackComponent={ErrorFallBack}>
							<AuthenticatedRoutes />
						</ErrorBoundary>
					</main>
				</div>

				<footer className="p-5 bg-zinc-100">Credit goes to alpine</footer>
			</div>
		</ErrorBoundary>
	);
};

export default AuthenticatedApp;

const Navbar = () => {
	return (
		<nav
			id="navbar"
			className="flex items-center justify-between p-5 bg-zinc-100 sticky top-0 z-30"
		>
			<div>
				<img src="/amd.png" className="w-10 h-10" alt="" />
			</div>

			<div className="space-x-5">
				<span>Akash</span>
				<button className="">Logout</button>
			</div>
		</nav>
	);
};

const Sidebar = () => {
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

const AuthenticatedRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Discover />} />
			<Route path="/favourite-list" element={<FavouriteList />} />
			<Route path="/movie/:movieId" element={<Movie />} />
			<Route path="/watch-list" element={<WatchList />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
