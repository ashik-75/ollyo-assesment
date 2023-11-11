import Spinner from "@/components/ui/Spinner";
import { useMovie } from "@/utils/movie";
import React from "react";
import { useParams } from "react-router-dom";
import Cast from "./Cast";
import Carousel from "@/components/ui/Carousel";
import SimilarMovies from "./similar-movies";
import Videos from "./videos";

const Movie: React.FC = () => {
	const { movieId } = useParams();
	const result = useMovie(movieId as string);

	return (
		<div>
			{result.isLoading ? (
				<Spinner />
			) : (
				<>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
						<img
							src={`https://www.themoviedb.org/t/p/w220_and_h330_face${result.data.poster_path}`}
							alt=""
						/>

						<div className="md:col-span-2">
							<h1 className="text-2xl font-bold">
								{result.data.original_title}
							</h1>
							<p>{result.data.overview}</p>
							<p>{result.data.vote_average}</p>
						</div>
					</div>
					<br />
					<Videos />
					<br />
					<Cast />

					<br />

					<SimilarMovies />
				</>
			)}
		</div>
	);
};

export default Movie;
