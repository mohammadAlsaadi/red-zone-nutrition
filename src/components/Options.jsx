import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useScrolled } from "../context/ScrolledContext";
import { useEffect, useState } from "react";
import { useUser } from "../featurs/authentication/useUser";
import { useDeviceWidth } from "../context/DeviceWidthContext";
import { useTranslation } from "react-i18next";
function Options() {
  const { isScrolled } = useScrolled();
  const isHomePagePath = useLocation().pathname === "/home";
  const isContactUsPage = useLocation().pathname === "/contact-us";

  const [color, setColor] = useState("");
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const { deviceWidth } = useDeviceWidth();
  const { t } = useTranslation();

  const isLargeScreen = deviceWidth > 1200;

  const { isAuthenticated, isLoading } = useUser();
  useEffect(
    function () {
      if ((isScrolled && isHomePagePath) || (isContactUsPage && isScrolled))
        setColor("var(--color-grey-800)");
      else if (
        (!isScrolled && isHomePagePath) ||
        (isContactUsPage && !isScrolled)
      )
        setColor("var(--color-grey-50)");
      else {
        setColor("var(--color-grey-800)");
      }
    },
    [isScrolled, isHomePagePath, setColor]
  );
  const handleNavigate = () => {
    window.scrollTo(0, 0);
    setIsOpenCategories(false);
  };
  if (isLoading) return;
  return (
    <>
      <StyledOptionsHomePage color={color}>
        <li>
          <StyledNavLink isscrolled={isScrolled} to="/special-offer">
            <Label>{t("Special Offers")}</Label>
          </StyledNavLink>
        </li>
        <li>
          <StyledOptions
            onMouseEnter={() => setIsOpenCategories(true)}
            onMouseLeave={handleNavigate}
            color="color"
          >
            <StyledNavLink
              onClick={handleNavigate}
              isscrolled={isScrolled}
              to="/categories"
            >
              <Label>{t("Categories")}</Label>
            </StyledNavLink>
            {isOpenCategories && (
              <DropdownContentGrid>
                <StyledNavItem
                  onClick={handleNavigate}
                  to="/products/whey-protein"
                  isscrolled={false}
                >
                  <Label>{t("Whey Protein")}</Label>
                </StyledNavItem>
                <StyledNavItem
                  onClick={handleNavigate}
                  to="/products/iso-protein"
                  isscrolled={false}
                >
                  <Label>{t("Iso Protein")}</Label>
                </StyledNavItem>
                <StyledNavItem
                  onClick={handleNavigate}
                  to="/products/creatine"
                  isscrolled={false}
                >
                  <Label>{t("Creatine")}</Label>
                </StyledNavItem>
                <StyledNavItem
                  onClick={handleNavigate}
                  to="/products/pre-workout"
                  isscrolled={false}
                >
                  <Label>{t("Pre-Workout")}</Label>
                </StyledNavItem>
                <StyledNavItem
                  onClick={handleNavigate}
                  to="/products/amino-acid"
                  isscrolled={false}
                >
                  <Label>{t("Amino Acid")}</Label>
                </StyledNavItem>
                <StyledNavItem
                  onClick={handleNavigate}
                  to="/products/carbohydrates"
                  isscrolled={false}
                >
                  <Label>{t("Carbohydrates")}</Label>
                </StyledNavItem>
                <StyledNavItem
                  onClick={handleNavigate}
                  to="/products/snacks"
                  isscrolled={false}
                >
                  <Label>{t("Snacks")}</Label>
                </StyledNavItem>
                <StyledNavItem
                  onClick={handleNavigate}
                  to="/products/vegan"
                  isscrolled={false}
                >
                  <Label>{t("Vegan")}</Label>
                </StyledNavItem>
                <StyledNavItem
                  onClick={handleNavigate}
                  to="/products/mass-gainers"
                  isscrolled={false}
                >
                  <Label>{t("Mass Gainers")}</Label>
                </StyledNavItem>
                <StyledNavItem
                  onClick={handleNavigate}
                  to="/products/fat-burners"
                  isscrolled={false}
                >
                  <Label>{t("Fat Burners")}</Label>
                </StyledNavItem>
                {/* Add more category NavLink items as needed */}
              </DropdownContentGrid>
            )}{" "}
          </StyledOptions>
        </li>

        <li>
          <StyledNavLink
            onClick={() => window.scrollTo(0, 0)}
            to="/products/all"
            isscrolled={isScrolled}
          >
            <Label>{t("All Products")}</Label>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink
            onClick={() => window.scrollTo(0, 0)}
            to="/calculate-calories"
            isscrolled={isScrolled}
          >
            <Label>{t("Calculate Calories")}</Label>
          </StyledNavLink>
        </li>
        {isLargeScreen && (
          <>
            <li>
              <StyledNavLink
                onClick={() => {
                  setIsOpenMore(false);
                  window.scrollTo(0, 0);
                }}
                to="/new-in-store"
                isscrolled={isScrolled}
              >
                <Label>{t("New in Store")}</Label>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                onClick={() => {
                  setIsOpenMore(false);
                  window.scrollTo(0, 0);
                }}
                to="/best-seller"
                isscrolled={isScrolled}
              >
                <Label>{t("Best Seller")}</Label>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                onClick={() => {
                  setIsOpenMore(false);
                  window.scrollTo(0, 0);
                }}
                to="/articles"
                isscrolled={isScrolled}
              >
                <Label>{t("Articles")}</Label>
              </StyledNavLink>
            </li>

            <li>
              <StyledNavLink
                onClick={() => {
                  setIsOpenMore(false);
                  window.scrollTo(0, 0);
                }}
                to="/cart"
                isscrolled={isScrolled}
              >
                <Label>{t("Cart")}</Label>
              </StyledNavLink>
            </li>
          </>
        )}

        <li>
          <StyledOptions
            onMouseEnter={() => setIsOpenMore(true)}
            onMouseLeave={() => setIsOpenMore(false)}
            color="color"
          >
            <Label>{t("More")}</Label>

            {isOpenMore && (
              <DropdownContentFlexColumn>
                {!isLargeScreen && (
                  <>
                    <StyledNavItem
                      onClick={() => {
                        setIsOpenMore(false);
                        window.scrollTo(0, 0);
                      }}
                      to="/articles"
                      isscrolled={isScrolled}
                    >
                      <Label>{t("Articles")}</Label>
                    </StyledNavItem>
                    <StyledNavItem
                      onClick={() => {
                        setIsOpenMore(false);
                        window.scrollTo(0, 0);
                      }}
                      to="/new-in-store"
                      isscrolled={isScrolled}
                    >
                      <Label>{t("New in Store")}</Label>
                    </StyledNavItem>
                    <StyledNavItem
                      onClick={() => {
                        setIsOpenMore(false);
                        window.scrollTo(0, 0);
                      }}
                      to="/best-seller"
                      isscrolled={isScrolled}
                    >
                      <Label>{t("Best Seller")}</Label>
                    </StyledNavItem>
                    <StyledNavItem
                      onClick={() => {
                        setIsOpenMore(false);
                        window.scrollTo(0, 0);
                      }}
                      to="/cart"
                      isscrolled={isScrolled}
                    >
                      <Label>{t("Cart")}</Label>
                    </StyledNavItem>
                  </>
                )}
                {isAuthenticated && (
                  <StyledNavItem
                    onClick={() => {
                      setIsOpenMore(false);
                      window.scrollTo(0, 0);
                    }}
                    to="/orders"
                    isscrolled={isScrolled}
                  >
                    <Label>{t("Orders")}</Label>
                  </StyledNavItem>
                )}
                <StyledNavItem
                  onClick={() => {
                    setIsOpenMore(false);
                    window.scrollTo(0, 0);
                  }}
                  to="/about-us"
                  isscrolled={isScrolled}
                >
                  <Label>{t("About Us")}</Label>
                </StyledNavItem>

                <StyledNavItem
                  onClick={() => {
                    setIsOpenMore(false);
                    window.scrollTo(0, 0);
                  }}
                  to="/contact-us"
                  isscrolled={isScrolled}
                >
                  <Label>{t("Contact Us")}</Label>
                </StyledNavItem>
              </DropdownContentFlexColumn>
            )}
          </StyledOptions>
        </li>
      </StyledOptionsHomePage>
    </>
  );
}

export default Options;
const StyledOptionsHomePage = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${(props) => props.color};
`;
const StyledOptions = styled.div`
  position: relative; /* Required for absolute positioning */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.8rem;
  &:hover {
    cursor: pointer;
    color: var(--color-gold-500);
  }
`;

const DropdownContentGrid = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--color-grey-0);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  padding: 5px;
  width: 50vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  border-bottom: 3px solid var(--color-grey-300);
  max-height: 40vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const DropdownContentFlexColumn = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--color-grey-0);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  padding: 5px;
  width: 25vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 3px solid var(--color-grey-300);
  max-height: 50vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-gold-500);
  }
`;
const StyledNavItem = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    width: 24vh;

    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
  }
  /* &:active,
  &.active:link,
  &.active:visited  */
  color: var(--color-grey-800);

  width: 20vh;
`;
const Label = styled.span`
  font-size: small;
  font-weight: 500;
`;
