import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form } from './pages/form/form';
import Welcome from './pages/welcome';
import { FormContextProvider } from './store/FormContext';

function App() {
  return (
    <FormContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='*' element={<Form />} />
          {/* <Route path='*' element={<p>Path not resolved</p>} /> */}
        </Routes>
      </BrowserRouter>
    </FormContextProvider>
  );
}

export default App;
