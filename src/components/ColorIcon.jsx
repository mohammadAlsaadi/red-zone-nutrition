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
  border: 1px solid var(--color-grey-200) r;
  background-color: ${(props) => props.color};
`;
