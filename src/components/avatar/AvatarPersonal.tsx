import { Avatar } from '@mui/material';

interface AvatarPersonalProps {
  srcImage: string;
}

const AvatarPersonal = ({ srcImage }: AvatarPersonalProps): JSX.Element => {
  return <Avatar src={srcImage} alt='' sx={{ width: 300, height: 300 }} />;
};

export default AvatarPersonal;
