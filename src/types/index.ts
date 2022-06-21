import { DeepMap, FieldError } from 'react-hook-form';

export interface FluxStandardAction {
  type: string;
  payload?: unknown;
}

export interface Step {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface FormConfig {
  steps: Step[];
  activeStep: number;
}

export interface SignUpData {
  formConfig: FormConfig;
}

export type GenericInputErrors = DeepMap<Record<string, any>, FieldError>;

export type FormValues = {
  firstName: string;
  lastName: string;
  avatar: string;
};
