import { RadioProps } from 'Components';
import { useFormContext } from 'react-hook-form';

const InputRadio: React.FC<RadioProps> = ({
  name,
  label,
  options,
  validation = {},
  onChange,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='max-w-lg'>
      <label
        htmlFor={name}
        className='block font-bold text-[1.375rem] leading-7 mb-6'
      >
        {label}
      </label>
      <div className='flex flex-col'>
        {options.map((option) => (
          <div
            key={`${option[0]}${option[1]}`}
            className='flex items-center mb-5'
          >
            <input
              id={option[0] as string}
              className='appearance-none cursor-pointer rounded-full h-4 w-4 ring-1 ring-offset-2 ring-offset-[#EAEAEA] ring-[#232323] checked:bg-[#232323]'
              type='radio'
              {...register!(name, validation)}
              value={option[1] as string}
            />
            <label
              className='ml-5 cursor-pointer leading-6 text-xl'
              htmlFor={option[0]}
            >
              {option[0]}
            </label>
          </div>
        ))}
      </div>

      <div className='h-5 mb-6'>
        <span className='text-[#F15524] text-base leading-5'>
          {errors?.[name] && <p>{errors[name]!.message as string}</p>}
        </span>
      </div>
    </div>
  );
};

export default InputRadio;
