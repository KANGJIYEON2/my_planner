import { styled } from "styled-components";
import { useState } from "react";

export type CustomDropdownType = {
  className?: string;
  width?: string;
  dropdownPadding?: string;
  name?: string;
  options?: string[];
  onSelect?: (selected: string) => void;
};

const CustomDropdown = ({
  className,
  name,
  options = [],
  ...rest
}: CustomDropdownType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper className={className} {...rest}>
      <div className="selected" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || name}
      </div>
      {isOpen && options.length > 0 && (
        <ul className="options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div<CustomDropdownType>`
  position: relative;
  display: inline-block;
  width: ${(props) => (props.width ? props.width : "auto")};

  .selected {
    padding: ${(props) => props.dropdownPadding || "10px"};
    border: 1px solid ${(props) => props.theme.color.second};
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
    color: ${(props) => props.theme.color.main};
    position: relative;
  }

  .options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid ${(props) => props.theme.color.second};
    border-radius: 0 0 10px 10px;
    background-color: white;
    z-index: 10;
    max-height: 150px;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .options li {
    padding: ${(props) => props.dropdownPadding || "10px"};
    cursor: pointer;
    transition: background-color 0.2s ease-in;
  }

  .options li:hover {
    background-color: ${(props) => props.theme.color.second};
    color: white;
  }
`;

export default CustomDropdown;
