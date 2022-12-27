import { useFormContext } from 'react-hook-form';
import { useInputWatch } from './useInputWatch';

export const useControlVaccineInputs = () => {
  const { control, unregister } = useFormContext();
  const values = ['vaccination_stage', 'i_am_waiting'];
  const watchRadioInputs = useInputWatch({
    control,
    name: ['had_vaccine', ...values],
  });
  const unregisterVaccine = () => unregister(values);

  return { watchRadioInputs, unregisterVaccine };
};
