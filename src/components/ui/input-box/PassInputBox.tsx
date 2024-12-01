import { IconButton, InputAdornment } from "@mui/material";
import { ChangeEventHandler, forwardRef, useState } from "react";

//components
import { RootInputBox, RootInputBoxProps } from "./RootInputBox";
import { Override } from "@/interfaces/override.types";
import { PassBoldIcon } from "@/assets/icons/passBoldIcon";

//types

export type PassInputBoxProps = Override<
  RootInputBoxProps,
  {
    type?: "password";
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onRemovePassword?: (removeIconCb: () => void) => void;
  }
>;

export const PassInputBox = forwardRef<HTMLInputElement, PassInputBoxProps>(
  ({ type = "password", onChange, onRemovePassword, ...props }, ref) => {
    const [showPassBtn, setShowPassBtn] = useState(false);

    const _onChange: React.ChangeEventHandler<
      HTMLInputElement | HTMLTextAreaElement
    > = (...e) => {
      onChange?.(...e);

      if (e[0].target.value) {
        setShowPassBtn(true);
      } else {
        setShowPassBtn(false);
      }
    };

    const _onRemovePassword: () => void = () => {
      onRemovePassword?.(() => setShowPassBtn(false));
    };

    return (
      <RootInputBox
        ref={ref}
        slotProps={{
          input: {
            sx: {
              borderRadius: 2,
              px: 1,
              height: 48,
            },
            endAdornment: showPassBtn ? (
              <InputAdornment position="end">
                <IconButton disableRipple onClick={_onRemovePassword}>
                  <PassBoldIcon />
                </IconButton>
              </InputAdornment>
            ) : null,
          },
        }}
        onChange={_onChange}
        {...props}
        type={type}
      />
    );
  }
);

PassInputBox.displayName = "PassInputBox";
