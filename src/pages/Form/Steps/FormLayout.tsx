import { FormLayoutProps, FormPageData } from 'types';
import { useFormContext } from 'react-hook-form';
import { Aside, Switcher } from 'Components';
import {
  useFormNavigation,
  useSetLocalStorage,
  useStepValidation,
} from 'hooks';

const FormLayout: React.FC<FormLayoutProps> = ({ children, shape, img }) => {
  const { handleSubmit } = useFormContext();
  const { onSubmitForm } = useFormNavigation();
  useStepValidation();
  useSetLocalStorage();

  return (
    <form
      onSubmit={handleSubmit!((data) => onSubmitForm(data as FormPageData))}
      className='flex flex-col w-full'
    >
      <div className='flex'>
        <div className='basis-1/2'>{children}</div>
        <Aside img={img} shape={shape} />
      </div>
      <Switcher />
    </form>
  );
};

export default FormLayout;
