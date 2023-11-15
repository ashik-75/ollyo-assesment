import React from "react";
import { useMovies } from "../../api/getMovies";
import MoviesListSkeleton from "../../components/movies-list-skeleton";
import EmptyMovie from "../../components/empty-movie";
import MovieList from "../../components/movie-list";

const FavouriteList: React.FC = () => {
	const { data, isLoading } = useMovies({
		endpoint: "account/11765010/favorite/movies?sort_by=created_at.desc",
	});

	if (isLoading) {
		return <MoviesListSkeleton />;
	}

	return (
		<div>
			{data && data?.total_results > 0 ? (
				<MovieList movies={data?.results} />
			) : (
				<EmptyMovie />
			)}
		</div>
	);
};

export default FavouriteList;
