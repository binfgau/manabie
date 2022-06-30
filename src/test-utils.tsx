import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormValues } from './types/FormValues';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const methods = useForm<FormValues>({ mode: 'all' });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
