import axios from 'axios';
import { IDataProducts, IProductsResponse } from '../interfaces/interfaces';
const baseURL = 'https://corebiz-test.herokuapp.com/api/v1';


const service = axios.create({
  baseURL
})

export const getProducts = async () => {
  const {data}: IDataProducts = await service.get(`${baseURL}/products`);
  return data;
}