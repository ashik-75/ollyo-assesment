import React from "react";
import { Movie } from "../types";
import Carousel from "@/components/ui/Carousel";
import LazyImage from "@/components/ui/LazyImage";
import { Link } from "react-router-dom";

type MovieListProps = {
	movies?: Movie[];
};

const MovieList: React.FC<MovieListProps> = ({ movies = [] }) => {
	return (
		<Carousel>
			{movies.map((movie) => (
				<div key={movie.id}>
					<Link to={`/movie/${movie.id}`}>
						<LazyImage
							src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
						/>
					</Link>
					<p>{movie.original_title}</p>
				</div>
			))}
		</Carousel>
	);
};

export default MovieList;
