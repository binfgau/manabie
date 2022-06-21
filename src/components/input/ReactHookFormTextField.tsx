import React from 'react';
import { TextField } from '@mui/material';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { GenericInputErrors } from '../../types';

interface ReactHookFormTextFieldProps {
  name: string;
  label: string;
  autoComplete: string;
  register: UseFormRegister<FieldValues>;
  rules: RegisterOptions;
  errors: GenericInputErrors;
}

const ReactHookFormTextField = ({
  label,
  name,
  autoComplete,
  register,
  errors,
  rules,
}: ReactHookFormTextFieldProps) => {
  return (
    <TextField
      label={label}
      variant='standard'
      fullWidth
      required
      autoComplete={autoComplete}
      {...register(name, rules)}
      error={!!errors[name]}
      helperText={errors[name]?.message ?? ''}
    />
  );
};

export default ReactHookFormTextField;
