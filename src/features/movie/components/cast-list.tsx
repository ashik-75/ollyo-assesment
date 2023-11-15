import React from "react";
import { Cast } from "../types";
import Carousel from "@/components/ui/Carousel";
import LazyImage from "@/components/ui/LazyImage";

type MovieListProps = {
	casts?: Cast[];
};

const CastList: React.FC<MovieListProps> = ({ casts = [] }) => {
	return (
		<Carousel>
			{casts.map((cast) => (
				<div key={cast.id}>
					<LazyImage
						src={`https://www.themoviedb.org/t/p/w220_and_h330_face${cast.profile_path}`}
					/>

					<p>{cast.original_name}</p>
				</div>
			))}
		</Carousel>
	);
};

export default CastList;
