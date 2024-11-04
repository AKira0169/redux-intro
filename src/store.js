import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './features/accounts/accountSlice';
import customerSlice from './features/customers/customerSlice';

const store = configureStore({
  reducer: { account: accountSlice, customer: customerSlice },
});

export default store;
