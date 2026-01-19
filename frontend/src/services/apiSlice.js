import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apislice = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery( {baseUrl: "http://localhost:3000/api",
    credentials: "include",}),
  endpoints: () => ({}),
});

export const { useGetPokemonByNameQuery } = apislice;
