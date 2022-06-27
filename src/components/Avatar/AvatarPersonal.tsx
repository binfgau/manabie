import { Avatar, AvatarProps } from '@mui/material';

interface AvatarPersonalProps extends AvatarProps {}

const AvatarPersonal = ({ src }: AvatarPersonalProps) => {
  return (
    <Avatar
      src={src}
      alt='This is a personal avatar'
      sx={{ width: 300, height: 300 }}
    />
  );
};

export default AvatarPersonal;
