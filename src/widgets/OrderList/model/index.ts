import { createEffect, createEvent, createStore, sample } from 'effector';

import { IOrderAPI } from 'shared/constants';
import { API } from 'shared/api';

export const getOrderList = createEvent();

export const getOrderListFx = createEffect(async () => {
	const token = await localStorage.getItem('authToken');
	return await API.getOrderList(token!);
});

sample({
	clock: getOrderList,
	target: getOrderListFx,
});

export const $orderList = createStore<Array<IOrderAPI>>([]);

sample({
	clock: getOrderListFx.doneData,
	target: $orderList,
});
