import { Routes, Route } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AdditionalInformation } from './steps/AdditionalInformation';
import { AlreadyVaccinated } from './steps/AlreadyVaccinated';
import { HadCovid } from './steps/HadCovid';
import { PersonalInformation } from './steps/PersonalInformation';
import { formContext } from '~/store/form-context';
import { UseFormHookValues } from '~/types';
import { Header } from '~/components/form-elements/header';

export const Form = () => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  console.log(getValues());

  const useFormValues = {
    register,
    handleSubmit,
    errors,
  } satisfies UseFormHookValues;

  const paths = [
    'form/personal',
    'form/covid',
    'form/vaccinated',
    'form/additional',
  ];
  return (
    <>
      <Header />
      <formContext.Provider value={useFormValues}>
        <div className='pt-11 flex-1 flex'>
          <Routes>
            <Route path={paths[0]} element={<PersonalInformation />} />
            <Route path={paths[1]} element={<HadCovid />} />
            <Route path={paths[2]} element={<AlreadyVaccinated />} />
            <Route path={paths[3]} element={<AdditionalInformation />} />
          </Routes>
        </div>
      </formContext.Provider>
    </>
  );
};
