import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../../comom/API/api";
export const loginAsync = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    const res = await loginApi(data);
    if (res.status < 200 || res.status >= 300) {
      return rejectWithValue(res.data);
    }
    localStorage.setItem("token", res.data);
    return res.data;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    errorMessage: "",
    currentUser: null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    logout: (state) => {
      state.errorMessage = "";
      state.currentUser = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    // start
    builder.addCase(loginAsync.pending, (state) => {
      state.isLoading = true;
    });
    // login thành công
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
    });
    // Thất bại
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});
export const { logout, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
