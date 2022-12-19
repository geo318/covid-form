import { useState, createContext } from 'react';
import { formInputs, Props } from '../types';
import { initialFormValues } from './context';
import { ctx, valueProps } from './types';

export const FormContextProvider: React.FC<Props> = (props) => {
  const [values, setValues] = useState<formInputs>(initialFormValues);

  const updateContext = (updatedValues: valueProps) => {
    setValues((prevState) => {
      return { ...prevState, ...updatedValues };
    });
  };
  const FormContext = createContext<ctx>({
    values: initialFormValues,
    updateValues: () => {},
  });

  const context: ctx = {
    values: values,
    updateValues: updateContext,
  };

  return (
    <FormContext.Provider value={context}>
      {props.children}
    </FormContext.Provider>
  );
};
