import { Arrow } from 'Components';
import { useFormNavigation } from 'hooks';

const Switcher = () => {
  const { navigateBack } = useFormNavigation();
  return (
    <div className='pb-28 flex items-center justify-center mt-auto'>
      <button onClick={navigateBack}>
        <Arrow />
      </button>
      <div className='w-28' />
      <button type='submit'>
        <Arrow right />
      </button>
    </div>
  );
};

export default Switcher;
