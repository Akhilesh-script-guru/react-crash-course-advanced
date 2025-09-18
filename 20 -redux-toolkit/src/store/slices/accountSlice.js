import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      const { amount, purpose } = action.payload;
      console.log(action.payload);

      if (state.loan === 0) {
        state.loan = amount;
        state.loanPurpose = purpose;
        state.balance += amount;
      }
    },
    payLoan(state) {
      if (state.balance >= state.loan) {
        state.balance -= state.loan;
        state.loan = 0;
        state.loanPurpose = "";
      }
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;
