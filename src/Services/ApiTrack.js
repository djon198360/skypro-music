/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIHOST = "https://skypro-music-api.skyeng.tech/";

export const allTrackStore = createApi({
  reducerPath: "allTrackStore",
  baseQuery: fetchBaseQuery({
    baseUrl: APIHOST,
  }),
  endpoints: (builder) => ({
    getAllTrack: builder.query({
      query: () => "catalog/track/all/",
    }),

    getAllFavorite: builder.query({
      query: (body) => ({
        url: "catalog/track/favorite/all/",
        body,
      }),
    }),
  }),
});

export const { useGetAllTrackQuery, useGetAllFavoriteQuery } = allTrackStore;
