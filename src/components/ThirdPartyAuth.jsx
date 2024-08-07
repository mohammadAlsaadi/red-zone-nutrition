import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabase";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

function ThirdPartyAuth() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledThirdPartyAuth>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google"]}
        queryParams={{
          access_type: "offline",
          prompt: "consent",
          hd: "domain.com",
        }}
        theme={isDarkMode ? "dark" : "light"}
        onlyThirdPartyProviders
      />
    </StyledThirdPartyAuth>
  );
}

export default ThirdPartyAuth;
const StyledThirdPartyAuth = styled.div`
  display: none;
  margin: 0rem 5rem 5.5rem;
`;
