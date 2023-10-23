/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIHOST = "https://skypro-music-api.skyeng.tech/";

export const allTrackStore = createApi({
  reducerPath: "allTrackStore",
  baseQuery: fetchBaseQuery({
    baseUrl: APIHOST,
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "catalog/track/all/",
    }),
 
 
/*   getAllFavorite: builder.mutation({
    query: (body) => ({
      url: "catalog/track/favorite/all/",
      method: "GET",
      body,
    }),

  }),
 */

    getAllFavorite:  builder.query({
      query: (body) => ({
        url: "catalog/track/favorite/all/",
        body,
      }),
    }), 
  
  // https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/
}),
});

export const { useGetAllTodosQuery, useGetAllFavoriteQuery } = allTrackStore;
