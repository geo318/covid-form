import { InputText } from 'components/input-text';
import { useNavigate } from 'react-router-dom';
import { PersonalInformation as PersonalInformationType } from 'types';
import { useContext } from 'react';
import { formContext } from '~/store/form-context';
import { Switcher } from '~/components/form-elements/switcher';
import { Aside } from '~/components/form-elements/right-panel';
import image from '~/assets/images/form-1.png';

export const PersonalInformation = () => {
  const { handleSubmit } = useContext(formContext);

  let navigate = useNavigate();

  const onSubmit = (data: {} | PersonalInformationType) =>
    navigate('./form/covid');

  return (
    <form onSubmit={handleSubmit!(onSubmit)} className='flex flex-col w-full'>
      <div className='flex'>
        <div className='basis-1/2'>
          <InputText
            name='first_name'
            label='სახელი*'
            placeholder='იოსებ'
            validation={{
              required: {
                value: true,
                message: 'სავალდებული ველი',
              },
              minLength: {
                value: 3,
                message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
              },
            }}
          />
          <InputText
            name='last_name'
            label='გვარი*'
            placeholder='ჯუღაშვილი'
            validation={{
              required: {
                value: true,
                message: 'სავალდებული ველი',
              },
              minLength: {
                value: 3,
                message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
              },
            }}
          />
          <InputText
            name='mail'
            label='მეილი*'
            placeholder='fbi@redberry.ge'
            validation={{
              required: {
                value: true,
                message: 'სავალდებული ველი',
              },
              pattern: {
                value: /^.+@redberry.ge$/,
                message:
                  'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
              },
            }}
          />
          <div>
            <div className='border-b border-black w-60 pt-14' />
            <p className='text-[#626262] text-base leading-5 pt-5 max-w-sm'>
              *-ით მონიშნული ველების შევსება სავალდებულოა
            </p>
          </div>
        </div>
        <Aside>
          <img src={image} alt='' />
        </Aside>
      </div>
      <Switcher />
    </form>
  );
};
