import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import AvatarPersonal from '../../../components/Avatar/AvatarPersonal';
import MultiStepButton from '../../../components/Button/MultiStepButton';
import UploadButton from '../../../components/Button/UploadButton';
import { Steps } from '../../../constants/steps';
import { FormValues } from '../../../types';

const Input = styled('input')({
  display: 'none',
});

const FILE_READER_DONE = 2;

interface AvatarInfoProps {
  onPrevClick: () => void;
  formData: FormValues;
  setFormData: (formData: FormValues) => void;
}

const AvatarInfo = ({
  onPrevClick,
  formData,
  setFormData,
}: AvatarInfoProps) => {
  const avatarHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FILE_READER_DONE) {
        setFormData({ ...formData, avatar: '' + reader.result });
      }
    };
    reader.readAsDataURL(event.target.files![0]);
  };

  const { control } = useFormContext();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AvatarPersonal srcImage={formData.avatar} />
        <label htmlFor='contained-button-file'>
          <Controller
            control={control}
            name='avatar'
            render={({ field }) => (
              <Input
                {...field}
                onChange={
                  avatarHandler
                  // (e) => {
                  //   console.log(field.value);
                  //   setFormData({ ...formData, avatar: field.value });
                  //   field.onChange(e);
                  // }
                }
                accept='image/*'
                id='contained-button-file'
                multiple
                type='file'
                name='picture'
              />
            )}
          />
          <UploadButton />
        </label>
      </Box>

      <MultiStepButton
        activeStep={Steps.AvatarInfo}
        onClickHandler={onPrevClick}
      />
    </>
  );
};

export default AvatarInfo;
