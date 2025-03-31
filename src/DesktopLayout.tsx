import DesktopHeader from "./DesktopHeader";
import { ReactNode } from "react";
import { styled } from "@mui/material";
import Page from "./Page";

interface DesktopLayoutProps {
  children: ReactNode;
}

const PageContainer = styled("div")({
  height: "calc(100vh - 10px)",
});

const DesktopLayout = ({ children }: DesktopLayoutProps) => {
  return (
    <PageContainer>
      <DesktopHeader />
      <Page>{children}</Page>
    </PageContainer>
  );
};

export default DesktopLayout;
