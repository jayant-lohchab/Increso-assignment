import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFilter } from "./FilterSlice";
import axios from "axios";

const fetchFiltersThunk = createAsyncThunk("fetch/filters", async () => {
  const filters: Array<IFilter> = (
    await axios.get("https://demo0456893.mockable.io/filters")
  ).data;

  return filters;
});

export default fetchFiltersThunk;