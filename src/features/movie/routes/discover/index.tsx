import React from "react";
import PopularMovies from "./popular-movies";
import TrendingMovies from "./trending-movies";

const Discover: React.FC = () => {
	return (
		<div className="space-y-5">
			<PopularMovies />
			<TrendingMovies />
		</div>
	);
};

export default Discover;
