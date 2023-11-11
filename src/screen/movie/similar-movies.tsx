import Carousel from "@/components/ui/Carousel";
import LazyImage from "@/components/ui/LazyImage";
import Spinner from "@/components/ui/Spinner";
import { useFetch } from "@/utils/movie";
import React from "react";
import { Link, useParams } from "react-router-dom";

const SimilarMovies: React.FC = () => {
	const { movieId } = useParams();
	const { data, isLoading, isError } = useFetch(`movie/${movieId}/similar`);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<h1 className="font-bold mb-5 text-2xl">Similiar Movies</h1>
			<Carousel>
				{data.results.map((cast: any) => (
					<div key={cast.id}>
						<Link to={`/movie/${cast.id}`}>
							{cast.poster_path === null ? (
								<LazyImage src={`/no-image.svg`} alt="" />
							) : (
								<LazyImage
									src={`https://www.themoviedb.org/t/p/w220_and_h330_face${cast.poster_path}`}
									alt={cast.title}
								/>
							)}
						</Link>
						<p>{cast.title}</p>
					</div>
				))}
			</Carousel>
		</>
	);
};

export default SimilarMovies;
