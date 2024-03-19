import styled from "styled-components";

const HasOffer = styled.span`
  padding-top: 1rem;
  text-decoration: line-through;
  color: var(--color-grey-400);
  font-size: 15px;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;
export default HasOffer;
