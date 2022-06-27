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
