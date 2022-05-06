import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userAPI", //uniq name
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    //get all users
    getAllUser: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    //   get All post
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUserQuery, useGetAllPostQuery } = userAPI;
