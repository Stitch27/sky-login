import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './modules/auth';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});