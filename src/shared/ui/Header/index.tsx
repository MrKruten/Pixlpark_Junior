import { ReactComponent as Logo } from 'shared/images/pixlpark_logo.svg';

import './style.scss';

export const Header = () => {
	return (
		<header className='header'>
			<Logo />
			<h1>Задание для Junior-разработчика</h1>
		</header>
	);
};
