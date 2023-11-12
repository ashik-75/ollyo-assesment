import { client } from "@/utils/api-client";
import { MoviesApiResponse } from "../types";
import { ExtractFnReturnType, QueryConfig } from "@/utils/react-query";
import { useQuery } from "@tanstack/react-query";

const getMovies = (endpoint: string): Promise<MoviesApiResponse> => {
	return client(`${endpoint}`);
};

type QueryFnType = typeof getMovies;

type useMoviesOptions = {
	endpoint: string;
	config?: QueryConfig<QueryFnType>;
};

export const useMovies = ({ endpoint, config }: useMoviesOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey: ["movies", endpoint],
		queryFn: () => getMovies(endpoint),
	});
};
