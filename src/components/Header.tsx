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
    <div className="text-2xl">
      <div className="header">
        <div className="header-text">Jobs</div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={handleChange}
        />
        <div>
          <button className="button">P</button>
          <button className="button">B</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
