import {
  FormInputs,
  PersonalInformation,
  HadCovid,
  AlreadyVaccinated,
  AdditionalInformation,
} from '../types';

export type valueProps =
  | PersonalInformation
  | HadCovid
  | AlreadyVaccinated
  | AdditionalInformation;
export type ctx = {
  values: FormInputs;
  updateValues: (values: valueProps) => void;
};
