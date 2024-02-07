import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IJobPosting } from "./JobsSlice";

const fetchJobsThunk = createAsyncThunk("fetch/jobs", async () => {
  const jobPostings: Array<IJobPosting> = (
    await axios.get("https://demo0456893.mockable.io/jobs")
  ).data;

  return jobPostings;
});

export default fetchJobsThunk;
