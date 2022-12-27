import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const obj: {
  [key: string]: string | number | boolean;
} = {};

export const useSubmitForm = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getValues } = useFormContext();
  const values = getValues();
  const controller = useMemo(() => new AbortController(), []);

  Object.keys(values).forEach((key) => {
    if (values[key] === 'true' || values[key] === 'false') {
      obj[key] = !!values[key];
      return;
    }

    obj[key] = values[key];
  });

  const postValues = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: 'post',
        url: 'https://covid19.devtest.ge/api/create',
        data: obj,
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
      });

      if (response.statusText !== 'Created')
        throw new Error('Something went wrong..');

      setIsLoading(false);
    } catch {
      setError(true);
    }
  }, [controller.signal]);

  useEffect(() => {
    postValues();
    return () => controller.abort();
  }, [postValues, controller]);

  return { error, isLoading };
};
