import { ReactNode } from "react";
import MobileHeader from "./MobileHeader";

interface MobileLayoutProps {
  toggleTheme: () => void;
  children: ReactNode;
}

const MobileLayout = ({ toggleTheme, children }: MobileLayoutProps) => {
  return (
    <>
      <MobileHeader toggleTheme={toggleTheme} />
      {children}
    </>
  );
};

export default MobileLayout;
