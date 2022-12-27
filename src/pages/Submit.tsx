import { useSubmitForm } from 'hooks/useSubmitForm';

const SubmitForm = () => {
  const { error, isLoading } = useSubmitForm();
  const errorBlock = <div>error</div>;
  return (
    <>
      {error ? (
        errorBlock
      ) : isLoading ? (
        <div>loading..</div>
      ) : (
        <div className='bg-[#232323] fixed inset-0 w-full h-screen flex items-center justify-center text-white text-6xl leading-snug font-bold tracking-[0.24em]'>
          მადლობა
        </div>
      )}
    </>
  );
};

export default SubmitForm;
