import { createContext, useContext, useEffect, useState } from "react";

const BodyDirectionContext = createContext();

function BodyDirectionProvider({ children }) {
  const [bodyDirection, setBodyDirection] = useState(document.body.dir);
  const currLan = window.localStorage.getItem("language");
  useEffect(() => {
    setBodyDirection(document.body.dir);
  }, []);

  useEffect(() => {
    document.body.dir = currLan === "ar" ? "rtl" : "ltr";
  }, [currLan]);
  const isRtl = bodyDirection === "rtl";

  return (
    <BodyDirectionContext.Provider
      value={{ isRtl, bodyDirection, setBodyDirection }}
    >
      {children}
    </BodyDirectionContext.Provider>
  );
}

function useBodyDirection() {
  const context = useContext(BodyDirectionContext);
  if (context === undefined) {
    throw new Error(
      "BodyDirectionContext was used outside of BodyDirectionContext"
    );
  }
  return context;
}
export { BodyDirectionProvider, useBodyDirection };
