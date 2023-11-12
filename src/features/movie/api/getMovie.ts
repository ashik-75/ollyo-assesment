import { client } from "@/utils/api-client";
import { Movie } from "../types";
import { ExtractFnReturnType, QueryConfig } from "@/utils/react-query";
import { useQuery } from "@tanstack/react-query";

const getMovie = ({ movieId }: { movieId: string }): Promise<Movie> => {
	return client(`movie/${movieId}`);
};

type QueryFnType = typeof getMovie;

type useMovieOptions = {
	movieId: string;
	config?: QueryConfig<QueryFnType>;
};

export const useMovie = ({ movieId, config }: useMovieOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey: ["movie", { movieId }],
		queryFn: () => getMovie({ movieId }),
	});
};
