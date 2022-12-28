import { InputText, PersonalShape } from 'Components';
import { PersonalInformationImage } from 'assets';
import { FormLayout } from 'pages';

const PersonalInformation = () => {
  return (
    <FormLayout img={PersonalInformationImage} shape={<PersonalShape />}>
      <InputText
        name='first_name'
        label='სახელი*'
        placeholder='იოსებ'
        validation={{
          required: {
            value: true,
            message: 'სავალდებულო ველი',
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
            message: 'სავალდებულო ველი',
          },
          minLength: {
            value: 3,
            message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
        }}
      />
      <InputText
        name='email'
        label='მეილი*'
        placeholder='fbi@redberry.ge'
        validation={{
          required: {
            value: true,
            message: 'სავალდებულო ველი',
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
    </FormLayout>
  );
};

export default PersonalInformation;
