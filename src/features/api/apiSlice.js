import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://us-central1-mbtcandidate.cloudfunctions.net/posts/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({}),
});
