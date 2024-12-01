import { forwardRef } from "react";
import { RootInputBox, RootInputBoxProps } from "./RootInputBox";
import { Override } from "@/interfaces/override.types";

export type TextInputBoxProps = Override<
  RootInputBoxProps,
  {
    type?: "text";
  }
>;

export const TextInputBox = forwardRef<HTMLInputElement, TextInputBoxProps>(
  (props, ref) => {
    return <RootInputBox ref={ref} {...props} type="text" />;
  }
);

TextInputBox.displayName = "TextInputBox";
