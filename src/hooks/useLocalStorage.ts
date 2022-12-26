import { localStore } from 'helpers';
import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';

export const useGetLocalStorage = () => {
  const getLocalValues = () => {
    const localValues = localStore('form-values');
    return Object.keys(localValues).length ? localValues : {};
  };

  return { getLocalValues };
};

export const useSetLocalStorage = () => {
  const formValues = useWatch();
  useEffect(() => {
    localStore('form-values', formValues);
  }, [formValues]);
};
