import { IOrderAPI, IToken } from 'shared/constants';

import { AUTH, BASE_URL, PRIVATE_KEY, PUBLIC_KEY } from './configure';

const createSHA1 = async (message: string) => {
	const msgUint8 = new TextEncoder().encode(message);
	const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const getAccessToken = async (token: string): Promise<IToken> => {
	const password = await createSHA1(token + PRIVATE_KEY);
	const url = `${BASE_URL}${AUTH}accesstoken?oauth_token=${token}&grant_type=api&username=${PUBLIC_KEY}&password=${password}`;
	try {
		const request = await fetch(url, {
			method: 'GET',
		});

		const response = await request.json();
		if (!request.ok) {
			throw Error(response.message);
		}

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const refreshToken = async (token: string): Promise<IToken> => {
	const url = `${BASE_URL}${AUTH}refreshtoken?refreshToken=${token}`;
	try {
		const request = await fetch(url, {
			method: 'GET',
		});

		const response = await request.json();
		if (!request.ok) {
			throw Error(response.message);
		}

		return response;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const getRequestToken = async (): Promise<string> => {
	const url = `${BASE_URL}${AUTH}requesttoken`;
	try {
		const request = await fetch(url, {
			method: 'GET',
		});

		const response = await request.json();
		if (!request.ok) {
			throw Error(response.message);
		}
		return response.RequestToken;
	} catch (e: any) {
		throw Error(e.message);
	}
};

const getOrderList = async (token: string): Promise<Array<IOrderAPI>> => {
	const url = `${BASE_URL}orders?oauth_token=${token}`;
	try {
		const request = await fetch(url, {
			method: 'GET',
		});

		const response = await request.json();
		if (!request.ok) {
			throw Error(response.message);
		}

		return response.Result;
	} catch (e: any) {
		throw Error(e.message);
	}
};

export const API = {
	getAccessToken,
	getRequestToken,
	getOrderList,
	refreshToken,
};
