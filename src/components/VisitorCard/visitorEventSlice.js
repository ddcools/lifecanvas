import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const visitorEventSlice = createSlice({
  name: 'visitorEvent',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, toggleTask } = visitorEventSlice.actions;
export default visitorEventSlice.reducer;