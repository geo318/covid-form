import { inputProps } from '.';
import { errorMessage } from '.';

export const InputText: React.FC<inputProps> = ({
  name,
  label,
  placeholder,
  validation,
  messages,
  register,
  errors,
}) => {
  console.log(errors);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        {...register(name, validation)}
        placeholder={placeholder}
      />
      {messages.map(
        (e: errorMessage) =>
          errors[name] &&
          errors[name]!.type === e.type && <span key={e.type}>{e.message}</span>
      )}
    </div>
  );
};
