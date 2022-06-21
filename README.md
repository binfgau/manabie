# Multi-step Demo

## Tech

ReactJS, TypeScript, MaterialUI, Jest Test, Cypress

## How to run this code

### Run `yarn` or `npm install` If this is the first time you clone this repo (`master` branch).

### `npm start` or `yarn start`

Run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Structure

```bash
.
├── __tests__
├── assets
├── components
│   ├── avatar
│   │   └── AvatarPersonal.tsx
│   ├── button
│   │   ├── MultiStepButton.tsx
│   │   └── UploadButton.tsx
│   ├── input
│   │   └── ReactHookFormTextField.tsx
│   └── stepper
│       └── SignUpStepper.tsx
├── constants
│   ├── action-types.ts
│   └── steps.ts
├── context
│   └── SignUpStateProvider.tsx
├── hooks
│   └── useDebounce.tsx
├── layout
│   ├── Layout.tsx
│   └── MainNavigation.tsx
├── pages
│   ├── home
│   │   └── HomePage.tsx
│   └── signup
│       ├── multi-step-form-state
│       │   ├── actions.ts
│       │   ├── reducer.ts
│       │   └── types.ts
│       ├── SignUp.tsx
│       └── steps
│           ├── AvatarInfo.tsx
│           ├── PersonalInfo.tsx
│           └── ReviewAllInfo.tsx
├── store
│   └── firebase.ts
├── types
│   ├── index.ts
│   └── signup.ts
├── utils
├── App.test.tsx
├── App.tsx
├── index.tsx
├── mockup.drawio
├── react-app-env.d.ts
├── reportWebVitals.ts
├── router.tsx
└── setupTests.ts
```
