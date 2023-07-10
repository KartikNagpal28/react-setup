import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setUser } from '@app/store/slices/userSlice';
import { deleteToken, deleteUser, persistToken, persistUser, readToken } from '@app/services/localStorage.service';
import { signIn } from '@app/services/registerUser';
import { notificationController } from '@app/controllers/notificationController';
import { LoginErrors } from '@app/constants/enums/login-errors.enum';

export interface AuthSlice {
  token: string | null;
}

const initialState: AuthSlice = {
  token: readToken(),
};

export const doLogout = createAsyncThunk('auth/doLogout', (payload, { dispatch }) => {
  deleteToken();
  deleteUser();
  dispatch(setUser(null));
});

export const doSetAuth = createAsyncThunk('auth/set', async (payload: any, { dispatch }) => {
  dispatch(setUser(payload.user));
  persistUser(payload.user);
  persistToken(payload.token.accessToken);
  return payload.token.accessToken;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
