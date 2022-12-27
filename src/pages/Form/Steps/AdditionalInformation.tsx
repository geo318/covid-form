import { AdditionalInfoImage } from 'assets';
import { InputRadio, Textarea } from 'Components';
import { FormLayout } from 'pages';
import { AdditionalShape } from 'Components';

const AdditionalInformation = () => {
  return (
    <FormLayout img={AdditionalInfoImage} shape={<AdditionalShape />}>
      <div className='leading-7 text-xl flex flex-col gap-6 mb-11 max-w-2xl'>
        <p>
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
          ჩვენთან გადმოსვლის.
        </p>
        <p>
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
          ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>
      </div>
      <InputRadio
        name='non_formal_meetings'
        label='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'
        validation={{
          required: {
            value: true,
            message: 'სავალდებულო ველი',
          },
        }}
        options={[
          ['კვირაში ორჯერ', 'twice_a_week'],
          ['კვირაში ერთხელ', 'once_a_week'],
          ['ორ კვირაში ერთხელ', 'once_in_a_two_weeks'],
          ['თვეში ერთხელ', 'once_in_a_month'],
        ]}
      />
      <InputRadio
        name='number_of_days_from_office'
        label='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'
        validation={{
          required: {
            value: true,
            message: 'სავალდებულო ველი',
          },
        }}
        options={[
          ['0', '0'],
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
        ]}
      />
      <Textarea
        name='what_about_meetings_in_live'
        label='რას ფიქრობ ფიზიკურ შეკრებებზე?'
      />
      <div className='h-12' />
      <Textarea
        name='tell_us_your_opinion_about_us'
        label='რას ფიქრობ არსებულ გარემოზე: 
        რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'
      />
      <div className='mt-14 max-w-lg'>
        <button
          type='submit'
          className='font-app-caps px-7 py-4 bg-[#208298] hover:bg-[#1a697a] text-white rounded-full text-lg leading-5 font-bold ml-auto float-right'
        >
          დასრულება
        </button>
      </div>
    </FormLayout>
  );
};

export default AdditionalInformation;
