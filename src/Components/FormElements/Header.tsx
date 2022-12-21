import { Redberry } from 'Components';

const Header = () => {
  return (
    <div className='pt-24 border-b-2 border-[#232323]'>
      <div className='flex justify-between pb-6 align-baseline'>
        <Redberry />
        <div className='text-2xl leading-5 font-bold'>{1}/4</div>
      </div>
    </div>
  );
};

export default Header;
