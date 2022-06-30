import { FC } from 'react';

import { IOrderAPI } from 'shared/constants';
import './style.scss';

interface IOrder {
	order: IOrderAPI;
}

export const Order: FC<IOrder> = ({ order }) => {
	return (
		<div className='order'>
			<div className='order__head'>
				<h3>{order.Title}</h3>
				<div className='order__statuses'>
					<p>
						<span>Status:</span> {order.Status}
					</p>
					<p>
						<span>Payment status:</span> {order.PaymentStatus}
					</p>
				</div>
			</div>
			<div className='order__columns'>
				<div className='order__address'>
					<h4>Delivery address</h4>
					<div className='order__info'>
						<p>Zip code: {order.DeliveryAddress.ZipCode}</p>
						<p>Address line 1: {order.DeliveryAddress.AddressLine1}</p>
						{order.DeliveryAddress.AddressLine2 && (
							<p>Address line 2: {order.DeliveryAddress.AddressLine1}</p>
						)}
						{order.DeliveryAddress.Description && (
							<p>Description: {order.DeliveryAddress.Description}</p>
						)}
						<p>City: {order.DeliveryAddress.City}</p>
						<p>Country: {order.DeliveryAddress.Country}</p>
						<p>FullName: {order.DeliveryAddress.FullName}</p>
						<p>Phone: {order.DeliveryAddress.Phone}</p>
					</div>
				</div>
				<div className='order__shipping'>
					<h4>Shipping</h4>
					<div className='order__info'>
						<p>Type: {order.Shipping.ShippingType}</p>
						{order.Shipping.Phone && <p>Phone: {order.Shipping.Phone}</p>}
						{order.Shipping.Email && <p>Email: {order.Shipping.Email}</p>}
					</div>
				</div>
			</div>
			<div className='order__prices'>
				<p>Price: {order.Price}</p>
				<p>Discount: {order.DiscountPrice}</p>
				<p>Delivery: {order.DeliveryPrice}</p>
				<p className='order__total-price'>
					Total price: {order.TotalPrice}
				</p>
			</div>
		</div>
	);
};
