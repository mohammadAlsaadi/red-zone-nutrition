import { createContext, useContext, useEffect, useState } from "react";

const ShowSideBarContext = createContext();

function ShowSideBarProvider({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <ShowSideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </ShowSideBarContext.Provider>
  );
}
function useShowSideBar() {
  const context = useContext(ShowSideBarContext);
  if (context === undefined) {
    throw new Error(
      "ShowSideBarContext was used outside of ShowSideBarProvider"
    );
  }
  return context;
}
export { ShowSideBarProvider, useShowSideBar };
