import { configureStore } from '@reduxjs/toolkit';
import sliceTask from './Slice/sliceTask';

export const store = configureStore({
  reducer: {
    task: sliceTask,
  },
})