import { useMemo } from 'react';
import { HadCovidImage } from 'assets';
import { useFormContext } from 'react-hook-form';
import { useInputWatch, useUnregister, useFormNavigation } from 'hooks';
import { InputRadio, InputText } from 'Components';
import FormLayout from './FormLayout';

const HadCovid = () => {
  const { control, unregister } = useFormContext();
  const { steps } = useFormNavigation();
  const watchRadioInputs = useInputWatch({
    control,
    name: ['had_covid', 'had_antibody_test'],
  });
  const hadCovidValues = useMemo(
    () => ['had_antibody_test', 'covid_sickness_date', 'test_date', 'number'],
    []
  );
  const hadAntibodyValues = useMemo(
    () => ['covid_sickness_date', 'test_date', 'number'],
    []
  );
  useUnregister(unregister, hadCovidValues, watchRadioInputs[0]);
  useUnregister(unregister, hadAntibodyValues, watchRadioInputs[1]);

  return (
    <>
      {steps.personal ? (
        <FormLayout img={HadCovidImage}>
          <InputRadio
            name='had_covid'
            label='გაქვს გადატანილი Covid-19?*'
            validation={{
              required: {
                value: true,
                message: 'სავალდებულო ველი',
              },
            }}
            options={[
              ['კი', true],
              ['არა', false],
              ['ახლა მაქვს', 'have_right_now'],
            ]}
          />
          {watchRadioInputs[0] === 'true' ? (
            <InputRadio
              name='had_antibody_test'
              label='ანტისხეულების ტესტი გაქვს გაკეთებული?*'
              options={[
                ['კი', true],
                ['არა', false],
              ]}
              validation={{
                required: {
                  value: true,
                  message: 'სავალდებულო ველი',
                },
              }}
            />
          ) : null}
          {watchRadioInputs[1] === 'true' ? (
            <>
              <InputText
                name='test_date'
                label='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა'
                type='text'
                placeholder='რიცხვი'
              />
              <InputText
                name='number'
                type='text'
                placeholder='ანტისხეულების რაოდენობა'
              />
            </>
          ) : (
            watchRadioInputs[1] === 'false' && (
              <InputText
                name='covid_sickness_date'
                label='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
                type='date'
                placeholder='ჯუღაშვილი'
                validation={{
                  required: {
                    value: true,
                    message: 'სავალდებულო ველი',
                  },
                }}
              />
            )
          )}
        </FormLayout>
      ) : (
        'loading'
      )}
    </>
  );
};

export default HadCovid;
