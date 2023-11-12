import React from "react";
import { Movie } from "../../types";

type MovieDetailsProps = {
	movie: Movie;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				<img
					src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
					alt=""
				/>

				<div className="md:col-span-2">
					<h1 className="text-2xl font-bold">{movie.original_title}</h1>
					<p>{movie.overview}</p>
					<p>{movie.vote_average}</p>
					<p>{movie.release_date}</p>
					<p>{movie.original_language}</p>
					<p>{movie.popularity}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
