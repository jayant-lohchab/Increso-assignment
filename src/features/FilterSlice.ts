import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import fetchFiltersThunk from "./FilterThunk";

export interface IFilter {
  filterName: string;
  filterKey: string;
  filterOptions: Array<string>;
}

interface IFilterState {
  filters: Array<IFilter>;
  selectedFilters: Record<string, Array<string>>;
  searchText: string;
}

const initialState: IFilterState = {
  filters: [],
  selectedFilters: {},
  searchText: ""
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedFilterOptions(
      state,
      action: PayloadAction<{
        filterKey: string;
        selectedOptions: Array<string>;
      }>
    ) {
      const { filterKey, selectedOptions } = action.payload;
      state.selectedFilters[filterKey] = selectedOptions;
    },
    setSearchText(
      state,
      action: PayloadAction<{
        searchText: string;
      }>
    ) {
      state.searchText = action.payload.searchText;
    }
  },
  extraReducers: builder => {
    builder.addCase(
      fetchFiltersThunk.fulfilled,
      (state, action: PayloadAction<IFilter[]>) => {
        state.filters = action.payload;
      }
    );
  }
});

export const { setSelectedFilterOptions, setSearchText } = filterSlice.actions;

export default filterSlice.reducer;
