import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { IFilter } from "../features/FilterSlice";
import Accordian from "./Accordian";
import fetchFiltersThunk from "../features/FilterThunk";

export default function Sidebar() {
  const reduxDispatch = useAppDispatch();
  const filters = useAppSelector((store) => store.filter.filters);

  useEffect(() => {
    reduxDispatch(fetchFiltersThunk());
  }, [reduxDispatch]);

  return (
    <div>
      <div className="sidebar-header flex justify-between items-center">
        <div className="flex-grow">Filter By</div>
        <div className="text-sm">3 Filters Applied   Clear All</div>
      </div>

      {filters.map((filter: IFilter, index) => {
        return <Accordian filter={filter} key={index} />;
      })}
    </div>
  );
}
