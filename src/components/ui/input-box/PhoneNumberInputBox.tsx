import {
  useState,
  forwardRef,
  ComponentProps,
  FormEventHandler,
  ChangeEventHandler,
  useRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  Box,
  Theme,
  Stack,
  SxProps,
  IconButton,
  FormHelperText,
  InputAdornment,
} from "@mui/material";

//components
import { RootInputBox, RootInputBoxProps } from "./RootInputBox";
import { Override } from "@/interfaces/override.types";
import { PassBoldIcon } from "@/assets/icons/passBoldIcon";

//types

export type PhoneNumberInputBoxProps = {
  name: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  containerProps?: ComponentProps<typeof Box>;
  onRemoveNumber?: (removeIconCb: () => void) => void;
  phoneInput?: Override<
    RootInputBoxProps,
    {
      type?: "number";
      onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
      onInput?: FormEventHandler<HTMLDivElement>;
    }
  >;
  codeInput?: Override<
    RootInputBoxProps,
    {
      type?: "number";
      onInput?: FormEventHandler<HTMLDivElement>;
    }
  >;
};

const styles: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-disabled": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #D2D1D1",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #D2D1D1",
      },
    },
  },
};

const labelStyle: ({ disabled }: { disabled?: boolean }) => SxProps<Theme> = ({
  disabled,
}) => ({
  display: "block",
  marginInlineStart: 0.5,
  fontSize: 12,
  color: disabled ? "grey.100" : "black.500",
});

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

export const PhoneNumberInputBox = forwardRef<
  HTMLInputElement,
  PhoneNumberInputBoxProps
>(
  (
    {
      label,
      error,
      disabled,
      fullWidth,
      helperText,
      phoneInput = {},
      codeInput = {},
      onRemoveNumber,
      containerProps,
    },
    ref
  ) => {
    const phoneInputRef = useRef<HTMLInputElement | null>(null);
    const codeInputRef = useRef<HTMLInputElement | null>(null);
    const [showPassBtn, setShowPassBtn] = useState(false);

    useImperativeHandle(ref, () => ({
      ...(phoneInputRef?.current as HTMLInputElement),
      focus: () => {
        phoneInputRef.current?.focus();
      },
    }));

    const {
      onChange = () => {},
      onInput = () => {},
      placeholder = "xxxx-xxxx",
      ...restPhoneInput
    } = phoneInput;

    const containerSx = containerProps?.sx ?? [];

    useEffect(() => {
      const phoneInput = phoneInputRef.current;

      const deleteKeyEvent = (e: KeyboardEvent) => {
        const value = (e.target as HTMLInputElement).value;
        if (e.key === "Backspace" && value.length === 0) {
          codeInputRef.current?.focus();
        }
      };

      if (phoneInput) {
        phoneInput.addEventListener("keyup", deleteKeyEvent);

        return () => phoneInput.removeEventListener("keyup", deleteKeyEvent);
      }
    }, []);

    const _onChange: ChangeEventHandler<
      HTMLInputElement | HTMLTextAreaElement
    > = (...e) => {
      onChange?.(...e);

      if (e[0].target.value) {
        setShowPassBtn(true);
      } else {
        setShowPassBtn(false);
      }
    };

    const _onInput: FormEventHandler<HTMLDivElement> = (...e) => {
      onInput?.(...e);

      const target = e[0].target as HTMLInputElement;
      target.value = target.value.toString().slice(0, 8);
    };

    const codeOnInput: FormEventHandler<HTMLDivElement> = (...e) => {
      codeInput?.onInput?.(...e);

      const target = e[0].target as HTMLInputElement;
      target.value = target.value.toString().slice(0, 3);
    };

    const _onRemoveNumber: () => void = () => {
      phoneInputRef.current!.value = "";
      onRemoveNumber?.(() => setShowPassBtn(false));
    };

    const handleCodeInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const value = e.target.value;
      if (value.length === 3 && phoneInputRef.current) {
        phoneInputRef.current.focus();
      }
    };

    return (
      <Box
        {...containerProps}
        sx={[
          { width: fullWidth ? 1 : 280 },
          ...(Array.isArray(containerSx) ? containerSx : [containerSx]),
        ]}
      >
        <Box component="span" sx={labelStyle({ disabled })}>
          {label}
        </Box>
        <Stack direction="row" spacing={1}>
          <RootInputBox
            dir="ltr"
            ref={phoneInputRef}
            sx={{ width: 224, ...styles }}
            containerProps={{
              component: "label",
              sx: {
                width: 224,
              },
            }}
            slotProps={{
              input: {
                sx: {
                  borderRadius: 2,
                  height: 48,
                  width: 224,
                },
                endAdornment: showPassBtn ? (
                  <InputAdornment position="start">
                    <IconButton disableRipple onClick={_onRemoveNumber}>
                      <PassBoldIcon />
                    </IconButton>
                  </InputAdornment>
                ) : null,
              },
            }}
            placeholder={placeholder}
            onChange={_onChange}
            onInput={_onInput}
            disabled={disabled}
            {...restPhoneInput}
            error={error}
            type="number"
            label=""
            helperText=""
          />
          <RootInputBox
            onChange={handleCodeInputChange}
            ref={codeInputRef}
            dir="ltr"
            sx={{ width: 48, ...styles }}
            containerProps={{
              component: "label",
              sx: {
                width: 48,
              },
            }}
            slotProps={{
              input: {
                sx: {
                  borderRadius: 2,
                  height: 48,
                  width: 48,
                  input: {
                    px: 1,
                  },
                },
              },
            }}
            placeholder="021"
            onInput={codeOnInput}
            disabled={disabled}
            {...codeInput}
            error={error}
            type="number"
            label=""
            helperText=""
          />
        </Stack>
        <FormHelperText sx={helperTextStyle({ disabled, error })}>
          {helperText}
        </FormHelperText>
      </Box>
    );
  }
);

PhoneNumberInputBox.displayName = "PhoneNumberInputBox";
