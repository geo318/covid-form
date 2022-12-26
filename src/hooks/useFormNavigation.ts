import { useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { FormPageData, PageKey } from 'types';
import { FormContext } from 'store';

const paths: { [key: string]: { index: number; url: string } } = {
  personal: { index: 1, url: '/form/personal' },
  covid: { index: 2, url: '/form/covid' },
  vaccinated: { index: 3, url: '/form/vaccinated' },
  additional: { index: 4, url: '/form/additional' },
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

  useEffect(() => {
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
    setTimeout(() => navigate(link(getNextPathUrl() as PageKey)), 1000);
  };

  return {
    steps,
    setSteps,
    currentStep,
    onSubmitForm,
    locationKey,
    updateSteps,
    link,
    navigate,
    navigateBack,
  };
};
