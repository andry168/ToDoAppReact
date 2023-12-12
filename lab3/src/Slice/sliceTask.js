import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import taskApi from "../api/tasks/index.js";

export const getList = createAsyncThunk("getTasks", async () => {
  return taskApi.getAllTasks()
  .then((response) => {
    return response.data;
  });
});
const initialState = {
  tasks: [],
  isLoading: false,
  status: '',
};

export const sliceTask = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Добавляем обработчики для "pending", "fulfilled", "rejected"
    builder
      .addCase(getList.pending, (state) => {
        state.status = 'pending';
        state.isLoading = true;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.tasks = action.payload;
        state.isLoading = false;
      })
      .addCase(getList.rejected, (state, action) => {
        state.status = 'rejected';
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = sliceTask.actions;

export default sliceTask.reducer;
