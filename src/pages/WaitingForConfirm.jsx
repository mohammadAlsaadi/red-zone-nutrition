import { useEffect, useState } from "react";
import { useUser } from "../featurs/authentication/useUser";
import styled from "styled-components";
import Heading from "../components/Heading";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

function WaitingForConfirm() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  console.log(isAuthenticated);
  useEffect(
    function () {
      if (isAuthenticated) {
        setIsConfirmed(true);
      }
      setIsConfirmed(false);
    },
    [isAuthenticated]
  );
  if (isConfirmed) {
    navigate("/home", { replace: true });
  }
  if (isConfirmed === false)
    return (
      <WaitingLayout>
        <Heading as="h2">Waiting for confirm signup email ..</Heading>
        {isConfirmed === false && <Spinner />}
        <p>
          please confirm your email by click on 'Confirm your mail' that sent to
          you already to inbox email .
        </p>
      </WaitingLayout>
    );
}

export default WaitingForConfirm;
const WaitingLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;
