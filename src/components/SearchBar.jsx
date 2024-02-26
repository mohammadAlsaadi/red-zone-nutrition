import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <StyledSearchBar>
      <StyledInput placeholder="Search for product.." />
      <ButtonIcon>
        <HiOutlineMagnifyingGlass color="red" />
      </ButtonIcon>
    </StyledSearchBar>
  );
}

export default SearchBar;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid transparent;
  border-color: var(--color-grey-200);
  background-color: var(--color-grey-200);
  border-radius: 1rem;
  padding-left: 2rem;
  width: 27rem;
  height: 4rem;
  padding-top: 10px;
  padding-bottom: 10px;
  &::placeholder {
    color: var(--color-red-500);
    font-size: small;
  }
  @media (max-width: 600px) {
    width: 20rem;
    height: 3rem;
    &::placeholder {
      color: var(--color-red-500);
      font-size: x-small;
    }
  }
  height: 2.8rem;
  &:focus {
    /* background-color: var(--color-grey-300); */
    border: none;
    outline: none;
  }
  &::after {
    border: none;
  }
`;

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: 35%; */
`;
