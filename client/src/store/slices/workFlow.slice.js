import { createSlice } from '@reduxjs/toolkit';

export const workFlow = createSlice({
  name: 'nodes',
  initialState: [],
  reducers: {
    setNodes: (state, action) => {
      return action.payload;
    },
    addNode: (state, action) => {
      state.push(action.payload);
    },
    removeNode: (state, action) => {
      return state.filter((node) => node.id !== action.payload);
    },
    updateCondition: (state, action) => {
      const { id, condition } = action.payload;
      const node = state.find((node) => node.id === id);
      if (node) {
        node.data.condition = condition;
      }
    },
  },
});

export const { setNodes, addNode, removeNode, updateCondition } = workFlow.actions;
export default workFlow.reducer;
