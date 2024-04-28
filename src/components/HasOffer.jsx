import styled from "styled-components";

const HasOffer = styled.span`
  /* padding-top: 1rem; */
  text-decoration: line-through;
  color: var(--color-grey-400);
  font-size: 10px;
  /* @media (max-width: 900px) {
    font-size: 10px;
    
  } */
  @media (max-width: 700px) {
    font-size: 10px;
  }
  @media (min-width: 700px) {
    font-size: 12px;
  }
  @media (min-width: 900px) {
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;
export default HasOffer;
