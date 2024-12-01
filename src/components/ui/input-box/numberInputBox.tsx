import {
  useState,
  forwardRef,
  FormEventHandler,
  ChangeEventHandler,
} from "react";
import { IconButton, InputAdornment } from "@mui/material";

//components
import { RootInputBox, RootInputBoxProps } from "./RootInputBox";
import { Override } from "@/interfaces/override.types";
import { PassBoldIcon } from "@/assets/icons/passBoldIcon";

//types

export type NumberInputBoxProps = Override<
  RootInputBoxProps,
  {
    type?: "number";
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onInput?: FormEventHandler<HTMLDivElement>;
    onRemoveNumber?: (removeIconCb: () => void) => void;
  }
>;

export const NumberInputBox = forwardRef<HTMLInputElement, NumberInputBoxProps>(
  ({ type = "number", onChange, onInput, onRemoveNumber, ...props }, ref) => {
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

    const _onInput: FormEventHandler<HTMLDivElement> = (...e) => {
      onInput?.(...e);
    };

    const _onRemoveNumber: () => void = () => {
      onRemoveNumber?.(() => setShowPassBtn(false));
    };

    return (
      <RootInputBox
        dir="rtl"
        ref={ref}
        slotProps={{
          input: {
            sx: {
              borderRadius: 2,
              height: 48,
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
        onChange={_onChange}
        onInput={_onInput}
        {...props}
        type={type}
      />
    );
  }
);

NumberInputBox.displayName = "NumberInputBox";
