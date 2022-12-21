import { Props } from '~/types';

export const Aside: React.FC<Props> = ({ children }) => {
  return <div className='w-1/2 h-full'>{children}</div>;
};
