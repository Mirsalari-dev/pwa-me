import { Box, BoxProps } from "@mui/material";

export const CustomModalFooter = ({ sx, ...props }: BoxProps) => {
  return <Box {...props} sx={{ bgcolor: "grey.600", py: "1rem", ...sx }} />;
};
