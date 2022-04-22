import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  data: {
    product_type: "personal Loan",
    loan_type: "",
    profession: "",
    gender: "",
    day: "",
    month: "",
    year: "",
    residence: "",
    location: "",
  },
};

export const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    nextPage: (state, action) => {
      state.page += 1;
    },

    prevPage: (state, action) => {
      state.page -= 1;
    },
    saveData: (state, action) => {
      const newData = { ...state.data };
      newData[action.payload.name] = action.payload.value;
      state.data = newData;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveData,
  nextPage,
  prevPage,
  increment,
  decrement,
  incrementByAmount,
} = loanSlice.actions;

export default loanSlice.reducer;
