import FullPageErrorFallback from "@/components/FullPageErrorFallback";
import FullPageLoader from "@/components/FullPageLoader";
import Navbar from "@/components/layout/navbar";
import { useUser } from "@/store/user";
import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

const AuthenticatedApp = lazy(() => import("./authenticated-app"));
const UnAuthenticatedApp = lazy(() => import("./unauthenticated-app"));

const AppRoutes: React.FC = () => {
	const { user } = useUser();
	return (
		<Suspense fallback={<FullPageLoader />}>
			<ErrorBoundary FallbackComponent={FullPageErrorFallback}>
				<div className="container mx-auto">
					<Navbar />

					{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
				</div>
			</ErrorBoundary>
		</Suspense>
	);
};

export default AppRoutes;
