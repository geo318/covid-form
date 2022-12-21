import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form, Welcome } from 'pages';
import { FormContextProvider } from 'store';

function App() {
  return (
    <FormContextProvider>
      <BrowserRouter>
        <div className='px-48 flex flex-col min-h-screen'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='*' element={<Form />} />
            {/* <Route path='*' element={<p>Path not resolved</p>} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </FormContextProvider>
  );
}

export default App;
