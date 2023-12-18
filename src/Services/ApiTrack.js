/* eslint-disable consistent-return */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIHOST = "https://skypro-music-api.skyeng.tech/";
const DATA_TAG = { type: "Tracks", id: "LIST", types: "Favorite" };

export const refreshToken = async (functionCallback) => {
  const token = await fetch(`${APIHOST}user/token/refresh/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ refresh: localStorage.getItem("token_refresh") }),
  });
  const data = await token.json();
  if (!token.ok) {
    throw data;
  }
  localStorage.setItem("token_access", data.access);
  if (functionCallback) {
    functionCallback();
  }
};

export const allTrackStore = createApi({
  reducerPath: "allTrackStore",
  tagTypes: ["Favorite"],
  baseQuery: fetchBaseQuery({
    baseUrl: APIHOST,
    refreshToken: refreshToken(),
  }),
  endpoints: (builder) => ({
    /*     refreshToken: builder.mutation({
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
    }), */

    getAllFavorite: builder.query({
      query() {
        return {
          url: "catalog/track/favorite/all/",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        };
      },
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Tracks", id })),
        DATA_TAG,
      ],
    }),

    getTrack: builder.query({
      query(id) {
        return {
          url: `catalog/track/${id}`,
        };
      },
      providesTags: (result = []) => [
        ...(Array.isArray(result)
          ? result.map(( track ) => ({ type: "Tracks", id:track?.id }))
          : []),
        DATA_TAG,
      ],
      
      /*  query: (id) => `catalog/track/${id}`,
      providesTags: (result = []) => [
        ...result.map((id) => ({ type: "Favorite",id })),
        DATA_TAG,
      ], */
    }),

    getAllTrack: builder.query({
      query: () => "catalog/track/all/",
      providesTags: (result = []) => [
        ...result.map((id) => ({ type: "Favorite", id })),
        DATA_TAG,
      ],
    }),

    getCategory: builder.query({
      query: (data) => `catalog/selection/${data}`,
      providesTags: (result = []) => [
        ...(Array.isArray(result)
          ? result.map(({ id }) => ({ type: "Tracks", id }))
          : []),
        DATA_TAG,
      ],
      
    }),

    likeTrack: builder.mutation({
      query(data) {
        const { id } = data;
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        };
      },
      invalidatesTags: (track) => [{ type: "Tracks", id: track?.id }],
    }),

    DislikeTrack: builder.mutation({
      query(data) {
        const { id } = data;
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_access")}`,
          },
        };
      },
      invalidatesTags: (track) => [{ type: "Tracks", id: track?.id }],
    }),
  }),
});

export const {
  useGetAllFavoriteQuery,
  useGetAllTrackQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
  useGetCategoryQuery,
  useRefreshTokenMutation,
  useGetTrackIdQuery,
} = allTrackStore;
