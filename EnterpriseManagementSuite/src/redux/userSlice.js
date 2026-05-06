import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
    photo: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // ✅ ADD THIS
    setUser: (state, action) => {
      if (action.payload === null) {
        state.user = {
          name: '',
          email: '',
          photo: null,
        };
      } else {
        state.user = {
          ...state.user,
          ...action.payload,
        };
      }
    },

    // ✅ EXISTING
    setUserImage: (state, action) => {
      state.user.photo = action.payload;
    },
  },
});

// ✅ EXPORT BOTH
export const { setUser, setUserImage } = userSlice.actions;

export default userSlice.reducer;