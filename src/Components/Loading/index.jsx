import React from 'react';

const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen flex-col gap-4'>
      <h2 className='font-medium text-2xl'>Loading...</h2>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
      <p className='text-sm text-gray-600'>
        Please wait while we load the data. If it takes too long, please refresh the page.
      </p>
    </div>
  );
};

export default Loading;
