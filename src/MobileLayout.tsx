import { ReactNode } from "react";
import MobileHeader from "./MobileHeader";
import { styled } from "@mui/material";

interface MobileLayoutProps {
  toggleTheme: () => void;
  children: ReactNode;
}

const PageContainer = styled("div")({
  height: "100vh",
});

const MobileLayout = ({ toggleTheme, children }: MobileLayoutProps) => {
  return (
    <PageContainer>
      <MobileHeader toggleTheme={toggleTheme} />
      {children}
    </PageContainer>
  );
};

export default MobileLayout;
