"use client";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { CircularProgress, styled, SxProps, Theme } from "@mui/material";
import { FC } from "react";

const MainButtonStyled = styled(LoadingButton)(() => ({
  borderRadius: "1.1rem",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },
}));

const IconSize = {
  extraSmall: 14,
  small: 16,
  medium: 20,
  large: 20,
  extraLarge: 24,
};

const MainButton: FC<LoadingButtonProps> = ({ children, ...props }) => {
  const {
    variant = "contained",
    size = "medium",
    disabled,
    loading,
    startIcon,
    endIcon,
    sx,
    fullWidth,
    ...restProps
  } = props;
  return (
    <MainButtonStyled
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      startIcon={
        loading ? (
          <CircularProgress
            sx={{ marginInlineEnd: "12px" }}
            size={IconSize[size]}
            color="inherit"
          />
        ) : (
          startIcon
        )
      }
      endIcon={endIcon}
      disabled={disabled}
      sx={[btnStyle({ variant }), ...(Array.isArray(sx) ? sx : [sx])]}
      {...restProps}
    >
      {children}
    </MainButtonStyled>
  );
};

export default MainButton;

const btnStyle: ({
  variant,
}: {
  variant: "text" | "outlined" | "contained";
}) => SxProps<Theme> = ({ variant }) => ({
  fontWeight: 700,
  fontSize: "18px",
  ":hover": { bgcolor: "#4692EC" },
  ":disabled": {
    bgcolor: `neutral.200`,
    color: "common.white",
  },
  ":active": { bgcolor: "primary.700" },

  ...(variant === "outlined" && {
    border: "1px solid",
    bgcolor: "transparent",
    ":hover": {
      bgcolor: "primary.50",
    },
    ":disabled": {
      border: "1px solid",
      borderColor: "primary.300",
      color: "primary.300",
    },
    ":active": { bgcolor: "primary.200" },
    ":focus": { bgcolor: "transparent" },
  }),
  ...(variant === "text" && {
    ":hover": {
      bgcolor: "primary.100",
    },
    ":disabled": {
      color: "primary.300",
    },
    ":active": { bgcolor: "transparent" },
  }),
});
