import { Suspense, lazy, useState } from "react";
import FullPageLoader from "./components/FullPageLoader";

const AuthenticatedApp = lazy(() => import("./authenticated-app"));
const UnAuthenticatedApp = lazy(() => import("./unauthenticated-app"));

const App = () => {
	const [user, setUser] = useState(true);
	return (
		<Suspense fallback={<FullPageLoader />}>
			{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
		</Suspense>
	);
};

export default App;
