import request from '../utilities/request';

export const getAllItems = () => request('item/');

export const createOrUpdateItem = (data) => request('item/', { method: 'POST', body: JSON.stringify(data) });
