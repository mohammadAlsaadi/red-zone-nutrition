import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: bold;
      padding-top: 5px;
      padding-bottom: 5px;
      @media (max-width: 600px) {
        font-size: 28px;
        padding-bottom: 3px;
      }
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 25px;
      font-weight: 600;
      padding-top: 5px;
      padding-bottom: 5px;
      @media (max-width: 600px) {
        font-size: 20px;
        padding-bottom: 3px;
      }
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 20px;
      font-weight: 600;
      padding-top: 5px;
      padding-bottom: 5px;
      @media (max-width: 600px) {
        font-size: 18px;
        padding-bottom: 3px;
      }
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 13px;
      font-weight: 600;
      padding-top: 5px;
      padding-bottom: 8px;
    `}
       ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 11px;
      font-weight: 600;
      padding-top: 5px;
      padding-bottom: 8px;
      @media (max-width: 600px) {
        font-size: 10px;
        padding-bottom: 5px;
      }
    `}
    ${(props) =>
    props.as === "h7" &&
    css`
      font-size: 9px;
      font-weight: 800;
      padding-top: 5px;
      padding-bottom: 8px;
    `}
  /* line-height: 5; */
  color: ${(props) => props.color || "var(--color-grey-900)"};
`;

export default Heading;
