import {
  NumericFormat,
  InputAttributes,
  NumericFormatProps,
} from "react-number-format";
import { ComponentProps, FC } from "react";
import { Box, FormHelperText, SxProps, Theme } from "@mui/material";

//components & utils
import { RootInputBox, RootInputBoxProps } from "./RootInputBox";
import { Override } from "@/interfaces/override.types";
import { numberToText } from "@/utils/numberToText";

//types

export type NumericInputBoxProps = Override<
  RootInputBoxProps,
  {
    onChange?: (value: number) => void;
    containerProps?: ComponentProps<typeof Box>;
    fullWidth?: boolean;
    priceToman?: boolean;
  }
>;

const helperTextStyle: ({
  disabled,
  error,
}: {
  disabled?: boolean;
  error?: boolean;
}) => SxProps<Theme> = ({ disabled, error }) => ({
  display: "block",
  color: error ? "error.main" : disabled ? "grey.100" : "black.700",
  fontSize: 12,
  marginInlineStart: 1.5,
  mt: 0.5,
});

export const NumericInputBox: FC<NumericInputBoxProps> = ({
  onChange,
  fullWidth,
  helperText,
  containerProps,
  priceToman = true,
  ...props
}) => {
  const numberText = priceToman
    ? numberToText((props.value as number) / 10)
    : numberToText(props.value as number);

  const numTomanText = numberText === "صفر" ? "" : numberText + " تومان ";
  const numText = numberText === "صفر" ? "" : numberText;

  const error = props.error;
  const disabled = props.disabled;
  const containerSx = containerProps?.sx ?? [];

  return (
    <Box
      {...containerProps}
      sx={[
        { width: fullWidth ? 1 : 280 },
        ...(Array.isArray(containerSx) ? containerSx : [containerSx]),
      ]}
    >
      <NumericFormat
        onChange={(e) => {
          const value = Number(e.target.value.replaceAll(",", ""));
          onChange?.(value);
        }}
        thousandSeparator={true}
        customInput={RootInputBox as React.ComponentType<InputAttributes>}
        {...(props as NumericFormatProps)}
      />
      <FormHelperText sx={helperTextStyle({ disabled, error })}>
        {error ? helperText : priceToman ? numTomanText : numText}
      </FormHelperText>
    </Box>
  );
};

NumericInputBox.displayName = "NumericInputBox";
