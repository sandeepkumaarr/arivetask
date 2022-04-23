export type SubCategory = {
  id: number;
  title: string;
  price: string | number;
  description: string;
  category: string;
  image: string;
  rating: object;
};

export type CategoryItem = {
  id: string;
  category: string;
};

export type Category = {
  CategoryList: Array<CategoryItem>;
  SubCategoryList: Array<SubCategory>;
  categoryLoading: boolean;
  subCategoryLoading: boolean;
};
