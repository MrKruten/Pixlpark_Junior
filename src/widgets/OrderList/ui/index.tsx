import { FC } from 'react';

import { Order } from 'entities/Order';
import { IOrderAPI } from 'shared/constants';

import './style.scss';

interface IOrderList {
	orders: Array<IOrderAPI>;
}

export const OrderList: FC<IOrderList> = ({ orders }) => {
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
