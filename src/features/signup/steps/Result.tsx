import { Avatar, Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import { useSignup } from '../../../store/SignupContext';

interface IResultProps {
  setActiveStep: (page: number) => void;
  avatar: string;
}

const Result: React.FC<IResultProps> = ({
  setActiveStep,
  avatar,
}: IResultProps) => {
  const signupContext = useSignup();

  const handleNext = () => {
    setActiveStep(2);
  };

  const handleBack = () => {
    setActiveStep(1);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '60px 40px',
            background: 'linear-gradient( #b0d0f0, #fff)',
            borderRadius: '20px',
          }}
        >
          <Avatar src={avatar} alt='' sx={{ width: 100, height: 100 }} />
          <Typography
            component='div'
            variant='subtitle2'
            sx={{ mt: 2, mb: 2 }}
            color='#555'
          >
            {signupContext!.state.nameInfo!.firstName +
              ' ' +
              signupContext!.state.nameInfo!.lastName}
          </Typography>
        </Card>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>

        <Button variant='contained' onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Result;
