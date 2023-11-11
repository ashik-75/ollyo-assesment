import MovieList from "@/components/MovieList";
import Spinner from "@/components/ui/Spinner";
import { useMovieSearch } from "@/utils/movie";
import React from "react";

const Discover: React.FC = () => {
	const [query, setQuery] = React.useState("");
	const { isError, isLoading, data, error } = useMovieSearch(query);

	console.log({ isError, isLoading, data, error });

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formElement = event.target as HTMLFormElement;
		const inp = formElement.elements.namedItem("search") as HTMLInputElement;
		if (inp) {
			setQuery(inp.value);
		}
	};

	return (
		<div className="space-y-5">
			<div>
				<form onSubmit={handleSubmit} className="relative">
					<input
						type="search"
						id="search"
						placeholder="search movie ..."
						className="border outline-none px-4 py-2 rounded-xl w-full"
					/>
				</form>

				{isError ? (
					<div>
						<p>Something went wrong</p>
						<pre>{error?.message}</pre>
					</div>
				) : null}
			</div>

			<div>
				{isLoading ? (
					<Spinner />
				) : data.results.length > 0 ? (
					<MovieList movies={data.results} />
				) : (
					<div>empty data</div>
				)}
			</div>
		</div>
	);
};

export default Discover;
