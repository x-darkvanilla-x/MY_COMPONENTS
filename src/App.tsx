import { useState } from 'react';
import { CurrencyExc } from './CurrencyExc';
import { Dog } from './dog.tsx';
import { RegistrationForm } from './RegistrationForm';
import { LoginForm } from './LoginForm';
import { Button, Stack } from '@mui/material';

export const App = () => {
  const [activeComponent, setActiveComponent] = useState('CurrencyExc');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'CurrencyExc':
        return <CurrencyExc />;
      case 'RegistrationForm':
        return <RegistrationForm />;
      case 'LoginForm':
        return <LoginForm />;
      case 'Dog':
        return <Dog />;
      default:
        return <CurrencyExc />;
    }
  };

  return (
    <>
      <Stack direction={"row"} flexWrap={"wrap"} sx={{ backgroundColor: "#222", padding: "20px" }} justifyContent={"center"} gap={2}>
        <Button variant='contained' onClick={() => setActiveComponent('CurrencyExc')}>Currency Exchange</Button>
        <Button variant='contained' onClick={() => setActiveComponent('RegistrationForm')}>Registration Form</Button>
        <Button variant='contained' onClick={() => setActiveComponent('LoginForm')}>Login Form</Button>
        <Button variant='contained' onClick={() => setActiveComponent('Dog')}>Dog Pics</Button>
      </Stack>

{/*
      <Stack sx={{ backgroundColor: "#222", padding: "50px 0px" }}>
        {renderComponent()}
      </Stack>
*/}
<Dog />
<h1>Hello World </h1>
    </>
  );
};
