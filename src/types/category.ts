export type SubCategory = {
  id: number;
  title: string;
  price: string | number;
  description: string;
  category: string;
  image: string;
  rating: object;
};

export type Category = {
  CategoryList: Array<string>;
  SubCategoryList: Array<SubCategory>;
  categoryLoading: boolean;
  subCategoryLoading: boolean;
};
