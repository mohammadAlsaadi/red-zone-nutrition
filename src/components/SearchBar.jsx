import styled from "styled-components";
import { HiOutlineMagnifyingGlass, HiXMark } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

function SearchBar({ setShowSearchBar, setSearchInput, searchInput }) {
  const { t } = useTranslation();
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <SearchBarContainer>
      <StyledCloseButton onClick={() => setShowSearchBar(false)}>
        <HiXMark size={25} />
      </StyledCloseButton>
      <StyledSearchBar>
        <StyledInput
          placeholder={t("Search for product..")}
          value={searchInput}
          onChange={handleInputChange}
        />
        <ButtonIcon>
          <HiOutlineMagnifyingGlass color="black" />
        </ButtonIcon>
      </StyledSearchBar>
    </SearchBarContainer>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: var(--color-grey-0);
`;

const StyledInput = styled.input`
  border: none;
  background-color: var(--color-grey-100);
  padding-left: 2rem;
  width: 35rem;
  padding-top: 10px;
  padding-bottom: 10px;
  &::placeholder {
    color: var(--color-grey-800);
    font-size: medium;
  }
  height: 3.5rem;
  &:focus {
    outline: none;
  }
`;

const StyledCloseButton = styled.div`
  padding-left: 95%;
  cursor: pointer;
`;

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

const ButtonIcon = styled.div`
  cursor: pointer;
`;
