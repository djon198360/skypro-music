import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIHOST = "https://skypro-music-api.skyeng.tech/user/";

export const allUserStore = createApi({
  reducerPath: "allUserStore",
  baseQuery: fetchBaseQuery({
    baseUrl: APIHOST,
  }),
  endpoints: (builder) => ({
    checkAuthData: builder.mutation({
      query: (body) => ({
        url: "login/",
        method: "POST",
        body,
      }),
    }),

    checkRegisterData: builder.mutation({
      query: (body) => ({
        url: "signup/",
        method: "POST",
        body,
      }),
    }),

    // https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/
  }),
});

export const {  useCheckRegisterDataMutation } = allUserStore;
