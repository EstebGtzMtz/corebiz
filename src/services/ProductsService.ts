import axios from 'axios';
import { IDataProducts, INewsLetterInputs } from '../interfaces/interfaces';

const baseURL = 'https://corebiz-test.herokuapp.com/api/v1';

const service = axios.create({
  baseURL
})

export const getProducts = async () => {
  const {data}: IDataProducts = await service.get(`${baseURL}/products`);
  return data;
}

export const subscribeToNewsletter = async (newsletterInfo: INewsLetterInputs) => {
  try {
    const {data:{message}} = await service.post(`${baseURL}/newsletter`, newsletterInfo);
    return message;
  } catch (error: any) {
    return error.message;
  }
}