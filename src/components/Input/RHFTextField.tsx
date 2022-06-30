import { BaseTextFieldProps, TextField } from '@mui/material';
import {
  FieldName,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

interface RHFTextFieldProps extends BaseTextFieldProps {
  nameRegister: FieldName<FieldValues>;
  rules: RegisterOptions;
}

const RHFTextField = ({
  label,
  nameRegister,
  autoComplete,
  rules,
  ...rest
}: RHFTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      label={label}
      variant='standard'
      fullWidth
      required
      autoComplete={autoComplete}
      {...register(nameRegister, rules)}
      error={!!errors[nameRegister]}
      helperText={errors[nameRegister]?.message ?? ''}
      onChange={(e) => (e.target.value = e.target.value.trim())}
      {...rest}
    />
  );
};

export default RHFTextField;
