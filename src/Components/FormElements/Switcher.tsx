import { Arrow } from 'Components';
import { useFormNavigation } from 'hooks';

const Switcher = () => {
  const { navigateBack } = useFormNavigation();
  return (
    <div className='pb-28 flex items-center justify-center mt-auto'>
      <button onClick={navigateBack} className='p-3'>
        <Arrow />
      </button>
      <div className='w-28' />
      <button type='submit' className='p-3'>
        <Arrow right />
      </button>
    </div>
  );
};

export default Switcher;
