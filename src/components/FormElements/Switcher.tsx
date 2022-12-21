import { Arrow } from 'components';
import { useFormNavigation } from 'hooks';

export const Switcher = () => {
  const { navigate } = useFormNavigation();
  return (
    <div className='pb-28 flex items-center justify-center mt-auto'>
      <button onClick={() => navigate(-1)}>
        <Arrow />
      </button>
      <div className='w-28' />
      <button type='submit'>
        <Arrow right />
      </button>
    </div>
  );
};
