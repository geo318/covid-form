import { useFormContext } from 'react-hook-form';
import { useInputWatch } from './useInputWatch';

export const useControlCovidInputs = () => {
  const { control, unregister } = useFormContext();
  const watchRadioInputs = useInputWatch({
    control,
    name: ['had_covid', 'had_antibody_test'],
  });

  const unregisterCovid = () =>
    unregister([
      'had_antibody_test',
      'covid_sickness_date',
      'test_date',
      'number',
    ]);

  const unregisterAntibody = () =>
    unregister(['covid_sickness_date', 'test_date', 'number']);

  const validateFutureDate = new Date().toISOString().split('T').shift();

  return {
    watchRadioInputs,
    unregisterCovid,
    unregisterAntibody,
    validateFutureDate,
  };
};
