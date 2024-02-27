import React, { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="">

        {children}
        
      </div>

    </>
  );
};

export default RootLayout;

