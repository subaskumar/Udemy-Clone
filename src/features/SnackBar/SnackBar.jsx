import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    message: "",
    severity: 'success',
    vertical: 'top',
    horizontal: 'right'

};

const snackBarSlice = createSlice({
  name: "snackBar",
  initialState,
  reducers: {
    setSnackBar: (state, action) => {
        const {payload} = action
        state.open = true;
        state.message = payload.message
        state.severity = payload.severity
    },
    closeSnackBar: (state, action) => {
        // const {payload} = action
        state.open = false;
        // state.message = payload.message
        // state.severity = payload.severity
    },

  },
});

const { reducer, actions } = snackBarSlice;

export const { setSnackBar, closeSnackBar} = actions;

export default reducer;