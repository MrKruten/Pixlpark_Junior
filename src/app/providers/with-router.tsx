import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => ReactNode) => () =>
	(
		<BrowserRouter>
			<Suspense fallback={<h1>Loading</h1>}>{component()}</Suspense>
		</BrowserRouter>
	);
