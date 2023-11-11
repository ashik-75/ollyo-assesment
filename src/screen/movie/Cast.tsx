import Carousel from "@/components/ui/Carousel";
import LazyImage from "@/components/ui/LazyImage";
import Spinner from "@/components/ui/Spinner";
import { useFetch } from "@/utils/movie";
import React from "react";
import { useParams } from "react-router-dom";

const Cast: React.FC = () => {
	const { movieId } = useParams();
	const { data, isLoading, isError } = useFetch(`movie/${movieId}/credits`);

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<>
			<h1 className="font-bold mb-5 text-2xl">Actor Cast </h1>
			<Carousel>
				{data.cast.map((cast: any) => (
					<div key={cast.id}>
						{cast.profile_path === null ? (
							<LazyImage src={`/no-image.svg`} alt="" />
						) : (
							<LazyImage
								src={`https://www.themoviedb.org/t/p/w220_and_h330_face${cast.profile_path}`}
								alt={cast.name}
							/>
						)}
						<p>{cast.name}</p>
					</div>
				))}
			</Carousel>
		</>
	);
};

export default Cast;
