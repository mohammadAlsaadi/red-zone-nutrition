import styled from "styled-components";
import Options from "./Options";

function OptionsBar() {
  return (
    <OptionsContainer>
      <Options />
    </OptionsContainer>
  );
}

export default OptionsBar;
const OptionsContainer = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
  /* background-color: var(--color-grey-50); */
  position: absolute;
  width: 100%;
  margin: 0rem 10rem;
`;
