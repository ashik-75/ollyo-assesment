import { useCredit } from "@/features/movie/api/get-credits";
import CastList from "@/features/movie/components/cast-list";
import EmptyMovie from "@/features/movie/components/empty-movie";
import MoviesListSkeleton from "@/features/movie/components/movies-list-skeleton";
import React from "react";
import { useParams } from "react-router-dom";

const Cast: React.FC = () => {
	const { movieId } = useParams();
	const { data, isLoading } = useCredit({
		endpoint: `movie/${movieId}/credits`,
	});

	if (isLoading) {
		return <MoviesListSkeleton />;
	}

	if (!data?.id) {
		return <EmptyMovie />;
	}
	return (
		<>
			<h1 className="font-bold mb-5 text-2xl">Actor Cast </h1>
			<CastList casts={data?.cast} />
		</>
	);
};

export default Cast;
