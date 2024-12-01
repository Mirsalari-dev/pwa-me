"use client";

import logo from "@/assets/svg/logo.svg";
import logoPattern from "@/assets/svg/logoPattern.svg";
import { Box } from "@mui/material";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { useEffect } from "react";

export default function HomePage() {
  const router = useTransitionRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100vw"
      height="100dvh"
      position="relative"
      bgcolor="primary.800"
      sx={{
        overflow: "hidden",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <Image src={logo} alt="logo" />

      <Image
        src={logoPattern}
        alt="logo pattern"
        style={{
          objectFit: "cover",
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "50%",
          height: "auto",
        }}
      />

      <Box
        position="absolute"
        bottom="16px"
        textAlign="center"
        color="white"
        fontSize="14px"
        fontFamily="Arial"
      >
        Padash © 2024
      </Box>
    </Box>
  );
}
