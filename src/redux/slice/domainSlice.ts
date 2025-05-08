import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const domainApi = createApi({
  reducerPath: "domainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://6797aa2bc2c861de0c6d964c.mockapi.io/domain" }),
  tagTypes: ["Domain"],
  endpoints: (builder) => ({
    getDomains: builder.query({
      query: () => "/",
      providesTags: ["Domain"],
    }),
    getDomainById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Domain", id }],
    }),
    addDomain: builder.mutation({
      query: (newDomain) => ({
        url: "/",
        method: "POST",
        body: newDomain,
      }),
      invalidatesTags: ["Domain"],
    }),
    updateDomain: builder.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Domain", id }],
    }),
    deleteDomain: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Domain"],
    }),
  }),
});

export const { useGetDomainsQuery, useGetDomainByIdQuery, useAddDomainMutation, useUpdateDomainMutation, useDeleteDomainMutation } = domainApi;
