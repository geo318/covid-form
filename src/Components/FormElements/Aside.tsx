import { AsideProps } from 'types';

const Aside: React.FC<AsideProps> = ({ img, children }) => {
  return (
    <div className='w-1/2 h-full'>
      <img className='max-h-[35rem]' src={img} alt='' />
      {children}
    </div>
  );
};

export default Aside;
