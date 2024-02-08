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
          <button className="button bttn1">P</button>
          <button className="button bttn2">B</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
