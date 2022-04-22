import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Category} from '../../types/category';
import {
  getAllProducts,
  getCategory,
  getSubCategory,
} from '../actions/CategoryDetailsActions';

export const categoryDetailsInitialState: Category = {
  CategoryList: [],
  SubCategoryList: [],
  categoryLoading: false,
  subCategoryLoading: false,
};

export const CategoryDetailsSlice = createSlice({
  name: 'categoryDetails',
  initialState: categoryDetailsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategory.pending, (state, {payload}) => {
      state.categoryLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, {payload}) => {
      state.categoryLoading = false;
      state.CategoryList = payload;
    });
    builder.addCase(getCategory.rejected, (state, {payload}) => {
      state.categoryLoading = false;
    });
    builder.addCase(getSubCategory.pending, (state, {payload}) => {
      state.subCategoryLoading = true;
    });
    builder.addCase(getSubCategory.fulfilled, (state, {payload}) => {
      state.subCategoryLoading = false;
      state.SubCategoryList = payload;
    });
    builder.addCase(getSubCategory.rejected, (state, {payload}) => {
      state.subCategoryLoading = false;
    });

    builder.addCase(getAllProducts.pending, (state, {payload}) => {
      state.subCategoryLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, {payload}) => {
      state.subCategoryLoading = false;
      state.SubCategoryList = payload;
    });
    builder.addCase(getAllProducts.rejected, (state, {payload}) => {
      state.subCategoryLoading = false;
    });
  },
});

export const {
  //   setUser: setUserActionCreator,
  //   updatePreference: updatePreferenceActionCreator,
} = CategoryDetailsSlice.actions;
