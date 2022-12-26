import { localStore } from 'helpers';
import { useEffect } from 'react';
import { FormSteps } from 'types';
import { useFormNavigation } from 'hooks';

export const useStepValidation = () => {
  const { steps, setSteps, locationKey, updateSteps } = useFormNavigation();
  useEffect(() => {
    updateSteps({ [locationKey as keyof FormSteps]: false });
  }, [locationKey, updateSteps]);

  useEffect(() => {
    setSteps(localStore('form-steps'));
  }, [setSteps]);

  localStore('form-steps', steps);
};
