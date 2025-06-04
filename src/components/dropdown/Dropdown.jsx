import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import ClickAwayListener from "@mui/base/ClickAwayListener"; // Assuming this is from MUI

const SelectDropdown = (params) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("January");

  const handleClickAway = () => setIsDropdownVisible(false);

  const dropdownContent = (
    <div className="absolute z-10 w-full bg-neutral-700 rounded shadow-xl">
      {params.options.map((option, index) => (
        <div
          key={index}
          onClick={() => {
            setSelectedMonth(option);
            setIsDropdownVisible(false);
          }}
          className="px-3 py-2 cursor-pointer hover:bg-neutral-600 text-neutral-100"
        >
          {option}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-full flex justify-center pt-10">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="relative">
          <div
            onClick={() => setIsDropdownVisible(true)}
            className="border border-neutral-100 px-3 py-2 rounded h-8 w-60 flex items-center text-neutral-100 shadow-xl justify-between"
          >
            {selectedMonth}
            <FaCaretDown
              className={`ml-2 transition-transform ${
                isDropdownVisible ? "rotate-180" : ""
              }`}
            />
          </div>
          {isDropdownVisible && dropdownContent}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default SelectDropdown;
