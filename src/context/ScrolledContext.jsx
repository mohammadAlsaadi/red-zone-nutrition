import { createContext, useContext, useEffect, useState } from "react";

const ScrolledContext = createContext();

function ScrolledProvider({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;

      setIsScrolled(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ScrolledContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </ScrolledContext.Provider>
  );
}

function useScrolled() {
  const context = useContext(ScrolledContext);
  if (context === undefined) {
    throw new Error("ScrolledContext was used outside of ScrolledContext");
  }
  return context;
}
export { ScrolledProvider, useScrolled };
