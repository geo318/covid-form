import { Routes, Route } from 'react-router-dom';
import { StepOne } from './step-1';
import { StepTwo } from './step-2';
import { StepThree } from './step-3';
import { StepFour } from './step-4';

export const Form = () => {
  return (
    <Routes>
      <Route path='form/step-1' element={<StepOne />} />
      <Route path='form/step-2' element={<StepTwo />} />
      <Route path='form/step-3' element={<StepThree />} />
      <Route path='form/step-4' element={<StepFour />} />
    </Routes>
  );
};
