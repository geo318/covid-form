import { useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { FormPageData, PageKey } from 'types';
import { FormContext } from 'store';
import { localStore } from 'helpers';

const paths: { [key: string]: { index: number; url: string } } = {
  personal: { index: 1, url: '/form/personal' },
  covid: { index: 2, url: '/form/covid' },
  vaccinated: { index: 3, url: '/form/vaccinated' },
  additional: { index: 4, url: '/form/additional' },
  submit: { index: 5, url: '/submit' },
};

export const useFormNavigation = () => {
  const navigate = useNavigate();
  const { steps, setSteps, updateSteps, currentStep, updateCurrentStep } =
    useContext(FormContext);

  const currentPath = useLocation().pathname;

  const locationKey = useMemo(
    () => Object.keys(paths).find((key) => paths[key].url === currentPath),
    [currentPath]
  );

  const isPathValid = locationKey! in paths;

  useEffect(() => {
    if (paths?.[locationKey as string])
      updateCurrentStep(paths[locationKey as string].index);
  }, [updateCurrentStep, locationKey]);

  const navigateBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  const getNextPathUrl = () =>
    Object.keys(paths).find((key) => paths[key].index === currentStep + 1);

  const link = (pageKey: PageKey): string => paths[pageKey].url;

  const onSubmitForm = (data: FormPageData) => {
    updateSteps({ [locationKey as string]: true });
    localStore('form-steps', steps);
    navigate(link(getNextPathUrl() as PageKey));
  };

  return {
    steps,
    setSteps,
    currentStep,
    currentPath,
    onSubmitForm,
    locationKey,
    updateSteps,
    link,
    navigate,
    navigateBack,
    isPathValid,
  };
};
