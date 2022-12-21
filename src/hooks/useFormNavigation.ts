import { useContext } from 'react';
import { formContext } from '~/store/form-context';
import { FormPageData } from '~/types';
import { useNavigate } from 'react-router';

type PageKey = 'personal' | 'covid' | 'vaccinated' | 'additional';

export const useFormNavigation = () => {
  const paths: { [key: string]: string } = {
    personal: 'form/personal',
    covid: 'form/covid',
    vaccinated: 'form/vaccinated',
    additional: 'form/additional',
  };
  const { handleSubmit } = useContext(formContext);
  const navigate = useNavigate();
  const onSubmitForm = (pageKey: PageKey, data?: FormPageData) =>
    navigate(paths[pageKey]);
  const link = (pageKey: PageKey) => paths[pageKey];

  return { handleSubmit, onSubmitForm, link };
};
