import { localStore } from 'helpers';
import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import { useFormNavigation } from './useFormNavigation';
export const useGetLocalStorage = () => {
  const { updateSteps } = useFormNavigation();

  const getLocalValues = () => {
    const localValues = localStore('form-values');
    return Object.keys(localValues).length ? localValues : {};
  };

  useEffect(() => {
    updateSteps(localStore('form-steps'));
  }, [updateSteps]);

  return { getLocalValues };
};

export const useSetLocalStorage = () => {
  const formValues = useWatch();
  useEffect(() => {
    localStore('form-values', formValues);
  }, [formValues]);
};
