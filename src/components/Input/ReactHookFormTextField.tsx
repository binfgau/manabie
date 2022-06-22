import { TextField, TextFieldProps } from '@mui/material';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface ReactHookFormTextFieldProps {
  name: Exclude<TextFieldProps['name'], undefined>;
  label: string;
  autoComplete: string;
  rules: RegisterOptions;
}

const ReactHookFormTextField = ({
  label,
  name,
  autoComplete,
  rules,
}: ReactHookFormTextFieldProps) => {
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
      {...register(name, rules)}
      error={!!errors[name]}
      helperText={errors[name]?.message ?? ''}
    />
  );
};

export default ReactHookFormTextField;
