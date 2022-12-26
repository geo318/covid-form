import { VaccinatedImage } from 'assets';
import { InputRadio } from 'Components';
import { useFormContext } from 'react-hook-form';
import { useInputWatch } from 'hooks/useInputWatch';
import { useUnregister } from 'hooks/useUnregister';
import { useMemo } from 'react';
import { Link } from 'Components';
import FormLayout from './FormLayout';

const AlreadyVaccinated = () => {
  const { control, unregister } = useFormContext();
  const values = useMemo(() => ['vaccination_stage', 'i_am_waiting'], []);
  const watchRadioInputs = useInputWatch({
    control,
    name: ['had_vaccine', ...values],
  });
  useUnregister(unregister, values, watchRadioInputs[0]);

  return (
    <FormLayout img={VaccinatedImage}>
      <InputRadio
        name='had_vaccine'
        label='უკვე აცრილი ხარ?*'
        validation={{
          required: {
            value: true,
            message: 'სავალდებულო ველი',
          },
        }}
        options={[
          ['კი', true],
          ['არა', false],
        ]}
      />
      {watchRadioInputs[0] === 'true' ? (
        <InputRadio
          name='vaccination_stage'
          label='აირჩიე რა ეტაპზე ხარ*'
          options={[
            [
              'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე',
              'first_dosage_and_registered_on_the_second',
            ],
            ['სრულად აცრილი ვარ', 'fully_vaccinated'],
            [
              'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე',
              'first_dosage_and_not_registered_yet',
            ],
          ]}
          validation={{
            required: {
              value: true,
              message: 'სავალდებულო ველი',
            },
          }}
        />
      ) : (
        watchRadioInputs[0] === 'false' && (
          <InputRadio
            name='i_am_waiting'
            label='რას ელოდები?*'
            options={[
              [
                'დარეგისტრირებული ვარ და ველოდები რიცხვს',
                'registered_and_waiting',
              ],
              ['არ ვგეგმავ', 'not_planning'],
              [
                'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე',
                'had_covid_and_planning_to_be_vaccinated',
              ],
            ]}
            validation={{
              required: {
                value: true,
                message: 'სავალდებულო ველი',
              },
            }}
          />
        )
      )}
      <div className='ml-7 max-w-lg flex flex-col gap-4 text-xl leading-6'>
        {watchRadioInputs[2] === 'not_planning' && (
          <Link
            href='https://booking.moh.gov.ge/'
            text='👉 https://booking.moh.gov.ge/'
          />
        )}
        {watchRadioInputs[2] === 'had_covid_and_planning_to_be_vaccinated' && (
          <>
            <p>
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
              ვაქცინის გაკეთება.
            </p>
            <p>
              <p>👉 რეგისტრაციის ბმული</p>
              <Link href='https://booking.moh.gov.ge/' />
            </p>
          </>
        )}
        {watchRadioInputs[1] === 'first_dosage_and_not_registered_yet' && (
          <>
            <p>რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი</p>
            <Link href='https://booking.moh.gov.ge/' />
          </>
        )}
      </div>
    </FormLayout>
  );
};

export default AlreadyVaccinated;
