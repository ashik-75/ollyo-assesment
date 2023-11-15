import React from "react";
import { useMovie } from "../../api/getMovie";
import { useParams } from "react-router-dom";
import Spinner from "@/components/ui/Spinner";
import MovieDetails from "./section/movie-details";
import SimilarMovies from "./section/similar-movies";
import Cast from "./section/cast";

const Movie: React.FC = () => {
	const { movieId } = useParams();

	const { data, isLoading } = useMovie({ movieId: movieId! });

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div>
			<MovieDetails movie={data!} />
			<br />
			<SimilarMovies />
			<br />
			<Cast />
		</div>
	);
};

export default Movie;
