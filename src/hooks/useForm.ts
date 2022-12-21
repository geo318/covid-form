import { useForm } from 'react-hook-form';

export const useFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  return { register, handleSubmit, errors };
};
