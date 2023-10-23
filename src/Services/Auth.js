import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIHOST = "https://skypro-music-api.skyeng.tech/user/";

export const allToken = createApi({
  reducerPath: "userToken",
  baseQuery: fetchBaseQuery({
    baseUrl: APIHOST,
  }),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: (body) => ({
        url: "token/",
        method: "POST",
        body,
      }),
    }),

    addTodo: builder.mutation({
      query: (body) => ({
        url: "token/",
        method: "POST",
        body,
      }),
    }),

    // https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/
  }),
 
});

export const { useGetTokenMutation, useAddTodoMutation } = allToken;
