import { Header } from 'shared/ui';
import { OrderList } from 'widgets';
import './style.scss';

const MainPage = () => {
	return (
		<div className='main-page'>
			<Header />
			<main className='main-page__content'>
				<div className='main-page__container'>
					<OrderList />
				</div>
			</main>
		</div>
	);
};

export default MainPage;
