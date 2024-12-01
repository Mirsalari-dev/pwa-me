import {
  Control,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { ChangeEventHandler, FocusEventHandler } from "react";

//component
import {
  PhoneNumberInputBox,
  PhoneNumberInputBoxProps,
} from "./PhoneNumberInputBox";

type ChangeEvent = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
type FocusEvent = FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export type PhoneNumberInputBoxFormProps<T extends FieldValues> = Omit<
  PhoneNumberInputBoxProps,
  "ref"
> & {
  control?: Control<T, any>;

  phoneInputName: UseControllerProps["name"];
  phoneInputRules?: UseControllerProps["rules"];
  phoneInputDefaultValue?: UseControllerProps["defaultValue"];
  phoneInputShouldUnregister?: UseControllerProps["shouldUnregister"];

  codeInputName: UseControllerProps["name"];
  codeInputRules?: UseControllerProps["rules"];
  codeInputDefaultValue?: UseControllerProps["defaultValue"];
  codeInputShouldUnregister?: UseControllerProps["shouldUnregister"];

  phoneInputOnBlur?: FocusEvent;
  phoneInputOnChange?: ChangeEvent;

  codeInputOnBlur?: FocusEvent;
  codeInputOnChange?: ChangeEvent;

  disableError?: boolean;
  hideErrorMessage?: boolean;
};
export const PhoneNumberInputBoxForm = <T extends FieldValues>({
  control,

  phoneInputName,
  phoneInputRules,
  phoneInputDefaultValue,
  phoneInputShouldUnregister,

  codeInputName,
  codeInputRules,
  codeInputDefaultValue,
  codeInputShouldUnregister,

  phoneInputOnBlur,
  phoneInputOnChange,

  codeInputOnBlur,
  codeInputOnChange,

  disableError = false,
  hideErrorMessage = false,
  ...reset
}: PhoneNumberInputBoxFormProps<T>) => {
  const { field: phoneInputField, fieldState: phoneInputFieldState } =
    useController({
      name: phoneInputName,
      rules: phoneInputRules,
      control: control as Control<FieldValues>,
      defaultValue: phoneInputDefaultValue,
      shouldUnregister: phoneInputShouldUnregister,
    });
  const { field: codeInputField, fieldState: codeInputFieldState } =
    useController({
      name: codeInputName,
      rules: codeInputRules,
      control: control as Control<FieldValues>,
      defaultValue: codeInputDefaultValue,
      shouldUnregister: codeInputShouldUnregister,
    });

  const handlePhoneInputOnChange: ChangeEvent = (...e) => {
    phoneInputField.onChange(...e);
    phoneInputOnChange?.(...e);
  };

  const handlePhoneInputOnBlur: FocusEvent = (...e) => {
    phoneInputField.onBlur();
    phoneInputOnBlur?.(...e);
  };

  const handleCodeInputOnChange: ChangeEvent = (...e) => {
    codeInputField.onChange(...e);
    codeInputOnChange?.(...e);
  };

  const handleCodeInputOnBlur: FocusEvent = (...e) => {
    codeInputField.onBlur();
    codeInputOnBlur?.(...e);
  };

  return (
    <PhoneNumberInputBox
      {...reset}
      phoneInput={{
        inputRef: phoneInputField.ref,
        name: phoneInputField.name,
        value: phoneInputField.value,
        onChange: handlePhoneInputOnChange,
        onBlur: handlePhoneInputOnBlur,
      }}
      codeInput={{
        inputRef: codeInputField.ref,
        name: codeInputField.name,
        value: codeInputField.value,
        onChange: handleCodeInputOnChange,
        onBlur: handleCodeInputOnBlur,
      }}
      error={
        disableError
          ? undefined
          : !!phoneInputFieldState.error?.message ||
            !!codeInputFieldState.error?.message
      }
      helperText={
        hideErrorMessage ? undefined : phoneInputFieldState.error?.message
      }
    />
  );
};
