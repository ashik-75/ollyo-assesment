import React from "react";
import { useMovie } from "../../api/getMovie";
import { useParams } from "react-router-dom";
import Spinner from "@/components/ui/Spinner";
import MovieDetails from "./movie-details";
import SimilarMovies from "./similar-movies";

const Movie: React.FC = () => {
	const { movieId } = useParams();

	const { data, isLoading, isError } = useMovie({ movieId: movieId! });

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div>
			<MovieDetails movie={data!} />
			<br />
			<SimilarMovies />
		</div>
	);
};

export default Movie;
