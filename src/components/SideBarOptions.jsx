import styled from "styled-components";
import { HiOutlineChevronRight, HiOutlineXMark } from "react-icons/hi2";

import { useShowSideBar } from "../context/ShowSideBar";
// import { useUser } from "../featurs/authentication/useUser";
import Heading from "./Heading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SideBarOptions() {
  const [isOpenCategories, setIsOpenCategories] = useState(false);

  // const { isAuthenticated } = useUser();
  const { setShowSideBar } = useShowSideBar();
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleNavigate(path) {
    window.scrollTo(0, 0);
    navigate(path);
    setShowSideBar(false);
  }
  return (
    <NavList>
      <StyledListLabel onClick={() => setIsOpenCategories((isOpen) => !isOpen)}>
        <Heading as="h5">{t("Categories")}</Heading>
        {isOpenCategories ? <HiOutlineXMark /> : <HiOutlineChevronRight />}
      </StyledListLabel>
      {isOpenCategories && (
        <StyledList>
          <StyledOption
            onClick={() => handleNavigate(`/products/whey-protein`)}
          >
            <Heading as="h5" color="var(--color-red-500)">
              {t("Whey Protein")}
            </Heading>
          </StyledOption>
          <StyledOption onClick={() => handleNavigate(`/products/iso-protein`)}>
            <Heading as="h5" color="var(--color-red-500)">
              {t("Iso Protein")}
            </Heading>
          </StyledOption>
          <StyledOption onClick={() => handleNavigate(`/products/creatine`)}>
            <Heading as="h5" color="var(--color-red-500)">
              {t("Creatine")}
            </Heading>
          </StyledOption>
          <StyledOption onClick={() => handleNavigate(`/products/pre-workout`)}>
            <Heading as="h5" color="var(--color-red-500)">
              {t("Pre-Workout")}
            </Heading>
          </StyledOption>
          <StyledOption onClick={() => handleNavigate(`/products/amino-acid`)}>
            <Heading as="h5" color="var(--color-red-500)">
              {t("Amino Acid")}
            </Heading>
          </StyledOption>
          <StyledOption
            onClick={() => handleNavigate(`/products/carbohydrates`)}
          >
            <Heading as="h5" color="var(--color-red-500)">
              {t("Carbohydrates")}
            </Heading>
          </StyledOption>
          <StyledOption onClick={() => handleNavigate(`/products/snacks`)}>
            <Heading as="h5" color="var(--color-red-500)">
              {t("Snacks")}
            </Heading>
          </StyledOption>
          <StyledOption onClick={() => handleNavigate(`/products/vegan`)}>
            <Heading as="h5" color="var(--color-red-500)">
              {t("Vegan")}
            </Heading>
          </StyledOption>
          <StyledOption
            onClick={() => handleNavigate(`/products/mass-gainers`)}
          >
            <Heading as="h5" color="var(--color-red-500)">
              {t("Mass Gainers")}
            </Heading>
          </StyledOption>
          <StyledOption onClick={() => handleNavigate(`/products/fat-burners`)}>
            <Heading as="h5" color="var(--color-red-500)">
              {t("Fat Burners")}
            </Heading>
          </StyledOption>
        </StyledList>
      )}

      <StyledOption onClick={() => handleNavigate(`/spectial-offer`)}>
        <Heading as="h5">{t("Special Offers")}</Heading>
      </StyledOption>

      <StyledOption onClick={() => handleNavigate(`/best-seller`)}>
        <Heading as="h5">{t("Best Seller")}</Heading>
      </StyledOption>
      <StyledOption onClick={() => handleNavigate(`/new-in-store`)}>
        <Heading as="h5">{t("New in Store")}</Heading>
        <img
          src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/new.svg"
          alt="new"
          width={25}
          height={25}
        />
      </StyledOption>
      <StyledOption
        onClick={() => {
          handleNavigate(`/products/all`);
        }}
      >
        <Heading as="h5">{t("All Products")}</Heading>
      </StyledOption>
      <StyledOption onClick={() => handleNavigate(`/calculate-calories`)}>
        <Heading as="h5">{t("Calculate Calories")}</Heading>
      </StyledOption>
      {/* <StyledOption onClick={() => handleNavigate(`/consultation`)}>
        <Heading as="h5">Take a Consultation</Heading>
      </StyledOption> */}
      <StyledOption onClick={() => handleNavigate(`/cart`)}>
        <Heading as="h5">{t("Cart")}</Heading>
      </StyledOption>
      <StyledOption onClick={() => handleNavigate(`/orders`)}>
        <Heading as="h5">{t("Orders")}</Heading>
      </StyledOption>
      <StyledOption onClick={() => handleNavigate(`/about-us`)}>
        <Heading as="h5">{t("About Us")}</Heading>
      </StyledOption>
      <StyledOption onClick={() => handleNavigate(`/contact-us`)}>
        <Heading as="h5">{t("Contact Us")}</Heading>
      </StyledOption>
    </NavList>
  );
}

export default SideBarOptions;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  /* gap: 0.8rem; */
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
  height: 80%;
  padding-top: 0.1rem;
  padding-bottom: 6rem;

  /* Make the overflow scrollable */
  overflow-y: auto;

  /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;

const StyledOption = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-300);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  padding-right: 2rem;

  gap: 9rem;
  &:hover {
    background-color: var(--color-grey-100);
    cursor: pointer;
    /* color: var(--color-grey-0); */
  }
`;
const StyledListLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  cursor: pointer;
  margin: 1rem 0rem;
  width: 100%;

  border-bottom: 1px solid var(--color-grey-300);
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  border-bottom: 3px solid var(--color-grey-300);
  margin-bottom: 1rem;
`;
