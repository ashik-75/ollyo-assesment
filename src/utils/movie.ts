import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { client } from "./api-client";

const useMovie = (movieId: string) => {
	return useQuery({
		queryKey: ["movie", { movieId }],
		queryFn: () => client(`/movie/${movieId}`),
	});
};

const useMovieSearch = (query: string) => {
	return useQuery({
		queryKey: ["movieSearch", { query }],
		queryFn: () =>
			client(`${query ? "search" : "discover"}/movie?query=${query}`),
	});
};

const useFavouriteMovies = () => {
	return useQuery({
		queryKey: ["fav-movies-list"],
		queryFn: () =>
			client("account/11765010/favorite/movies?sort_by=created_at.desc"),
	});
};

const useCredit = (movieId: number) => {
	return useQuery({
		queryKey: ["credits", { movieId }],
		queryFn: () => client(`movie/${movieId}/credits`),
	});
};

const useAddFavouriteMovie = () => {
	// const queryClient = useQueryClient();
	const url = `account/11765010/favorite`;
	return useMutation({
		mutationFn: (payload: any) => client(url, { data: payload }),
		onSuccess: (data) => {
			// queryClient.invalidateQueries("fav-movies")
			console.log("AFTER MUTATION", { data });
		},
	});
};

const useAddMovieToWatchlist = () => {
	// const queryClient = useQueryClient();
	const url = `account/11765010/watchlist`;
	return useMutation({
		mutationFn: (payload: any) => client(url, { data: payload }),
		onSuccess: (data) => {
			// queryClient.invalidateQueries("fav-movies")
			console.log("AFTER MUTATION", { data });
		},
	});
};

const useFetch = (endpoint: string) => {
	return useQuery({
		queryKey: [endpoint],
		queryFn: () => client(endpoint),
	});
};

export {
	useMovieSearch,
	useMovie,
	useFavouriteMovies,
	useAddFavouriteMovie,
	useAddMovieToWatchlist,
	useCredit,
	useFetch,
};
