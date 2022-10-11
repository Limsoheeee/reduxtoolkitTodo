import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "toDo",
  initialState: {
    toDoList: [],
    isDoneList: [],
    isNotDoneList: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.toDoList.push(action.payload);
    },
    sortCard: (state) => {
      const filteredIsDone = state.toDoList.filter((item) => {
        return item.isDone === true;
      });
      const filteredIsNotDone = state.toDoList.filter((item) => {
        return item.isDone === false;
      });
      state.isDoneList = filteredIsDone;
      state.isNotDoneList = filteredIsNotDone;
    },
    delCard: (state, action) => {
      const filteredList = state.toDoList.filter((item) => {
        return item.id !== action.payload;
      });
      state.toDoList = filteredList;
    },
    changeIsDone: (state, action) => {
      const selectdeCard = state.toDoList.filter((item) => {
        return item.id === action.payload;
      });
      const myCard = selectdeCard[0];
      const rest = state.toDoList.filter((item) => {
        return item.id !== action.payload;
      });
      const updatedCard = { ...myCard, isDone: true };
      rest.push(updatedCard);
      state.toDoList = rest;
    },
    changeIsNotDone: (state, action) => {
      const selectdeCard = state.toDoList.filter((item) => {
        return item.id === action.payload;
      });
      const myCard = selectdeCard[0];
      const rest = state.toDoList.filter((item) => {
        return item.id !== action.payload;
      });
      const updatedCard = { ...myCard, isDone: false};
      rest.push(updatedCard);
      state.toDoList = rest;
    },
  },
});

export const { addCard, sortCard, delCard, changeIsDone, changeIsNotDone} = todoSlice.actions;

export default todoSlice.reducer;
