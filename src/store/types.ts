import {
  FormSteps,
  PersonalInformation,
  HadCovid,
  AlreadyVaccinated,
  AdditionalInformation,
  PageKey,
} from 'types';

export type valueProps =
  | PersonalInformation
  | HadCovid
  | AlreadyVaccinated
  | AdditionalInformation;

export type stepProps = { [key in PageKey]?: boolean };

export type ctx = {
  steps: FormSteps;
  currentStep: number;
  updateCurrentStep: (currentStep: number) => void;
  updateSteps: (step: stepProps) => void;
  setSteps: (steps: FormSteps) => void;
};
