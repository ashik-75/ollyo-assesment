import MovieList from "@/components/MovieList";
import Spinner from "@/components/ui/Spinner";
import { useFavouriteMovies } from "@/utils/movie";
import React from "react";

const FavouriteList: React.FC = () => {
	const { data, isLoading } = useFavouriteMovies();

	return (
		<div>
			<p>
				{isLoading ? (
					<Spinner />
				) : data.results?.length > 0 ? (
					<MovieList movies={data.results} />
				) : (
					"No Fav"
				)}
			</p>
		</div>
	);
};

export default FavouriteList;
