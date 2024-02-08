import React, { ChangeEvent } from "react";
import "./Header.css";
import { useAppDispatch } from "../app/hooks";
import { setSearchText } from "../features/FilterSlice";

const Header: React.FC = () => {
  const reduxDispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    reduxDispatch(setSearchText({ searchText }));
  };

  return (
    <div className="text-2xl header-component">
      <div className="header">
        <div className="header-text">Jobs</div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={handleChange}
        />
        <div>
          <button className="button bttn2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></button>
          <button className="button bttn1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
