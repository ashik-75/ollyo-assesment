import React from "react";
import { useMovies } from "../../api/getMovies";
import Spinner from "@/components/ui/Spinner";
import Carousel from "@/components/ui/Carousel";
import LazyImage from "@/components/ui/LazyImage";

const TrendingMovies: React.FC = () => {
	const { data: movies, isLoading } = useMovies({
		endpoint: `trending/movie/week`,
	});

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div>
			<h1 className="text-2xl font-bold mb-5">Trending Movies</h1>
			<Carousel>
				{movies?.results.map((movie) => (
					<div key={movie.id}>
						<LazyImage
							src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
						/>
						<p>{movie.original_title}</p>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default TrendingMovies;
