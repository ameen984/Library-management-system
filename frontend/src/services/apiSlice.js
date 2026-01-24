import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apislice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    credentials: "include",
  }),
  tagTypes: ["BOOKS"],
  endpoints: () => ({}),
});
