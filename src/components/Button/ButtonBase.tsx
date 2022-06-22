import { Button, ButtonProps } from '@mui/material';

export interface ButtonBaseProps extends ButtonProps {}

const ButtonBase = ({ children, type, onClick, ...rest }: ButtonBaseProps) => {
  return (
    <Button
      variant='contained'
      sx={{ mt: 3, ml: 1 }}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonBase;
