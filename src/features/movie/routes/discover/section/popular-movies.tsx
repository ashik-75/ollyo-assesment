import React from "react";
import { useMovies } from "../../../api/getMovies";
import ErrorMessage from "@/components/ui/ErrorMessage";
import MovieList from "../../../components/movie-list";
import MoviesListSkeleton from "@/features/movie/components/movies-list-skeleton";

const PopularMovies: React.FC = () => {
	const { data, isLoading, isError, error } = useMovies({
		endpoint: `movie/popular`,
	});

	if (isLoading) {
		return <MoviesListSkeleton />;
	}

	if (isError) {
		return <ErrorMessage message={error?.message} />;
	}
	return (
		<div>
			<h1 className="text-2xl font-bold mb-5">Popular Movies</h1>
			<MovieList movies={data?.results} />
		</div>
	);
};

export default PopularMovies;
