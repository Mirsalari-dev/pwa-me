import {
  Control,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

//component
import { NumberInputBox, NumberInputBoxProps } from "./numberInputBox";

export type TextInputBoxFormProps<T extends FieldValues> = Omit<
  NumberInputBoxProps,
  "ref"
> &
  Omit<UseControllerProps, "control"> & {
    control?: Control<T, any>;
    disableError?: boolean;
    hideErrorMessage?: boolean;
  };

export const NumberInputBoxForm = <T extends FieldValues>({
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

  const _onChange: NumberInputBoxProps["onChange"] = (...e) => {
    field.onChange(...e);
    onChange?.(...e);
  };

  const _onBlur: NumberInputBoxProps["onBlur"] = (...e) => {
    field.onBlur();
    onBlur?.(...e);
  };

  return (
    <NumberInputBox
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
