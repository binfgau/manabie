import { render, screen } from '../../test-utils';
import UploadButton from './UploadButton';

test('renders on the page with upload button', () => {
  render(<UploadButton />);
  const uploadButton = screen.getByRole('button', { name: 'Upload' });
  expect(uploadButton).toBeInTheDocument();
});
