import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Modal from "./Modal";
import CartList from "../featurs/cart/cartList";
import { useLocation } from "react-router-dom";
import { useScrolled } from "../context/ScrolledContext";

import { useCartContext } from "../context/CartContext";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
function CartModal() {
  const { cartCountItems } = useCartContext();
  const { isScrolled } = useScrolled();
  const isHomePagePath = useLocation().pathname === "/home";
  const isContactUsPage = useLocation().pathname === "/contact-us";

  const language = window.localStorage.getItem("language");
  const [bodyDir, setBodyDir] = useState(document.body.dir);
  console.log(bodyDir);
  const { t } = useTranslation();
  useEffect(() => {
    setBodyDir(document.body.dir);
  }, []);
  return (
    <div>
      <Modal>
        <Modal.Open opens="cart">
          <StyledCartIcon>
            {isHomePagePath || isContactUsPage ? (
              <CartText isscrolled={isScrolled}>{t("Cart")}</CartText>
            ) : (
              <CartTextBlack isscrolled={isScrolled}>{t("Cart")}</CartTextBlack>
            )}

            <HiOutlineShoppingBag
              size={22}
              color={
                isScrolled || !(isHomePagePath || isContactUsPage)
                  ? ""
                  : "var(--color-grey-0)"
              }
            />

            <Counter language={language} isScrolled={isScrolled}>
              <P>{cartCountItems}</P>
            </Counter>
          </StyledCartIcon>
        </Modal.Open>

        <Modal.Window name="cart">
          <CartList />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CartModal;

const StyledCartIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.2rem;

  &:hover {
    transform: scale(1.1);
  }
`;

const Counter = styled.div`
  border-radius: 5rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: ${(props) => props.language === "ar" && "11px"};
  right: ${(props) => props.language !== "ar" && "11px"};
  margin-left: 0px;
  margin-bottom: 20px;
  background-color: var(--color-grey-800);
  width: 19px;
  height: 19px;
`;

const P = styled.p`
  color: ${(props) =>
    props.isscrolled ? "var(--color-grey-700)" : "var(--color-grey-0)"};
  font-size: 11px;
  font-weight: bold;
`;

const CartText = styled.p`
  color: ${(props) =>
    props.isscrolled || props.ishomepage ? "" : "var(--color-grey-0)"};
  padding-right: 0.6rem;
  font-size: 13px;
`;

const CartTextBlack = styled.p`
  color: var(--color-grey-700);
  padding-right: 0.6rem;
  font-size: 13px;
`;
