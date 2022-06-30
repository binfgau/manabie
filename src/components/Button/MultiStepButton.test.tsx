import { getByRole, render, screen } from '@testing-library/react';
import MultiStepButton from './MultiStepButton';

test('renders button next on the step personal information', () => {
  render(<MultiStepButton activeStep={0} />);
  const buttonNext = screen.getByRole('button', { name: 'Next' });
  expect(buttonNext).toBeInTheDocument;
});

test('renders button next and button back on the step avatar information', () => {
  render(<MultiStepButton activeStep={1} onClickHandler={jest.fn()} />);
  const buttonNext = screen.getByRole('button', { name: 'Next' });
  expect(buttonNext).toBeInTheDocument;
  const buttonBack = screen.getByRole('button', { name: 'Back' });
  expect(buttonBack).toBeInTheDocument;
});
