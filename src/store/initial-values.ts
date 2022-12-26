import { FormInputs, FormSteps } from 'types';

export const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  had_covid: 'no',
  had_antibody_test: undefined,
  covid_sickness_date: undefined,
  test_date: undefined,
  number: undefined,
  had_vaccine: false,
  vaccination_stage: undefined,
  i_am_waiting: undefined,
  non_formal_meetings: 'once_a_week',
  number_of_days_from_office: 0,
  what_about_meetings_in_live: undefined,
  tell_us_your_opinion_about_us: undefined,
} satisfies FormInputs;

export const initialStepValues = {
  personal: false,
  covid: false,
  vaccinated: false,
  additional: false,
} satisfies FormSteps;
