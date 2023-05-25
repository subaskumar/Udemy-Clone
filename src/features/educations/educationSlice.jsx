import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subCategoryData: {},
  // allCategory: []
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setSubCategory: (state, action) => {
        const { payload } = action;
        state.subCategoryData = payload.subCategoryData;
    },
  //   setAllCategory: (state, action) => {
  //     const { payload } = action;
  //     state.allCategory = payload;
  // },

  },
});

const { reducer, actions } = educationSlice;

export const {setSubCategory } = actions;

export default reducer;