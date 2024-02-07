import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import fetchJobsThunk from "./JobsThunk";

export interface IJobPosting {
  id: number;
  position: string;
  companyName: string;
  skill: string;
  applicants: number;
  location: string;
  date: string;
  salary: string;
  experience: string;
  education: string;
  logo: string;
}

interface IJobsState {
  jobPostings: Array<IJobPosting>;
}

const initialState: IJobsState = {
  jobPostings: []
};

const filterSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchJobsThunk.fulfilled,
      (state, action: PayloadAction<IJobPosting[]>) => {
        state.jobPostings = action.payload;
      }
    );
  }
});

export default filterSlice.reducer;
