import { useState, useEffect } from "react";

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = window.matchMedia("(max-width: 800px)");
    setIsMobile(mobileCheck.matches);

    const handleResize = () => {
      setIsMobile(mobileCheck.matches);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useDeviceDetect;
