import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories.php`,
    }),
    getCategoryRecipes: builder.query({
      query: (category) => `filter.php?c=${category}`,
    }),
  }),
});
export const { useGetCategoriesQuery, useGetCategoryRecipesQuery } = apiSlice;