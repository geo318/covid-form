import arrowPrev from '~/assets/images/arrow-prev.svg';
import arrowNext from '~/assets/images/arrow-next.svg';
import { useNavigate } from 'react-router-dom';

export const Switcher = () => {
  const navigate = useNavigate();
  return (
    <div className='pb-28 flex items-center justify-center mt-auto'>
      <button onClick={() => navigate(-1)}>
        <img src={arrowPrev} alt='previous' />
      </button>
      <div className='w-28' />
      <button type='submit'>
        <img src={arrowNext} alt='next' />
      </button>
    </div>
  );
};
