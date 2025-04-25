import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegionFilterState {
  selectedRegion: string;
}

const initialState: RegionFilterState = {
  selectedRegion: 'All',
};

export const regionFilterSlice = createSlice({
  name: 'regionFilter',
  initialState,
  reducers: {
    setSelectedRegion: (state, action: PayloadAction<string>) => {
      state.selectedRegion = action.payload;
    },
  },
});

export const { setSelectedRegion } = regionFilterSlice.actions;
export default regionFilterSlice.reducer;