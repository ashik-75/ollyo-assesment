import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const MoviesListSkeleton: React.FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 md:gap-5">
			{[...Array(4).keys()].map((n) => (
				<MovieSkeleton key={n} />
			))}
		</div>
	);
};

export default MoviesListSkeleton;

const MovieSkeleton = () => {
	return (
		<Card className="space-y-5 p-4" radius="lg">
			<Skeleton className="rounded-lg">
				<div className="h-56 rounded-lg bg-default-300"></div>
			</Skeleton>
			<div className="space-y-3">
				<Skeleton className="w-3/5 rounded-lg">
					<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
				</Skeleton>
				<Skeleton className="w-4/5 rounded-lg">
					<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
				</Skeleton>
			</div>
		</Card>
	);
};
