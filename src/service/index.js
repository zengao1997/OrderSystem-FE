import request from '../utilities/request';

export const getAllItems = () => request('item').then((response) => response.json());

export const createOrUpdateItem = (data) => request('item', { method: 'POST', body: JSON.stringify(data) });

export const getAllCategories = () => request('category').then((response) => response.json());

export const getAllBrands = () => request('brand').then((response) => response.json());

export const deleteItem = (id) => request(`item/${id}`, { method: 'DELETE' });
