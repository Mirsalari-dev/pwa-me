import { SxProps } from "@mui/material";
import { ReactNode } from "react";

export type CustomModalHeaderProps = {
  children?: ReactNode;
  borderColor?: string;
  onClose: (event: Event, reason: "backdropClick" | "escapeKeyDown") => void;
  headerSx?: SxProps;
};
