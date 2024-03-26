import { useTranslation } from "react-i18next";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import styled from "styled-components";

function LanguageModal({ onCloseModal }) {
  //   const storedLanguage = window.localStorage.getItem("language");
  //   const initialLanguage = storedLanguage ? JSON.parse(storedLanguage) : "";
  const { t, i18n } = useTranslation();
  //   const [chosenLanguage, setChosenLanguage] = useState(initialLanguage);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectedEn, setIsSelectedEn] = useState(false);
  const [isSelectedAr, setIsSelectedAr] = useState(false);
  const currLan = window.localStorage.getItem("language");

  // useEffect(() => {
  //   // Set the direction of the body based on the current language
  //   document.body.dir = currLan === "ar" ? "rtl" : "ltr";
  //   // console.log("document.body.dir", document.body.dir);
  // }, [currLan]);
  const changeLanguage = (language) => {
    console.log(language);
    if (language === currLan) {
      toast.error(
        currLan === "en"
          ? "The language is already English!"
          : "اللغة بالفعل عربية!"
      );
    } else {
      i18n.changeLanguage(language);
      toast.success(
        language === "en"
          ? "The language has been changed to English."
          : "تم تغيير اللغة إلى العربية."
      );
      window.localStorage.setItem("language", language);
    }
  };
  const handleSelectEn = () => {
    changeLanguage("en");
    setIsSelectedAr(false);
    setIsSelectedEn(true);
    window.location.reload();
  };
  const handleSelectAr = () => {
    changeLanguage("ar");
    setIsSelectedEn(false);
    setIsSelectedAr(true);
    window.location.reload();
  };
  return (
    <StyledLanguageModal>
      {/* <h5>{t("Welcome")}</h5> */}
      <Heading as="h3">{t("Choose Language")}</Heading>
      <StyledOption selected={isSelectedEn} onClick={handleSelectEn}>
        English{" "}
        <img
          width={30}
          height={20}
          src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/en.png"
          alt="english"
        />
      </StyledOption>
      <StyledOption selected={isSelectedAr} onClick={handleSelectAr}>
        العربية{" "}
        <img
          width={30}
          height={20}
          src="https://spzjbqxdghtmflngjxqg.supabase.co/storage/v1/object/public/services-images/ar.png"
          alt="english"
        />
      </StyledOption>
      <StyledConfirmOptions>
        {/* <Button
          onClick={() => {
            onCloseModal();
          }}
        >
          {t("Done")}
        </Button> */}
      </StyledConfirmOptions>
    </StyledLanguageModal>
  );
}

export default LanguageModal;
const StyledLanguageModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const StyledOption = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  border: ${(props) =>
    props.selected
      ? "2px solid var(--color-gold-500)"
      : "1px solid var(--color-grey-300)"};
  &:hover {
    background-color: var(--color-grey-100);
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;
const StyledConfirmOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;
