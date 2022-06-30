import { FC } from 'react';
import { useStore } from 'effector-react';

import { Order } from 'entities/Order';

import { $orderList, getOrderListFx } from '../model';
import './style.scss';

export const OrderList: FC = () => {
	const orders = useStore($orderList);
	const isLoading = useStore(getOrderListFx.pending);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	return (
		<div className='order-list'>
			<h2>Orders</h2>
			<ul>
				{orders.map(order => (
					<li key={order.Id}>
						<Order order={order} />
					</li>
				))}
			</ul>
		</div>
	);
};
