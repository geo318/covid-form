export interface stepOne {
  first_name: string;
  last_name: string;
  email: string;
}

export interface stepTwo {
  had_covid: HadCovid;
  had_antibody_test?: boolean;
  covid_sickness_date?: string;
  antibodies: {
    test_date?: string;
    number?: number;
  };
}

export interface stepThree {
  had_vaccine: boolean;
  vaccination_stage?: VaccinationStage;
  i_am_waiting?: Waiting;
}

export interface stepFour {
  non_formal_meetings: Meetings;
  number_of_days_from_office: DaysFromOffice;
  what_about_meetings_in_live?: string;
  tell_us_your_opinion_about_us?: string;
}

export interface formInputs extends stepOne, stepTwo, stepThree, stepFour {}

type HadCovid = 'yes' | 'no' | 'have_right_now';

type VaccinationStage =
  | 'first_dosage_and_registered_on_the_second'
  | 'fully_vaccinated'
  | 'first_dosage_and_not_registered_yet';

type Waiting =
  | 'registered_and_waiting'
  | 'not_planning'
  | 'had_covid_and_planning_to_be_vaccinated';

type Meetings =
  | 'twice_a_week'
  | 'once_a_week'
  | 'once_in_a_two_weeks'
  | 'once_in_a_month';

type DaysFromOffice = 0 | 1 | 2 | 3 | 4 | 5;
