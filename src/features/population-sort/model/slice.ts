import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortOrder } from "./types";

interface SortState {
  order: SortOrder;
}

const initialState: SortState = {
  order: "asc",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
  },
});

export const { setSortOrder } = sortSlice.actions;
export default sortSlice.reducer;
