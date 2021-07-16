import React, { ReactChildren, ReactChild } from 'react';
import Navbar from '../global/navbar/Navbar';

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
