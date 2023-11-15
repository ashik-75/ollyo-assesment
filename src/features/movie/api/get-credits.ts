import { client } from "@/utils/api-client";
import { Credit } from "../types";
import { useQuery } from "@tanstack/react-query";

const getCredits = (endpoint: string): Promise<Credit> => {
	return client(endpoint);
};

export const useCredit = ({ endpoint }: { endpoint: string }) => {
	return useQuery({
		queryKey: ["credits"],
		queryFn: () => getCredits(endpoint),
	});
};
