import { Container } from '@mui/material';
import React from 'react';
import MainNavigation from './MainNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainNavigation />
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
