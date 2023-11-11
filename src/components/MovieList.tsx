import React from "react";
import { Link } from "react-router-dom";
import { Tooltip, Button } from "@nextui-org/react";
import { Plus, Bookmark } from "lucide-react";
import Spinner from "./ui/Spinner";
import { useMutation } from "@tanstack/react-query";
import { client } from "@/utils/api-client";
import LazyImage from "./ui/LazyImage";
import { useAddFavouriteMovie, useAddMovieToWatchlist } from "@/utils/movie";

interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface MovieListProps {
	movies: Movie[];
}

const MovieAction: React.FC<{ movie: Movie }> = ({ movie }) => {
	const { isPending, mutate } = useAddFavouriteMovie();
	const { isPending: isPendingWatch, mutate: mutateWatch } =
		useAddMovieToWatchlist();

	const handleAddFav = () => {
		mutate({ media_type: "movie", media_id: movie.id, favorite: true });
	};

	const handleAddWatch = () => {
		mutateWatch({ media_type: "movie", media_id: movie.id, watchlist: true });
	};
	return (
		<div className="flex gap-2 absolute top-0 right-0">
			<Tooltip content="Add to favourite">
				<Button
					onClick={handleAddFav}
					isIconOnly
					isLoading={isPending}
					spinner={<Spinner size={5} />}
					radius="none"
				>
					<Plus />
				</Button>
			</Tooltip>

			<Tooltip content="Add to watchlist">
				<Button
					onClick={handleAddWatch}
					isIconOnly
					isLoading={isPendingWatch}
					spinner={<Spinner size={5} />}
					radius="none"
				>
					<Bookmark />
				</Button>
			</Tooltip>
		</div>
	);
};

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-5">
			{movies.map((movie) => (
				<div key={movie.id} className="relative">
					<Link to={`/movie/${movie.id}`}>
						<LazyImage
							src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
							alt={movie.original_title}
						/>
					</Link>
					<br />
					<h1>{movie.original_title}</h1>
					<MovieAction movie={movie} />
				</div>
			))}
		</div>
	);
};

export default MovieList;
