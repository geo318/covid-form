import { Props } from 'types';

export interface inputProps extends Props {
  name: string;
  label: string;
  placeholder: string;
  validation: {
    [key: string]: { value: number | boolean | RegExp; message: string };
  };
}
