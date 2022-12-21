import { useContext } from 'react';
import { formContext } from 'store';
import { FormPageData } from 'types';
import { useNavigate } from 'react-router';

type PageKey = 'personal' | 'covid' | 'vaccinated' | 'additional';

export const useFormNavigation = () => {
  const paths: { [key: string]: string } = {
    personal: 'form/personal',
    covid: 'form/covid',
    vaccinated: 'form/vaccinated',
    additional: 'form/additional',
  };
  const { handleSubmit, errors, register } = useContext(formContext);
  const navigate = useNavigate();
  const navigateBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const onSubmitForm = (pageKey: PageKey, data?: FormPageData) =>
    navigate(paths[pageKey]);

  const link = (pageKey: PageKey): string => paths[pageKey];

  const errorMessage = (name: string) =>
    errors?.[name] ? errors[name].message : '';
  return {
    handleSubmit,
    onSubmitForm,
    link,
    navigate,
    navigateBack,
    errors,
    register,
    errorMessage,
  };
};
