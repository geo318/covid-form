import { HadCovidImage } from 'assets';
import { InputRadio, InputText, CovidShape } from 'Components';
import { FormLayout } from 'pages';
import { useControlCovidInputs } from 'hooks';

const HadCovid = () => {
  const {
    watchRadioInputs,
    unregisterAntibody,
    unregisterCovid,
    validateFutureDate,
  } = useControlCovidInputs();
  return (
    <FormLayout img={HadCovidImage} shape={<CovidShape />}>
      <InputRadio
        onClick={unregisterCovid as () => {}}
        name='had_covid'
        label='გაქვს გადატანილი Covid-19?*'
        validation={{
          required: {
            value: true,
            message: 'სავალდებულო ველი',
          },
        }}
        options={[
          ['კი', 'yes'],
          ['არა', 'no'],
          ['ახლა მაქვს', 'have_right_now'],
        ]}
      />
      {watchRadioInputs[0] === 'yes' ? (
        <InputRadio
          onClick={unregisterAntibody as () => {}}
          name='had_antibody_test'
          label='ანტისხეულების ტესტი გაქვს გაკეთებული?*'
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
      ) : null}
      {watchRadioInputs[1] === 'true' ? (
        <>
          <InputText
            type='date'
            name='test_date'
            label='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა'
            placeholder='რიცხვი'
            validation={{
              max: {
                value: validateFutureDate as string,
                message: 'არასწორი თარიღი',
              },
            }}
          />
          <InputText
            name='number'
            type='number'
            placeholder='ანტისხეულების რაოდენობა'
            validation={{
              min: {
                value: 0,
                message: 'არასწორი რიცხვი',
              },
            }}
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
              max: {
                value: validateFutureDate as string,
                message: 'არასწორი თარიღი',
              },
            }}
          />
        )
      )}
    </FormLayout>
  );
};

export default HadCovid;
