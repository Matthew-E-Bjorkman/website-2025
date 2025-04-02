import { ReactNode } from "react";
import MobileHeader from "./MobileHeader";
import { styled } from "@mui/material";

interface MobileLayoutProps {
  children: ReactNode;
}

const PageContainer = styled("div")({
  height: "calc(100vh - 60px)",
});

const HeaderMargin = styled("div")({
  height: "60px",
});

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <PageContainer>
      <MobileHeader />
      <HeaderMargin />
      {children}
    </PageContainer>
  );
};

export default MobileLayout;
