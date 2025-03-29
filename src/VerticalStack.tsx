import Stack from "@mui/material/Stack";
import React from "react";

export interface VerticalStackProps {
  children: React.ReactNode[];
}

const VerticalStack = ({ children }: VerticalStackProps) => {
  return (
    <Stack
      direction="column"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {children}
    </Stack>
  );
};

export default VerticalStack;
