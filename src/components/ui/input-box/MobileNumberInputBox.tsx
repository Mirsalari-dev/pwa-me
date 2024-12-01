import {
  useState,
  forwardRef,
  FormEventHandler,
  ChangeEventHandler,
} from "react";
import { IconButton, InputAdornment } from "@mui/material";

//components
// import { PassBoldIcon } from "@/assets/icons/PassBoldIcon";
import { RootInputBox, RootInputBoxProps } from "./RootInputBox";
import { Override } from "@/interfaces/override.types";
import { PassBoldIcon } from "@/assets/icons/passBoldIcon";

//types

export type MobileNumberInputBoxProps = Override<
  RootInputBoxProps,
  {
    type?: "number";
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onInput?: FormEventHandler<HTMLDivElement>;
    onRemoveNumber?: (removeIconCb: () => void) => void;
  }
>;

export const MobileNumberInputBox = forwardRef<
  HTMLInputElement,
  MobileNumberInputBoxProps
>(
  (
    {
      type = "number",
      onChange,
      onInput,
      onRemoveNumber,
      placeholder = "09xx xxx xxxx",
      ...props
    },
    ref
  ) => {
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

      const target = e[0].target as HTMLInputElement;
      target.value = target.value.toString().slice(0, 11);
    };

    const _onRemoveNumber: () => void = () => {
      onRemoveNumber?.(() => setShowPassBtn(false));
    };

    return (
      <RootInputBox
        dir="ltr"
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
        placeholder={placeholder}
        onChange={_onChange}
        onInput={_onInput}
        {...props}
        type={type}
      />
    );
  }
);

MobileNumberInputBox.displayName = "MobileNumberInputBox";
