import { useFormNavigation } from 'hooks';
import { AsideProps } from 'types';

const Aside: React.FC<AsideProps> = ({ img, shape, children }) => {
  const { locationKey } = useFormNavigation();
  return (
    <div className='w-1/2 h-full'>
      <div className={`z-0 ${locationKey} sticky h-0`}>{shape}</div>
      <img className='max-h-[38rem] sticky top-40' src={img} alt='' />
      {children}
    </div>
  );
};

export default Aside;
