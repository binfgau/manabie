import { Avatar } from '@mui/material';

const AvatarPersonal = ({ srcImage }: { srcImage: string }): JSX.Element => {
  return <Avatar src={srcImage} alt='' sx={{ width: 300, height: 300 }} />;
};

export default AvatarPersonal;
