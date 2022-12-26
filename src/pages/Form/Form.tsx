import { FormContextProvider } from 'store';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormNavigation, useGetLocalStorage } from 'hooks';
import {
  AdditionalInformation,
  AlreadyVaccinated,
  HadCovid,
  PersonalInformation,
} from 'pages';
import { Header } from 'Components';

const Form = () => {
  const { link, steps } = useFormNavigation();
  const { getLocalValues } = useGetLocalStorage();

  return (
    <FormContextProvider>
      <Header />
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
            {false && (
              <Route path='*' element={<Navigate replace to='/error-page' />} />
            )}
          </Routes>
        </div>
      </FormProvider>
    </FormContextProvider>
  );
};

export default Form;
