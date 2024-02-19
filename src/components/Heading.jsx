import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `
      font-size: 30px;
      font-weight: 600;
      padding-top: 5px;
      padding-bottom: 5px;
      
    `}
  ${(props) =>
    props.as === "h2" &&
    `
      font-size: 25px;
      font-weight: 600;
      padding-top: 5px;
      padding-bottom: 5px;
    `}
      ${(props) =>
    props.as === "h3" &&
    `
      font-size: 20px;
      font-weight: 600;
      padding-top: 5px;
      padding-bottom: 5px;
    `}

${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
  line-height : 1.4;
  color: var(--color-grey-900);
`;

export default Heading;
