import { ReactNode } from "react";
import MobileHeader from "./MobileHeader";
import { styled } from "@mui/material";

interface MobileLayoutProps {
  children: ReactNode;
}

const PageContainer = styled("div")({
  height: "100vh",
});

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <PageContainer>
      <MobileHeader />
      {children}
    </PageContainer>
  );
};

export default MobileLayout;
