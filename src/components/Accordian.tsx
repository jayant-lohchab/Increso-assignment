import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { IFilter, setSelectedFilterOptions } from "../features/FilterSlice";
import "./Accordian.css"
interface IAccordianProp {
  filter: IFilter;
}

const Accordian: React.FC<IAccordianProp> = ({ filter }) => {
  const reduxDispatch = useAppDispatch();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleClick = (filterOption: string) => {
    const isChecked = selectedOptions.includes(filterOption);

    const updatedOptions = isChecked
      ? selectedOptions.filter(option => option !== filterOption)
      : [...selectedOptions, filterOption];

    setSelectedOptions(updatedOptions);
    reduxDispatch(
      setSelectedFilterOptions({
        filterKey: filter.filterKey,
        selectedOptions: updatedOptions
      })
    );
  };

  return (
    <div className="filter dark-theme">
      <div className="filter-header dark-theme">{filter.filterName}</div>
      <ul className="filter-options dark-theme">
        {filter.filterOptions.map((filterOption, index) => {
          return (
            <li className="filter-option dark-theme" key={index} onClick={() => handleClick(filterOption)}>
              <input
                type="checkbox"
                onChange={() => handleClick(filterOption)}
              />{" "}
              {filterOption}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordian;
