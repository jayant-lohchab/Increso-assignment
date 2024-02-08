import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import fetchJobsThunk from "../features/JobsThunk";
import Card from "./Card";
import { IJobPosting } from "../features/JobsSlice";

export default function List() {
  const reduxDispatch = useAppDispatch();
  const jobPostings = useAppSelector((store) => store.jobsPostings.jobPostings);
  const filterStore = useAppSelector((store) => store.filter);

  const [filteredJobPostings, setFilteredJobPostings] = useState<IJobPosting[]>(
    []
  );

  useEffect(() => {
    reduxDispatch(fetchJobsThunk());
  }, [reduxDispatch]);

  useEffect(() => {
    const updatedJobPostings: IJobPosting[] = jobPostings.filter((job) => {
      let isShow = true;
      for (const [key, value] of Object.entries(filterStore.selectedFilters)) {
        if (value.length !== 0 && isShow) {
          const jobPropertyValue = String(job[key as keyof IJobPosting]);
          isShow = value.includes(jobPropertyValue);
        }
      }

      if (filterStore.searchText !== "" && isShow) {
        isShow = job.position
          .toLocaleLowerCase()
          .includes(filterStore.searchText.toLocaleLowerCase());
      }

      return isShow;
    });

    setFilteredJobPostings(updatedJobPostings);
  }, [filterStore, jobPostings]);

  return (
    <div>
      {filteredJobPostings.map((jobPosting, index) => (
        <Card
          key={jobPosting.id}
          position={jobPosting.position}
          location={jobPosting.location}
          companyName={jobPosting.companyName}
          date={jobPosting.date}
          applicants={jobPosting.applicants}
        />
      ))}
    </div>
  );
}
