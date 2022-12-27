import { InputProps } from 'Components';

export type OptionValue = string | boolean | number;
export interface RadioProps extends InputProps {
  options: [string, OptionValue][];
  onClick?: () => {};
}
