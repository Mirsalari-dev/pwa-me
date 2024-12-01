import { styled, InputAdornment } from "@mui/material";

export const StyledInputAdornment = styled(InputAdornment)(({ theme }) => ({
  svg: {
    stroke: "currentColor",
    transition: "stroke 0.3s ease",
  },
  ".Mui-focused & svg": {
    color: theme.palette.primary.main,
  },
}));
