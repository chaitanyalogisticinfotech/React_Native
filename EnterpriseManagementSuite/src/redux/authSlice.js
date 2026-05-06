import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  profileImage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.profileImage = null;
    },
  },
});

export const { setUser, setProfileImage, logout } = authSlice.actions;
export default authSlice.reducer;