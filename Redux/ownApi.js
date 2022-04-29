import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userAPI", //uniq name
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUserQuery } = userAPI;
