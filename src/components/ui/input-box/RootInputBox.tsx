import { ComponentProps, forwardRef, Ref } from "react";
import { Box, Theme, SxProps, TextField } from "@mui/material";

export interface RootInputBoxProps
  extends Omit<ComponentProps<typeof TextField>, "label" | "sx" | "ref"> {
  sx?: SxProps<Theme>;
  label?: string;
  labelProps?: ComponentProps<typeof Box<"span">>;
  containerProps?: ComponentProps<typeof Box<"label">>;
  containerRef?: Ref<HTMLLabelElement>;
}

const inputStyle: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    color: "black.500",
    borderRadius: "12px",

    "& .MuiOutlinedInput-input": {
      height: 15,
    },

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "grey.200",
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {},
    },
    "&:hover:not(.Mui-focused)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "black.900",
        boxShadow: "0px 8px 16px 0px #A8A8A83D",
      },
    },

    "&.Mui-error": {
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "error.main",
      },
    },

    "&.Mui-disabled": {
      bgcolor: "grey.500",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        boxShadow: "unset",
      },
    },
  },
};

const labelStyle: ({ disabled }: { disabled?: boolean }) => SxProps<Theme> = ({
  disabled,
}) => ({
  mb: 0.5,
  display: "block",
  marginInlineStart: 0.5,
  fontSize: 12,
  color: disabled ? "grey.100" : "black.500",
});

export const RootInputBox = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  RootInputBoxProps
>(
  (
    {
      sx = [],
      disabled,
      label,
      labelProps,
      containerProps,
      containerRef,
      ...props
    },
    ref
  ) => {
    const fullWidth = props.fullWidth;
    const containerSx = containerProps?.sx ?? [];

    const multiLine = props.multiline;
    const rows = props.rows || 1;

    return (
      <Box
        component="label"
        ref={containerRef}
        {...containerProps}
        sx={[
          { width: fullWidth ? 1 : multiLine ? 597 : 280 },
          ...(Array.isArray(containerSx) ? containerSx : [containerSx]),
        ]}
      >
        <Box component="span" sx={labelStyle({ disabled })} {...labelProps}>
          {label}
        </Box>
        <TextField
          inputRef={ref}
          sx={[inputStyle, ...(Array.isArray(sx) ? sx : [sx])]}
          slotProps={{
            input: {
              sx: {
                borderRadius: 2,
                px: 1,
                ...(multiLine
                  ? {
                      height: Number(rows) * 40,
                      lineHeight: "2rem",
                    }
                  : {
                      height: 48,
                    }),
              },
            },
          }}
          {...props}
          fullWidth
        />
      </Box>
    );
  }
);

RootInputBox.displayName = "RootInputBox";
