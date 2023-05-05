import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col pt-20 items-center bg-gray-50 h-screen'>{children}</div>
  );
};

export default Layout;
