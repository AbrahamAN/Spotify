import React from "react";
import Box from "@mui/material/Box";
import { NavLeft } from "../NavLeft";
import { Body } from "../Body";
import { NavRigth } from "../NavRigth";

function MainBody() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 70px)",
      }}
    >
      <NavLeft />
      <Body />
      <NavRigth />
    </Box>
  );
}

export { MainBody };
