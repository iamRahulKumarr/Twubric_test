import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  users: [],
  error: '',
  sort: '',
  sortBy: '',
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        'https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json'
      );
      if (!res.ok) throw new Error('Network error!');

      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const sortUsers = (state, sortBy) => {
  if (state.sortBy !== sortBy) {
    state.sortBy = sortBy;
    state.sort = 'ascending';
  } else {
    state.sort = state.sort === 'ascending' ? 'descending' : 'ascending';
  }
  state.users = [...state.users].sort((a, b) => {
    if (state.sort === 'ascending') {
      return a.twubric[sortBy] - b.twubric[sortBy];
    } else {
      return b.twubric[sortBy] - a.twubric[sortBy];
    }
  });
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    removeUser(state, action) {
      state.users = state.users.filter((user) => user.uid !== action.payload);
    },
    sortByTotal(state) {
      sortUsers(state, 'total');
    },
    sortByFriends(state) {
      sortUsers(state, 'friends');
    },
    sortByInfluence(state) {
      sortUsers(state, 'influence');
    },
    sortByChirpiness(state) {
      sortUsers(state, 'chirpiness');
    },
    filterUserByDate(state, action) {
      const startDate = new Date(action.payload.start[0]).getTime();
      const endDate = new Date(action.payload.end[0]).getTime();
      console.log(startDate, endDate);
      state.users = [...state.users].filter(
        (user) =>
          user.join_date * 1000 >= startDate && user.join_date * 1000 <= endDate
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'Something went wrong!';
      });
  },
});

const userReducer = userSlice.reducer;

export const {
  removeUser,
  sortByTotal,
  sortByFriends,
  sortByInfluence,
  sortByChirpiness,
  filterUserByDate,
} = userSlice.actions;

export const getUserState = (state) => state.user;

export default userReducer;
