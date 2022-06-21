import { Button } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';

const UploadButton = (): JSX.Element => {
  return (
    <Button
      variant='text'
      component='span'
      size='small'
      startIcon={<BackupIcon />}
      sx={{ mt: 1 }}
    >
      Upload
    </Button>
  );
};

export default UploadButton;
