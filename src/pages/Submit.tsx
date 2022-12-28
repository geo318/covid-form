import { useSubmitForm } from 'hooks/useSubmitForm';
import { Star } from 'Components';

const SubmitForm = () => {
  const { error, isLoading } = useSubmitForm();

  return (
    <div className='bg-app-black fixed inset-0 text-white '>
      <div className='w-full h-screen flex items-center justify-center'>
        {error ? (
          <div>Error | Something went wrong...</div>
        ) : isLoading ? (
          <div>Loading..</div>
        ) : (
          <>
            <div className='thanks absolute text-6xl leading-snug font-bold tracking-[0.24em] font-app-caps'>
              მადლობა
            </div>
            <div className='h-0 block relative '>
              <Star className='star-left' />
              <Star className='star-right' />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SubmitForm;
