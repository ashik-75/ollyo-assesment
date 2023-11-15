import React from "react";
import { useMovies } from "../../../api/getMovies";
import MovieList from "../../../components/movie-list";
import MoviesListSkeleton from "@/features/movie/components/movies-list-skeleton";

const TrendingMovies: React.FC = () => {
	const { data, isLoading } = useMovies({
		endpoint: `trending/movie/week`,
	});

	if (isLoading) {
		return <MoviesListSkeleton />;
	}
	return (
		<div>
			<h1 className="text-2xl font-bold mb-5">Trending Movies</h1>
			<MovieList movies={data?.results} />
		</div>
	);
};

export default TrendingMovies;
