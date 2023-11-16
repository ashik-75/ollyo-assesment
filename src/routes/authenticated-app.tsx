import React from "react";
import { Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "react-error-boundary";
import FullPageErrorFallback from "../components/FullPageErrorFallback";
import WatchList from "../features/movie/routes/watchlist";
import Movie from "../features/movie/routes/movie";
import Discover from "../features/movie/routes/discover";
import ErrorMessage from "../components/ui/ErrorMessage";
import FavouriteList from "../features/movie/routes/favourite";
import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";
import SearchMovie from "../features/movie/routes/search-movie";
import NotFound from "../features/misc/routes/not-found";
import Account from "../features/auth/routes/account";

interface ErrorFallbackProps {
	error: Error;
}

const ErrorFallBack: React.FC<ErrorFallbackProps> = ({ error }) => {
	return <ErrorMessage message={error.message} />;
};

const AuthenticatedApp: React.FC = () => {
	return (
		<>
			<div className="grid grid-cols-4 gap-5 min-h-screen">
				<Sidebar />
				<main className="col-span-3">
					<ErrorBoundary FallbackComponent={ErrorFallBack}>
						<AuthenticatedRoutes />
					</ErrorBoundary>
				</main>
			</div>

			<footer className="p-5 bg-zinc-100">Credit goes to alpine</footer>
		</>
	);
};

export default AuthenticatedApp;

const AuthenticatedRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Discover />} />
			<Route path="/favourite-list" element={<FavouriteList />} />
			<Route path="/account" element={<Account />} />
			<Route path="/search" element={<SearchMovie />} />
			<Route path="/movie/:movieId" element={<Movie />} />
			<Route path="/watch-list" element={<WatchList />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
