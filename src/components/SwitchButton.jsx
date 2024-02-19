import React, { useState } from "react";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleToggle = () => {
    toggleDarkMode();
    setIsChecked((check) => !check);
  };

  return (
    <SwitchContainer onClick={handleToggle} isChecked={isChecked}>
      <SwitchHandle isChecked={isChecked}>
        {isDarkMode ? (
          <HiOutlineMoon color="red" />
        ) : (
          <HiOutlineSun color="red" size={10} />
        )}
      </SwitchHandle>
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${({ isChecked }) => (isChecked ? "#f20404" : "#ccc")};
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;

  &:active {
    background-color: ${({ isChecked }) => (isChecked ? "#f20404" : "#bbb")};
  }
`;

const SwitchHandle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: ${({ isChecked }) => (isChecked ? "30px" : "0")};
  transition: left 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export default SwitchButton;
