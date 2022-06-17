import React, { useState } from 'react';
import { Avatar, Box, Button, Card, Paper, Typography } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';
import { styled } from '@mui/material/styles';

interface IStep2Props {
  setActiveStep: (page: number) => void;
  avatar: string;
  setAvatar: (avatar: string) => void;
}

const Input = styled('input')({
  display: 'none',
});

const Step2: React.FC<IStep2Props> = ({
  setActiveStep,
  setAvatar,
  avatar,
}: IStep2Props) => {
  const handleNext = () => {
    setActiveStep(2);
  };

  const handleBack = () => {
    setActiveStep(0);
  };

  const avatarHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(reader);
        setAvatar(reader.result!.toString());
      }
    };
    reader.readAsDataURL(event.target.files![0]);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar src={avatar} alt='' sx={{ width: 300, height: 300 }} />

        <label htmlFor='contained-button-file'>
          <Input
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
            onChange={avatarHandler}
          />
          <Button
            variant='text'
            component='span'
            size='small'
            startIcon={<BackupIcon />}
            sx={{ mt: 1 }}
          >
            Upload
          </Button>
        </label>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>

        <Button variant='contained' onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default Step2;
