import { useEffect, useState } from "react";
import styled from "styled-components";
import { colorCoordination } from "../utils/helper";

function ColorIcon({ dataToConvert }) {
  const [iconColor, setIconColor] = useState("");
  useEffect(
    function () {
      if (!dataToConvert) console.log("no data to convert to color icon !");
      setIconColor(colorCoordination(dataToConvert));
    },

    [dataToConvert, setIconColor]
  );

  return <StyledColorIcon color={iconColor}></StyledColorIcon>;
}

export default ColorIcon;

const StyledColorIcon = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 20px;
  border: 0.8px solid var(--color-grey-200);
  background-color: ${(props) => props.color};
`;
