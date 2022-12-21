import { useForm } from 'react-hook-form';

export const useFormHook = () => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  return { register, handleSubmit, errors };
};
