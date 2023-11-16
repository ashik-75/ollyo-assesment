import React from "react";
import { useSearchParams } from "react-router-dom";
import { useMovies } from "../../api/getMovies";
import MoviesListSkeleton from "../../components/movies-list-skeleton";
import EmptyMovie from "../../components/empty-movie";
import MovieList from "../../components/movie-list";

const SearchMovie: React.FC = () => {
	const [searchParams] = useSearchParams();

	const { data, isLoading } = useMovies({
		endpoint: `/search/movie?query=${searchParams.get("q")}&page=1`,
	});

	if (isLoading) {
		return <MoviesListSkeleton />;
	}

	if (data?.results.length === 0) {
		return <EmptyMovie />;
	}
	return (
		<div>
			<h1 className="text-xl font-semibold">
				Search for : {searchParams.get("q")}
			</h1>
			<br />
			<MovieList movies={data?.results} />
		</div>
	);
};

export default SearchMovie;
