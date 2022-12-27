import { Routes, Route } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormNavigation, useGetLocalStorage } from 'hooks';
import {
  AdditionalInformation,
  AlreadyVaccinated,
  Error,
  HadCovid,
  PersonalInformation,
  Submit,
} from 'pages';
import { Header } from 'Components';
import { localStore } from 'helpers';
import { useEffect } from 'react';

const Form = () => {
  const { link, steps, updateSteps, locationKey } = useFormNavigation();
  const { getLocalValues } = useGetLocalStorage();

  useEffect(() => {
    updateSteps(localStore('form-steps'));
  }, [updateSteps]);

  return (
    <>
      {locationKey !== 'submit' && <Header />}
      <FormProvider
        {...useForm({ mode: 'onBlur', defaultValues: getLocalValues() })}
      >
        <div className='pt-11 flex-1 flex'>
          <Routes>
            <Route path={link('personal')} element={<PersonalInformation />} />
            {steps.personal && (
              <Route path={link('covid')} element={<HadCovid />} />
            )}
            {steps.covid && (
              <Route
                path={link('vaccinated')}
                element={<AlreadyVaccinated />}
              />
            )}
            {steps.vaccinated && (
              <Route
                path={link('additional')}
                element={<AdditionalInformation />}
              />
            )}
            {steps.additional && (
              <Route path={link('submit')} element={<Submit />} />
            )}
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </FormProvider>
    </>
  );
};

export default Form;
