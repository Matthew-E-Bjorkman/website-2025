import { ReactNode, useEffect, useState } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

interface LayoutProps {
  toggleTheme: () => void;
  children: ReactNode;
}

const AppLayout = ({ toggleTheme, children }: LayoutProps) => {
  const [isMobileSize, setIsMobileSize] = useState(false);

  function handleResize() {
    if (window.innerWidth > 768) {
      setIsMobileSize(false);
    } else {
      setIsMobileSize(true);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobileSize && (
        <MobileLayout toggleTheme={toggleTheme}>{children}</MobileLayout>
      )}
      {!isMobileSize && (
        <DesktopLayout toggleTheme={toggleTheme}>{children}</DesktopLayout>
      )}
    </>
  );
};

export default AppLayout;
