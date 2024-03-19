import { createContext, useContext, useEffect, useState } from "react";

const DeviceWidthContext = createContext();

function DeviceWidthProvider({ children }) {
  const [deviceWidth, setdeviceWidth] = useState(0);
  const [isDesktopDevice, setIsDesktopDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setdeviceWidth(window.innerWidth);
      if (deviceWidth >= 900) {
        setIsDesktopDevice(true);
      } else {
        setIsDesktopDevice(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceWidth, isDesktopDevice]);

  return (
    <DeviceWidthContext.Provider value={{ isDesktopDevice, deviceWidth }}>
      {children}
    </DeviceWidthContext.Provider>
  );
}
function useDeviceWidth() {
  const context = useContext(DeviceWidthContext);
  if (context === undefined) {
    throw new Error(
      "DeviceWidthContext was used outside of DeviceWidthProvider"
    );
  }
  return context;
}
export { DeviceWidthProvider, useDeviceWidth };
