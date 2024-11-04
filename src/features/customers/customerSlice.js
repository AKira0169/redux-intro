import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    name: '',
    nationalID: '',
    createdAt: '',
  },
  reducers: {
    createCustomer: {
      prepare: (name, nationalID) => {
        return { payload: { name, nationalID, createdAt: new Date().toISOString() } };
      },
      reducer: (state, action) => {
        state.name = action.payload.name;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});
console.log(customerSlice);

export default customerSlice.reducer;

export const { createCustomer, updateName } = customerSlice.actions;
