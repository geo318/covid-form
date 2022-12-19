import { formInputs, stepFour, stepOne, stepThree, stepTwo } from '../types';

export type valueProps = stepOne | stepTwo | stepThree | stepFour;
export type ctx = {
  values: formInputs;
  updateValues: (values: valueProps) => void;
};
