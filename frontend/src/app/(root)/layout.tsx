import React, { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-4xl lg:px-8">

        {children}
        
      </div>

    </>
  );
};

export default RootLayout;

