import { localStore } from 'helpers';
import { useEffect } from 'react';
import { FormSteps } from 'types';
import { useFormNavigation } from 'hooks';

export const useStepValidation = () => {
  const { locationKey, updateSteps, steps } = useFormNavigation();
  useEffect(() => {
    updateSteps({ [locationKey as keyof FormSteps]: false });
  }, [locationKey, updateSteps]);
  localStore('form-steps', steps);
};
