import { useEffect } from 'react';
import { UseFormUnregister, FieldValues } from 'react-hook-form';

export const useUnregister = (
  unregister: UseFormUnregister<FieldValues>,
  values: string[],
  watchValue: string | string[]
) => {
  useEffect(() => unregister(values), [watchValue, values, unregister]);
};
