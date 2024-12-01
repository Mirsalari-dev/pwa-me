/* eslint-disable react/display-name */
"use client";
import { Box, Fade, Modal, Slide, useMediaQuery, Theme } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import { CustomModalProps } from "./customModal.types";
import { CustomModalHeader } from "./components/customModalHeader/customModalHeader";
type Ref = ForwardedRef<HTMLDivElement>;
export const CustomModal = forwardRef<Ref, CustomModalProps>((props, ref) => {
  const {
    sxModal,
    sxBottomSheet,
    onClose,
    onClick,
    open,
    children,
    title,
    header,
    bodySx,
    preventBackdropClose = false,
    headerSx,
    headerBorderColor,
  } = props;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Modal
      open={open}
      onClose={preventBackdropClose ? undefined : onClose}
      onDoubleClick={(e) => e.stopPropagation()}
      onClick={onClick}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(1px)",
            bgcolor: "#64646440",
          },
        },
      }}
    >
      {/* Render different transitions based on device type */}
      {isMobile ? (
        // Bottom Sheet for Mobile
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <Box
            ref={ref}
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "background.paper",
              borderRadius: "25px 25px 0 0",
              overflow: "hidden",
              maxHeight: "95vh",
              minHeight: "30vh",
              display: "flex",
              flexDirection: "column",
              px: 2,
              py: 1,
              ...sxBottomSheet,
            }}
          >
            <Box
              bgcolor="neutral.100"
              width="56px"
              height="6px"
              borderRadius="110px"
              display="flex"
              mt="14px"
              mb="20px"
              mx="auto"
              justifyContent="center"
            ></Box>
            {title && !header ? (
              <CustomModalHeader
                borderColor={headerBorderColor}
                headerSx={headerSx}
                onClose={onClose}
              >
                {title}
              </CustomModalHeader>
            ) : null}
            {header}
            <Box
              sx={{
                overflow: "auto",
                maxHeight: "85vh",
                justifyContent: "start",
                alignItems: "start",
                minHeight: "5vh",
                ...bodySx,
              }}
            >
              {children}
            </Box>
          </Box>
        </Slide>
      ) : (
        // Regular Modal for Desktop
        <Fade in={open}>
          <Box
            ref={ref}
            sx={{
              p: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "97%",
              maxWidth: "1200px",
              bgcolor: "background.paper",
              borderRadius: "10px",
              overflow: "hidden",
              maxHeight: "95vh",
              minHeight: "5vh",
              ...sxModal,
            }}
          >
            {title && !header ? (
              <CustomModalHeader
                borderColor={headerBorderColor}
                headerSx={headerSx}
                onClose={onClose}
              >
                {title}
              </CustomModalHeader>
            ) : null}
            {header}
            <Box
              sx={{
                overflow: "auto",
                maxHeight: "80vh",
                minHeight: "5vh",
                ...bodySx,
              }}
            >
              {children}
            </Box>
          </Box>
        </Fade>
      )}
    </Modal>
  );
});
