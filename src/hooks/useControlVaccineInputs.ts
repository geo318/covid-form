import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useInputWatch } from './useInputWatch';
import { useUnregister } from './useUnregister';

export const useControlVaccineInputs = () => {
  const { control, unregister } = useFormContext();
  const values = useMemo(() => ['vaccination_stage', 'i_am_waiting'], []);
  const watchRadioInputs = useInputWatch({
    control,
    name: ['had_vaccine', ...values],
  });
  useUnregister(unregister, values, watchRadioInputs[0]);
};
