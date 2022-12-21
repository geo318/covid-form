import { Routes, Route } from 'react-router-dom';
import {
  AdditionalInformation,
  AlreadyVaccinated,
  HadCovid,
  PersonalInformation,
} from 'pages';
import { formContext } from 'store';
import { Header } from 'components';
import { useFormHook, useFormNavigation } from 'hooks';

const Form = () => {
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

export default Form;
