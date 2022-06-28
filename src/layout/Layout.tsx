import { Container, ContainerProps } from '@mui/material';
import MainNavigation from './MainNavigation';

interface LayoutProps extends ContainerProps {}

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
