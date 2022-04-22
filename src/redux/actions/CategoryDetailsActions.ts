import {createAsyncThunk} from '@reduxjs/toolkit';

export const getCategory = createAsyncThunk(
  'categoryDetails/getCategory',
  async () => {
    const res = await fetch(
      'https://fakestoreapi.com/products/categories',
    ).then(data => data.json());

    return res;
  },
);

export const getSubCategory = createAsyncThunk(
  'categoryDetails/getSubCategory',
  async (subcat, {rejectWithValue}) => {
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
