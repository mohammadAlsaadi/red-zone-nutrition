import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div`
  margin: 4.8rem auto;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background: conic-gradient(
      from -45deg,
      var(--color-gold-600) 0%,
      var(--color-gold-600) 25%,
      #0000 25%,
      #0000 50%,
      var(--color-gold-500) 50%,
      var(--color-gold-500) 75%,
      #0000 75%,
      #0000
    ),
    radial-gradient(circle at 50% 100%, var(--color-gold-500), transparent);
  animation: ${rotate} 1.5s infinite linear;
`;

export default Spinner;
