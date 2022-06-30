import { Header } from 'shared/ui';
import { OrderList } from 'widgets';

import './style.scss';

const test = [
	{
		Id: '968',
		CustomId: '968',
		SourceOrderId: '78978',
		Title: 'White shirt (XS)',
		TrackingUrl: '',
		TrackingNumber: null,
		Status: 'NotProcessed',
		RenderStatus: 'ReadyToRender',
		PaymentStatus: 'CashPaid',
		DeliveryAddress: {
			ZipCode: '634021',
			AddressLine1: 'Frunze 117a, office 201',
			AddressLine2: '',
			Description: '',
			City: 'Tomsk',
			Country: 'Russia',
			FullName: 'asdasd  asdasd',
			Phone: '755555555   55',
		},
		Shipping: {
			Id: 226,
			Title: 'Postal',
			Phone: null,
			Email: '',
			ShippingType: 'Postal',
		},
		CommentsCount: 0,
		DownloadLink:
			'http://saas.pixlpark.com/orders/xxx/968/2012-03-07_968_7a7c.zip',
		PreviewImageUrl: 'http://saas.pixlpark.com/orders/xxx/968/preview.jpg',
		Price: 500.1,
		DiscountPrice: 0,
		DeliveryPrice: 79.43,
		TotalPrice: 579.53,
		UserId: 20734,
		UserCompanyAccountId: null,
		DiscountId: 0,
		DiscountTitle: '',
		DateCreated: '/Date(1331083326130)/',
		DateModified: '/Date(1331083346537)/',
		DatePaid: '/Date(1331083346537)/',
	},
	{
		Id: '9618',
		CustomId: '968',
		SourceOrderId: '78978',
		Title: 'White shirt (XS)',
		TrackingUrl: '',
		TrackingNumber: null,
		Status: 'NotProcessed',
		RenderStatus: 'ReadyToRender',
		PaymentStatus: 'CashPaid',
		DeliveryAddress: {
			ZipCode: '634021',
			AddressLine1: 'Frunze 117a, office 201',
			AddressLine2: '',
			Description: '',
			City: 'Tomsk',
			Country: 'Russia',
			FullName: 'asdasd  asdasd',
			Phone: '755555555   55',
		},
		Shipping: {
			Id: 226,
			Title: 'Postal',
			Phone: null,
			Email: '',
			ShippingType: 'Postal',
		},
		CommentsCount: 0,
		DownloadLink:
			'http://saas.pixlpark.com/orders/xxx/968/2012-03-07_968_7a7c.zip',
		PreviewImageUrl: 'http://saas.pixlpark.com/orders/xxx/968/preview.jpg',
		Price: 500.1,
		DiscountPrice: 0,
		DeliveryPrice: 79.43,
		TotalPrice: 579.53,
		UserId: 20734,
		UserCompanyAccountId: null,
		DiscountId: 0,
		DiscountTitle: '',
		DateCreated: '/Date(1331083326130)/',
		DateModified: '/Date(1331083346537)/',
		DatePaid: '/Date(1331083346537)/',
	},
];

const MainPage = () => {
	return (
		<div className='main-page'>
			<Header />
			<main className='main-page__content'>
				<div className='main-page__container'>
					<OrderList orders={test} />
				</div>
			</main>
		</div>
	);
};

export default MainPage;
