import { createEffect, createEvent, sample } from 'effector';

import { API } from 'shared/api';
import { getOrderList, getOrderListFx } from 'widgets/OrderList/model';

export const checkedAuth = createEvent();

const checkAuthFx = createEffect<void, string | null, Error>(() =>
	localStorage.getItem('authToken')
);

sample({
	clock: checkedAuth,
	target: checkAuthFx,
});

const getAccessTokenFx = createEffect(async () => {
	const requestToken = await API.getRequestToken();
	const responseGetAccessToken = await API.getAccessToken(requestToken);
	localStorage.setItem('authToken', responseGetAccessToken.AccessToken);
	localStorage.setItem('refreshToken', responseGetAccessToken.RefreshToken);
});

sample({
	clock: checkAuthFx.doneData,
	filter: clock => !clock,
	target: getAccessTokenFx,
});

sample({
	clock: checkAuthFx.doneData,
	filter: clock => !!clock,
	target: getOrderList,
});

sample({
	clock: getAccessTokenFx.doneData,
	target: getOrderList,
});

sample({
	clock: getOrderListFx.failData,
	target: checkAuthFx,
});
