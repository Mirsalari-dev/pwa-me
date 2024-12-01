import {
  Control,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

//component
import {
  MobileNumberInputBox,
  MobileNumberInputBoxProps,
} from "./MobileNumberInputBox";

export type TextInputBoxFormProps<T extends FieldValues> = Omit<
  MobileNumberInputBoxProps,
  "ref"
> &
  Omit<UseControllerProps, "control"> & {
    control?: Control<T, any>;
    disableError?: boolean;
    hideErrorMessage?: boolean;
  };

export const MobileNumberInputBoxForm = <T extends FieldValues>({
  name,
  rules,
  onBlur,
  control,
  onChange,
  defaultValue,
  shouldUnregister,
  disableError = false,
  hideErrorMessage = false,
  ...reset
}: TextInputBoxFormProps<T>) => {
  const { field, fieldState } = useController({
    name,
    rules,
    control: control as Control<FieldValues>,
    defaultValue,
    shouldUnregister,
  });

  const _onChange: MobileNumberInputBoxProps["onChange"] = (...e) => {
    field.onChange(...e);
    onChange?.(...e);
  };

  const _onBlur: MobileNumberInputBoxProps["onBlur"] = (...e) => {
    field.onBlur();
    onBlur?.(...e);
  };
  const _onRemoveNumber = () => {
    field.onChange(""); // Clear the input value
  };

  return (
    <MobileNumberInputBox
      {...reset}
      ref={field.ref}
      name={field.name}
      value={field.value}
      onChange={_onChange}
      onBlur={_onBlur}
      error={disableError ? undefined : !!fieldState.error?.message}
      helperText={hideErrorMessage ? undefined : fieldState.error?.message}
      onRemoveNumber={_onRemoveNumber} // Pass the remove function
    />
  );
};
