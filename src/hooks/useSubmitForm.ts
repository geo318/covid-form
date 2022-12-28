import { localStore } from 'helpers';
import axiosInstance from 'helpers/axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useFormNavigation } from './useFormNavigation';
const valuesToSubmit: {
  [key: string]: string | number | boolean;
} = {};

export const useSubmitForm = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getValues } = useFormContext();
  const values = getValues();
  const controller = useMemo(() => new AbortController(), []);
  const { navigate } = useFormNavigation();

  Object.keys(values).forEach((key) => {
    if (values[key] === 'true') {
      valuesToSubmit[key] = true;
      return;
    }
    if (values[key] === 'false') {
      valuesToSubmit[key] = false;
      return;
    }
    valuesToSubmit[key] = values[key];
  });

  const postValues = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance({
        method: 'post',
        url: '/create',
        data: valuesToSubmit,
        signal: controller.signal,
      });

      if (response.statusText !== 'Created')
        throw new Error('Something went wrong..');

      setIsLoading(false);
      localStore('form-values', null);
      localStore('form-steps', null);

      setTimeout(() => {
        navigate('/');
      }, 10000);
    } catch {
      setError(true);
    }
  }, [controller.signal, navigate]);

  useEffect(() => {
    postValues();
    return () => controller.abort();
  }, [postValues, controller]);

  return { error, isLoading };
};
