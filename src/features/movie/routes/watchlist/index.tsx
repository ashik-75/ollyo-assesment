import React from "react";
import { useMovies } from "../../api/getMovies";
import MovieList from "../../components/movie-list";
import MoviesListSkeleton from "../../components/movies-list-skeleton";
import EmptyMovie from "../../components/empty-movie";

const WatchList: React.FC = () => {
	const { data, isLoading } = useMovies({
		endpoint: `account/11765010/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc`,
	});

	if (isLoading) {
		return <MoviesListSkeleton />;
	}

	if (data?.results.length === 0) {
		return <EmptyMovie />;
	}
	return (
		<div>
			<p>watch list</p>
			<MovieList movies={data?.results} />
		</div>
	);
};

export default WatchList;
