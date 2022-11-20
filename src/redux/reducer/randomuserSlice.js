import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersData = createAsyncThunk(
  "getLorems",
  async (object, { getState, rejectWithValue }) => {
    console.log(getState());
    try {
      const { data } = await axios.get(
        "https://random-data-api.com/api/v2/users"
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const userDataSlice = createSlice({
  name: "lorem",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getUsersData.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsersData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getUsersData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default userDataSlice;