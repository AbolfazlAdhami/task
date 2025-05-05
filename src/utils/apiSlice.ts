import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    // example endpoint
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
