import { useEffect } from 'react';

import { Router } from 'pages';
import { checkedAuth } from 'processes/auth';

import { withProviders } from './providers';

const App = () => {
	useEffect(() => {
		checkedAuth();
	}, []);

	return <Router />;
};

export default withProviders(App);
