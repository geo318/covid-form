import { Routes, Route } from 'react-router-dom';
import { AdditionalInformation } from './steps/AdditionalInformation';
import { AlreadyVaccinated } from './steps/AlreadyVaccinated';
import { HadCovid } from './steps/HadCovid';
import { PersonalInformation } from './steps/PersonalInformation';

export const Form = () => {
  return (
    <Routes>
      <Route path='form/personal' element={<PersonalInformation />} />
      <Route path='form/covid' element={<HadCovid />} />
      <Route path='form/vaccinated' element={<AlreadyVaccinated />} />
      <Route path='form/additional' element={<AdditionalInformation />} />
    </Routes>
  );
};
