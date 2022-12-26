import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useInputWatch } from './useInputWatch';
import { useUnregister } from './useUnregister';

export const useControlCovidInputs = () => {
  const { control, unregister } = useFormContext();
  const watchRadioInputs = useInputWatch({
    control,
    name: ['had_covid', 'had_antibody_test'],
  });
  const hadCovidValues = useMemo(
    () => ['had_antibody_test', 'covid_sickness_date', 'test_date', 'number'],
    []
  );
  const hadAntibodyValues = useMemo(
    () => ['covid_sickness_date', 'test_date', 'number'],
    []
  );
  useUnregister(unregister, hadCovidValues, watchRadioInputs[0]);
  useUnregister(unregister, hadAntibodyValues, watchRadioInputs[1]);
};
