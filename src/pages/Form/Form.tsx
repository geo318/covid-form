import { Routes, Route } from 'react-router-dom';
import { AdditionalInformation } from './Steps/AdditionalInformation';
import { AlreadyVaccinated } from './Steps/AlreadyVaccinated';
import { HadCovid } from './Steps/HadCovid';
import { PersonalInformation } from './Steps/PersonalInformation';
import { formContext } from '~/store/form-context';
import { Header } from '~/components/FormElements/Header';
import { useFormHook } from '~/hooks/useForm';
import { useFormNavigation } from '~/hooks/useFormNavigation';
export const Form = () => {
  const { link } = useFormNavigation();
  return (
    <>
      <Header />
      <formContext.Provider value={useFormHook()}>
        <div className='pt-11 flex-1 flex'>
          <Routes>
            <Route path={link('personal')} element={<PersonalInformation />} />
            <Route path={link('covid')} element={<HadCovid />} />
            <Route path={link('vaccinated')} element={<AlreadyVaccinated />} />
            <Route
              path={link('additional')}
              element={<AdditionalInformation />}
            />
          </Routes>
        </div>
      </formContext.Provider>
    </>
  );
};
