import {
  Control,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

//component
import { PassInputBox, PassInputBoxProps } from "./PassInputBox";

export type PassInputBoxFormProps<T extends FieldValues> = Omit<
  PassInputBoxProps,
  "ref"
> &
  Omit<UseControllerProps, "control"> & {
    control?: Control<T, any>;
    disableError?: boolean;
    hideErrorMessage?: boolean;
  };

export const PassInputBoxForm = <T extends FieldValues>({
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
}: PassInputBoxFormProps<T>) => {
  const { field, fieldState } = useController({
    name,
    rules,
    control: control as Control<FieldValues>,
    defaultValue,
    shouldUnregister,
  });

  const _onChange: PassInputBoxProps["onChange"] = (...e) => {
    field.onChange(...e);
    onChange?.(...e);
  };

  const _onBlur: PassInputBoxProps["onBlur"] = (...e) => {
    field.onBlur();
    onBlur?.(...e);
  };

  return (
    <PassInputBox
      {...reset}
      ref={field.ref}
      name={field.name}
      value={field.value}
      onChange={_onChange}
      onBlur={_onBlur}
      error={disableError ? undefined : !!fieldState.error?.message}
      helperText={hideErrorMessage ? undefined : fieldState.error?.message}
    />
  );
};
