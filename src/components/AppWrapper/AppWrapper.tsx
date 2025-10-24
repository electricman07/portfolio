"use client";

import { THEME } from "@/utils/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={THEME.light}>{children}</ThemeProvider>;
};

export default AppWrapper;
