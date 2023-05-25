import { createSlice } from "@reduxjs/toolkit";

const Token = localStorage.getItem('token')
const User = localStorage.getItem('user')

const initialState = {
    token: Token ? Token : null,
    user: User ? JSON.parse(User) : null,
    isAuthenticated: Token ? true : false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        const { payload } = action;
        // localStorage.setItem('user', jwt_decode(res.data.access))
        localStorage.setItem('token', payload.access_token);
        state.isAuthenticated = true;
    },
    logOut: (state) => {
        localStorage.clear()
        state.token = null
        state.isAuthenticated = false
        state.user = null

    },
    setUserProfile: (state, action) => {
      const { payload } = action;
      localStorage.setItem('user', JSON.stringify(payload))
      state.user = payload
  }

  },
});

const { reducer, actions } = loginSlice;

export const {loginSuccess, logOut, setUserProfile} = actions;

export default reducer;