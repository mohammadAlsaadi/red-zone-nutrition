import styled, { css } from "styled-components";
import SearchBar from "./SearchBar";
import {
  HiOutlineBars3,
  HiOutlineLanguage,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { useShowSideBar } from "../context/ShowSideBar";
import Logo from "./Logo";
import { useLocation, useNavigate } from "react-router-dom";
import CartModal from "./CartModal";
import { useState } from "react";
import OptionsBar from "./OptionsBar";
import { useScrolled } from "../context/ScrolledContext";
import useProducts from "../featurs/product/useProducts";
import ProductResult from "./ProductResult";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import LanguageModal from "../featurs/language/LanguageModal";
import { useBodyDirection } from "../context/BodyDirectionContext";
import { useDeviceWidth } from "../context/DeviceWidthContext";
import UserCard from "../featurs/authentication/UserCard";
import { useUser } from "../featurs/authentication/useUser";
import ButtonText from "./ButtonText";
function Header() {
  const [searchInput, setSearchInput] = useState("");
  const { data } = useProducts();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { showSideBar, setShowSideBar } = useShowSideBar();
  const pathName = useLocation().pathname;
  const isHomePagePath = pathName === "/home" || pathName === "/contact-us";
  const { isScrolled } = useScrolled();
  const { t } = useTranslation();
  const { isDesktopDevice } = useDeviceWidth();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const { bodyDirectionection } = useBodyDirection();
  const language = window.localStorage.getItem("language");
  const isAr = language === "ar";
  let resultData =
    searchInput.length >= 2 &&
    data.filter((item) =>
      isAr
        ? item.name_ar.includes(searchInput)
        : item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  function handleNavigate(path) {
    navigate(path);
    setShowSideBar(false);
  }
  if (showSearchBar)
    return (
      <StyledSearchResult>
        <StyledHeader>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setShowSideBar={setShowSideBar}
            setShowSearchBar={setShowSearchBar}
          />
        </StyledHeader>
        <StyledResult>
          {resultData &&
            resultData.map((item) => (
              <ProductResult
                setShowSearchBar={setShowSearchBar}
                item={item}
                key={item.id}
              />
            ))}
        </StyledResult>
      </StyledSearchResult>
    );
  if (!showSearchBar) {
    return (
      <StyledHeader>
        <LayerOne ishomepagepath={isHomePagePath} isscrolled={isScrolled}>
          <OptionsContainer1>
            {!showSideBar && (
              <StyledSideBarButton onClick={() => setShowSideBar(true)}>
                <HiOutlineBars3
                  size={22}
                  color={
                    isScrolled || !isHomePagePath ? "" : "var(--color-grey-0)"
                  }
                />
              </StyledSideBarButton>
            )}
            <StyledSearchButton onClick={() => setShowSearchBar(true)}>
              <HiOutlineMagnifyingGlass
                size={22}
                color={
                  isScrolled || !isHomePagePath ? "" : "var(--color-grey-0)"
                }
              />
            </StyledSearchButton>
          </OptionsContainer1>
          <SearchBarContainer
            dir={bodyDirectionection}
            onClick={() => setShowSearchBar((showen) => !showen)}
          >
            <HiOutlineMagnifyingGlass
              size={22}
              color={isScrolled || !isHomePagePath ? "" : "var(--color-grey-0)"}
            />
            <SearchText ishomepagepath={isHomePagePath} isscrolled={isScrolled}>
              {t("Search")}
            </SearchText>
          </SearchBarContainer>

          <Logo
            width={250}
            height={60}
            src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/product-nutrition-facts/redzoneWithoutbg.png"
          />

          <OptionsContainer2>
            {isDesktopDevice && (
              <UserContainer isauth={isAuthenticated}>
                {isAuthenticated ? (
                  <UserCard />
                ) : (
                  <ButtonText
                    fontWeight="600"
                    fontSize="small"
                    color={
                      isScrolled || !isHomePagePath
                        ? "var(--color-grey-800)"
                        : "var(--color-grey-0)"
                    }
                    onClick={() => handleNavigate("/login")}
                  >
                    {t("sign in")}
                  </ButtonText>
                )}
              </UserContainer>
            )}
            <Modal>
              <Modal.Open opens="language">
                <div>
                  <HiOutlineLanguage
                    cursor="pointer"
                    size={22}
                    color={
                      isScrolled || !isHomePagePath
                        ? "var(--color-grey-800)"
                        : "var(--color-grey-0"
                    }
                  />
                </div>
              </Modal.Open>
              <Modal.Window name="language">
                <LanguageModal />
              </Modal.Window>
            </Modal>
            <CartModal />
          </OptionsContainer2>
        </LayerOne>
        <LayerTwo ishomepagepath={isHomePagePath} isscrolled={isScrolled}>
          <OptionsBar />
        </LayerTwo>
      </StyledHeader>
    );
  }
}

export default Header;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

const StyledSearchResult = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  background-color: var(--color-grey-0);
`;
const LayerOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  padding: 0rem 1rem;
  ${(props) =>
    props.isscrolled ||
    (!props.ishomepagepath &&
      css`
        border-bottom: 1px solid var(--color-grey-300);
      `)}
  @media (max-width: 600px) {
    padding: 0rem;
  }
`;
const LayerTwo = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 3rem;
    ${(props) =>
      props.isscrolled ||
      (!props.ishomepagepath &&
        css`
          border-bottom: 1px solid var(--color-grey-300);
        `)}
  }
`;
const OptionsContainer1 = styled.div`
  display: flex;
  padding-left: 2rem;
  @media (min-width: 900px) {
    display: none;
  }
`;

const StyledSideBarButton = styled.div`
  display: none;

  @media (max-width: 900px) {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const StyledSearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 900px) {
    width: 5rem;
    height: 5rem;
  }
`;
const SearchBarContainer = styled.div`
  padding-right: ${(props) => props.dir === "rtl" && "2rem"};
  display: none;
  @media (min-width: 900px) {
    display: flex;
    gap: 0.6rem;
    padding-left: 2rem;
    align-items: center;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const SearchText = styled.p`
  color: ${(props) =>
    props.isscrolled || !props.ishomepagepath
      ? "var(--color-grey-700)"
      : "var(--color-grey-0)"};
  padding-left: 0.6rem;
  font-size: 11px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const OptionsContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.4rem;
`;
const UserContainer = styled.div`
  display: flex;
  width: 60%;

  align-items: center;
`;
