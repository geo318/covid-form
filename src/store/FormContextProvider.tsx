import { useState, createContext, useCallback } from 'react';
import { FormSteps, Props } from 'types';
import { initialStepValues, stepProps } from 'store';
import { ctx } from 'store';

export const FormContext = createContext<ctx>({
  steps: {} as FormSteps,
  currentStep: 1,
  updateCurrentStep: () => {},
  updateSteps: () => {},
  setSteps: () => {},
});

const FormContextProvider: React.FC<Props> = (props) => {
  const [steps, setSteps] = useState<FormSteps>(initialStepValues);
  const [currentStep, setCurrentStep] = useState(1);

  const updateSteps = useCallback(
    (completeStep: stepProps) =>
      setSteps((prevState: FormSteps) => {
        return { ...prevState, ...completeStep };
      }),
    []
  );

  const updateCurrentStep = (step: number) => setCurrentStep(step);

  const context: ctx = {
    steps,
    currentStep,
    updateCurrentStep,
    updateSteps,
    setSteps,
  };

  return (
    <FormContext.Provider value={context}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
