import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ResetPasswordRequest,
  login,
  LoginRequest,
  signUp,
  SignUpRequest,
  resetPassword,
  verifySecurityCode,
  SecurityCodePayload,
  NewPasswordData,
  setNewPassword,
} from '@app/api/auth.api';
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

export const doLogin = createAsyncThunk(
  'auth/doLogin',
  async (loginPayload: LoginRequest, { dispatch, rejectWithValue }) =>
    signIn(loginPayload)
      .then((res: any) => {
        if (res.data.user.isAdmin) {
          notificationController.error({ message: 'Invalid Credentials' });
          return;
        }
        dispatch(setUser(res.data.user));
        persistToken(res.data.token.accessToken);
        persistUser(res.data.user);
        persistToken(res.data.token.accessToken);
        return res.data.token.accessToken;
      })
      .catch((err: any) => {
        const message = err?.data?.message;
        const value = err?.status == 403 ? LoginErrors.UNVERIFIED : message;
        return rejectWithValue(value);
      }),
);

export const doSignUp = createAsyncThunk('auth/doSignUp', async (signUpPayload: SignUpRequest) =>
  signUp(signUpPayload),
);

export const doResetPassword = createAsyncThunk(
  'auth/doResetPassword',
  async (resetPassPayload: ResetPasswordRequest) => resetPassword(resetPassPayload),
);

export const doVerifySecurityCode = createAsyncThunk(
  'auth/doVerifySecurityCode',
  async (securityCodePayload: SecurityCodePayload) => verifySecurityCode(securityCodePayload),
);

export const doSetNewPassword = createAsyncThunk('auth/doSetNewPassword', async (newPasswordData: NewPasswordData) =>
  setNewPassword(newPasswordData),
);

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
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(doLogout.fulfilled, (state) => {
      state.token = '';
    });
    builder.addCase(doSetAuth.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

export default authSlice.reducer;
