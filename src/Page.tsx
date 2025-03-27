import { styled } from "@mui/material";
import * as React from "react";

interface PageProps {
  children: React.ReactNode;
}

const PageBackground = styled("div")({
  height: "calc(100vh - 73px)",
});

const Page = ({ children }: PageProps) => {
  return <PageBackground>{children}</PageBackground>;
};

export default Page;
