import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get("/api/products");
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [
      {
        title: "Ttile",
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  },
});

// Selectors
export const selectProducts = (state) => state.data.data;

export default dataSlice.reducer;
