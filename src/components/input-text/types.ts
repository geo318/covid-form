import { Props } from 'types';
import { FieldValues, FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

export type errorMessage = { type: string; message: string };
export interface inputProps extends Props {
  name: string;
  label: string;
  placeholder: string;
  validation: { [key: string]: number | boolean | RegExp };
  messages: errorMessage[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrorsImpl;
}
