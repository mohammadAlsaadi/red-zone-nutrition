import React, { useState } from "react";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleToggle = () => {
    toggleDarkMode();
    setIsChecked((check) => !check);
  };

  return (
    <SwitchContainer onClick={handleToggle} ischecked={isChecked}>
      <SwitchHandle ischecked={isChecked}>
        {isDarkMode ? "🌙" : "☀️"}
      </SwitchHandle>
    </SwitchContainer>
  );
};

export default SwitchButton;
const SwitchContainer = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${({ ischecked }) => (ischecked ? "#f20404" : "#ccc")};
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;

  &:active {
    background-color: ${({ ischecked }) => (ischecked ? "#f20404" : "#bbb")};
  }
`;

const SwitchHandle = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--color-grey-50);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: ${({ ischecked }) => (ischecked ? "30px" : "0")};
  transition: left 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  align-items: center;
  display: flex;
  justify-content: center;
`;
