import DesktopHeader from "./DesktopHeader.tsx";
import { ReactNode } from "react";

interface DesktopLayoutProps {
  toggleTheme: () => void;
  children: ReactNode;
}

const DesktopLayout = ({ toggleTheme, children }: DesktopLayoutProps) => {
  return (
    <>
      <DesktopHeader toggleTheme={toggleTheme} />
      {children}
    </>
  );
};

export default DesktopLayout;
