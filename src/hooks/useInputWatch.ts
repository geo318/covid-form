import { useWatch, Control } from 'react-hook-form';

export const useInputWatch = ({
  control,
  name,
}: {
  control: Control;
  name: string | string[];
}) => {
  return useWatch({
    control,
    name: name as string,
    defaultValue: false,
  });
};
