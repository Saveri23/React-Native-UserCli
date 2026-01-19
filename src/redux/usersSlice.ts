import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../api/usersApi';
import { User } from '../types/User';
import {
  saveUsersToStorage,
  loadUsersFromStorage,
} from '../utils/storage';

interface UsersState {
  users: User[];
  loading: boolean;
}

const initialState: UsersState = {
  users: [],
  loading: false,
};

export const loadUsers = createAsyncThunk(
  'users/load',
  async (_, { rejectWithValue }) => {
    try {
      const cached = await loadUsersFromStorage();
      if (cached) return cached;

      const apiUsers = await fetchUsers();
      await saveUsersToStorage(apiUsers);
      return apiUsers;
    } catch (e) {
      return rejectWithValue('Failed to load users');
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadUsers.pending, state => {
        state.loading = true;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(loadUsers.rejected, state => {
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
