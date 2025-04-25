import { RootState } from "@/app/store";

export const selectSearchQuery = (state: RootState) => state.search.query;