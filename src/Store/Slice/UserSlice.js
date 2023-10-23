/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //  user_Data:null,
/*   email: null,
  first_name: null,
  id: null,
  last_name: null,
  username: null,
  password: null, */
};

export const UserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData(state, action) {
        state.user_Data = action.payload;
      },
      setUserToken(state, action) {
        state.user_Data = action.payload;
      },
  /*   setEmail(state, action) {
      state.email = action.payload;
    },
    setFirstName(state, action) {
      state.first_name = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    },
    setLastName(state, action) {
      state.last_name = action.payload;
    },
    setUserName(state, action) {
      state.username = action.payload;
    },

    setPassword(state, action) {
      state.password = action.payload;
    }, */
  },
});

export const {
    setUserData,
} = UserDataSlice.actions;
export default UserDataSlice.reducer;
