import { Arrow } from 'Components';
import { useFormNavigation } from 'hooks';
import { useFormContext } from 'react-hook-form';

const Switcher = () => {
  const {
    formState: { isValid },
  } = useFormContext();

  const { navigateBack, locationKey } = useFormNavigation();
  return (
    <div className='pb-28 flex items-center justify-center mt-auto'>
      {locationKey !== 'personal' && (
        <button onClick={navigateBack} className='p-3'>
          <Arrow />
        </button>
      )}
      <div className='w-28' />
      {locationKey !== 'additional' && (
        <button type='submit' className='p-3'>
          <Arrow right isValid={isValid} />
        </button>
      )}
    </div>
  );
};

export default Switcher;
