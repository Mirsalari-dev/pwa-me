"use client";
import mainTheme from "@/styles/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const MuiWrapper: FC<PropsWithChildren> = ({ children }) => {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MuiWrapper;
