export interface IOrderAPI {
	Id: string;
	CustomId: string;
	SourceOrderId: string;
	Title: string;
	TrackingUrl: string;
	TrackingNumber: any;
	Status: string;
	RenderStatus: string;
	PaymentStatus: string;
	DeliveryAddress: {
		ZipCode: string;
		AddressLine1: string;
		AddressLine2: string;
		Description: string;
		City: string;
		Country: string;
		FullName: string;
		Phone: string;
	};
	Shipping: {
		Id: number;
		Title: string;
		Phone: string | null;
		Email: string;
		ShippingType: string;
	};
	CommentsCount: number;
	DownloadLink: string;
	PreviewImageUrl: string;
	Price: number;
	DiscountPrice: number;
	DeliveryPrice: number;
	TotalPrice: number;
	UserId: number;
	UserCompanyAccountId?: any;
	DiscountId: number;
	DiscountTitle: string;
	DateCreated: string;
	DateModified: string;
	DatePaid: string;
}

export interface IToken {
	AccessToken: string;
	Expires: number;
	RefreshToken: string;
	Success: boolean;
}
