import { useFormNavigation } from 'hooks';

const Error = () => {
  const { navigateBack } = useFormNavigation();
  return (
    <div className='my-auto h-full w-full flex flex-col justify-center items-center gap-4 text-lg font-medium'>
      <div className='flex gap-4'>
        <span>404</span>
        <span>|</span>
        <span>Not Found</span>
      </div>

      <div>
        <div
          onClick={navigateBack as () => {}}
          className='text-blue-500 cursor-pointer'
        >
          go back
        </div>
      </div>
    </div>
  );
};

export default Error;
