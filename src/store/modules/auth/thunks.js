import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../../../api/auth.services';
import { setUser } from './actions'

export const loginThunks = createAsyncThunk('auth/login',
    async ({ email, password }, { dispatch,rejectWithValue }) => {
        try {
            const { data } = await loginApi(email, password);
            dispatch(setUser(data));
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });