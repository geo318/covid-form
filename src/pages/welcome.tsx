import { Props } from '../types/index';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Welcome: React.FC<Props> = (props) => {
  return (
    <div className='w-full h-full flex justify-center items-center overflow-hidden'>
      <div className='flex flex-col justify-center items-center h-screen max-w-xs'>
        <div className='mb-24 h-24 w-24 relative'>
          <img className='logo absolute' src={logo} alt='logo' />
        </div>
        <div className='overflow-hidden'>
          <Link
            to='/form/personal'
            className='start-questionnaire text-3xl leading-9 font-bold break-words w-48 text-center inline-block'
          >
            კითხვარის დაწყება
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
