import DesktopHeader from "./DesktopHeader.tsx";
import { ReactNode } from "react";
import { styled } from "@mui/material";

interface DesktopLayoutProps {
  toggleTheme: () => void;
  children: ReactNode;
}

const PageContainer = styled("div")({
  height: "calc(100vh - 10px)",
});

const DesktopLayout = ({ toggleTheme, children }: DesktopLayoutProps) => {
  return (
    <PageContainer>
      <DesktopHeader toggleTheme={toggleTheme} />
      {children}
    </PageContainer>
  );
};

export default DesktopLayout;
