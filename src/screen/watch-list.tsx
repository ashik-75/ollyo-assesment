import MovieList from "@/components/MovieList";
import Spinner from "@/components/ui/Spinner";
import { useFetch } from "@/utils/movie";
import React from "react";

const WatchList: React.FC = () => {
	const { data, isLoading } = useFetch(
		`account/11765010/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc`
	);

	console.log({ data });

	if (isLoading) {
		return <Spinner />;
	}

	if (data.results.length === 0) {
		return <div>Empty watch list</div>;
	}
	return (
		<div>
			<p>watch list</p>
			<MovieList movies={data.results} />
		</div>
	);
};

export default WatchList;
