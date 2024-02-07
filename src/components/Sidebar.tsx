import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { IFilter } from "../features/FilterSlice";
import Accordian from "./Accordian";
import fetchFiltersThunk from "../features/FilterThunk";

export default function Sidebar() {
  const reduxDispatch = useAppDispatch();
  const filters = useAppSelector(store => store.filter.filters);

  useEffect(() => {
    reduxDispatch(fetchFiltersThunk());
  }, []);

  return (
    <div>
      <div className="sidebar-header">
        <div>Filter By</div>
        <div>3 Filters Applied</div>
        <div>Clear All</div>
      </div>

      {filters.map((filter: IFilter, index) => {
        return <Accordian filter={filter} key={index} />;
      })}
    </div>
  );
}
