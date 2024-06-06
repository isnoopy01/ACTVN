import {createSlice} from '@reduxjs/toolkit';

type Role = 'student' | 'teacher';

type RoleState = {
  role?: Role;
};
const initialState: RoleState = {};
export const roleSlice = createSlice({
  name: 'role',
  initialState: initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});
