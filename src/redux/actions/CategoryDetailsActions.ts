import {createAsyncThunk} from '@reduxjs/toolkit';
import {SubCategory} from '../../types/category';

export const getCategory = createAsyncThunk(
  'categoryDetails/getCategory',
  async () => {
    const res = await fetch(
      'https://fakestoreapi.com/products/categories',
    ).then(data => data.json());

    return res;
  },
);

export const getSubCategory = createAsyncThunk<Array<SubCategory>, string>(
  'categoryDetails/getSubCategory',
  async (subcat, thunkApi) => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${subcat}`,
    ).then(data => data.json());

    return res;
  },
);

export const getAllProducts = createAsyncThunk(
  'categoryDetails/getAllProducts',
  async () => {
    const res = await fetch(`https://fakestoreapi.com/products`).then(data =>
      data.json(),
    );

    return res;
  },
);
