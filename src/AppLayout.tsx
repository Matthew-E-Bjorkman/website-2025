import { ReactNode, useEffect, useState } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import isMobileView from "./isMobileView.ts";

interface LayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
  const [isMobileSize, setIsMobileSize] = useState(false);

  function handleResize() {
    setIsMobileSize(isMobileView());
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
      {isMobileSize && <MobileLayout>{children}</MobileLayout>}
      {!isMobileSize && <DesktopLayout>{children}</DesktopLayout>}
    </>
  );
};

export default AppLayout;
