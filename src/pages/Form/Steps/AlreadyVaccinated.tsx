import { VaccinatedImage } from 'assets';
import { InputRadio, Link } from 'Components';
import { FormLayout } from 'pages';
import { useControlVaccineInputs } from 'hooks';
import { VaccineShape } from 'Components';

const AlreadyVaccinated = () => {
  const { watchRadioInputs, unregisterVaccine } = useControlVaccineInputs();
  return (
    <FormLayout img={VaccinatedImage} shape={<VaccineShape />}>
      <InputRadio
        onClick={unregisterVaccine as () => {}}
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
            <div>
              <p>👉 რეგისტრაციის ბმული</p>
              <Link href='https://booking.moh.gov.ge/' />
            </div>
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
