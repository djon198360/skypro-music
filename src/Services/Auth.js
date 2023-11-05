import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIHOST = "https://skypro-music-api.skyeng.tech/user/";
const DATA_TAG = { type: "Todos", id: "LIST" };
export const allToken = createApi({
  reducerPath: "allToken",
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
      invalidatesTags: [DATA_TAG],
    }),

    addTodo: builder.mutation({
      query: (body) => ({
        url: "token/",
        method: "POST",
        body,
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),

    // https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/
  }),
 
});


export const { useGetTokenMutation, useAddTodoMutation } = allToken;
