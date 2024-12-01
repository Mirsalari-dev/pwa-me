import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";

export type CustomModalProps = {
  sxBottomSheet?: SxProps<Theme>;
  sxModal?: SxProps<Theme>;
  onClose: (event: Event, reason: "backdropClick" | "escapeKeyDown") => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
  open: boolean;
  children?: ReactNode;
  header?: ReactNode;
  title?: ReactNode;
  bodySx?: SxProps<Theme>;
  preventBackdropClose?: boolean;
  headerSx?: SxProps;
  headerBorderColor?: string;
};
