import { RootState } from 'app/store';
export const selectSelectedRegion = (state: RootState) => state.regionFilter.selectedRegion;