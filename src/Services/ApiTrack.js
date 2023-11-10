
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIHOST = "https://skypro-music-api.skyeng.tech/";
const accessToken = localStorage.getItem("token_access");

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
      query: () => ({
        url: "catalog/track/favorite/all/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),

    refreshToken: builder.mutation({
      query: () => ({
        url: "user/token/refresh/",
        body: JSON.stringify({
          refresh: localStorage.getItem("token_refresh"),
        }),
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }),
  }),
});

export const {
  useGetAllTrackQuery,
  useGetAllFavoriteQuery,
  useRefreshTokenMutation,
} = allTrackStore;
