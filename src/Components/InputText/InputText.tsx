import { inputProps } from '.';
import { useFormNavigation } from 'hooks';

const InputText: React.FC<inputProps> = ({
  name,
  label,
  placeholder,
  validation,
}) => {
  const { register, errorMessage } = useFormNavigation();

  return (
    <div className='max-w-lg'>
      <label htmlFor={name} className='block font-bold text-xl leading-6 pb-4'>
        {label}
      </label>
      <input
        className='w-full border border-[#232323] px-5 py-3 outline-none text-lg left-6 font-normal mb-2 bg-[#EAEAEA]'
        type='text'
        {...register!(name, validation)}
        placeholder={placeholder}
      />
      <div className='h-5 mb-6'>
        <span className='text-[#F15524] text-base leading-5'>
          {errorMessage(name)}
        </span>
      </div>
    </div>
  );
};

export default InputText;
