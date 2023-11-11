import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

interface AppProvidersProps {
	children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<NextUIProvider>
				<Router>{children}</Router>
			</NextUIProvider>
		</QueryClientProvider>
	);
};

export default AppProviders;
