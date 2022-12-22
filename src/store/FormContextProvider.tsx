import { useState, createContext } from 'react';
import { FormInputs, Props } from 'types';
import { initialFormValues } from 'store';
import { ctx, valueProps } from 'store';

const FormContextProvider: React.FC<Props> = (props) => {
  const [values, setValues] = useState<FormInputs>(initialFormValues);

  const updateContext = (updatedValues: valueProps) => {
    setValues((prevState: FormInputs) => {
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

export default FormContextProvider;