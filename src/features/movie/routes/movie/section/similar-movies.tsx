import Carousel from "@/components/ui/Carousel";
import LazyImage from "@/components/ui/LazyImage";
import Spinner from "@/components/ui/Spinner";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useMovies } from "../../../api/getMovies";
import MovieList from "../../../components/movie-list";
import MoviesListSkeleton from "../../../components/movies-list-skeleton";

const SimilarMovies: React.FC = () => {
	const { movieId } = useParams();
	const { data, isLoading } = useMovies({
		endpoint: `movie/${movieId}/similar`,
	});

	if (isLoading) {
		return <MoviesListSkeleton />;
	}

	if (data && data?.results.length === 0) return null;

	return (
		<>
			<h1 className="font-bold mb-5 text-2xl">Similiar Movies</h1>
			<MovieList movies={data?.results} />
		</>
	);
};

export default SimilarMovies;
