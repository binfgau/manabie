export interface SignUpFormValue {
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface SignUpStepper {
  setActiveStep: (step: number) => void;
  activeStep: unknown;
  steppers: Stepper[]; //schema
}

interface Stepper {
  //schema
  label: string;
  key: string;
  render: (activeStep: unknown) => React.ReactNode;
}

export interface SignUpInformationProps
  extends Pick<SignUpStepper, 'setActiveStep'>,
    Omit<SignUpFormValue, 'avatar'> {}

const temp: SignUpInformationProps = {
  firstName: 'Ahihi',
  lastName: 'Ahehehe',
  setActiveStep: () => {},
};

const temp2: SignUpInformationProps = {
  firstName: 'Ahihi',
  lastName: 'Ahehehe',
  setActiveStep: () => {},
};

interface InterfaceGiDo {
  name: SignUpFormValue['firstName'];
}
