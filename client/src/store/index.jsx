import { configureStore } from '@reduxjs/toolkit';
import workFlowReducer from './slices/workFlow.slice';

export const store = configureStore({
  reducer: {
    workFlow: workFlowReducer,
  },
});
