import React, { useState } from 'react';
import Box from './styled-components/Box';
import Field from './styled-components/Field'

const App = () => {
  const [emailVal, setEmailVal ] = useState('');
  const [passwordVal, setPasswordVal ] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmailVal(e.target.value);
      return
    }

    setPasswordVal(e.target.value);
  }


  const inputStyle = {
    appearance: 'none',
    display: 'block',
    verticalAlign: 'middle',
    color: 'white',
    width: '75%',
    maxWidth: '38rem',
    lineHeight: 'inherit',
    letterSpacing: 'inherit',
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    borderRadius: '5px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgb(221, 225, 228)',
    transition: 'box-shadow 0.125s ease-out 0s',
    margin: '0px'
  }

  return (
    <Box
      fontSize="18px"
      color="black"
      backgroundColor="black"
      height="50vh"
      width="50vh"
      as="form"
    >
      <Field
        data={{ name: 'email', type: 'text', placeholder: 'enter email', label: 'email'}}
        fieldStyle={{ width: '75%', maxHeight: '5rem', justifyContent: 'space-between', flexDirection: 'column'}}
        inputStyle={{...inputStyle}}
        errors={[]}
        value={emailVal}
        onChange={handleChange}
      />
      <Field
        data={{ name: 'password', type: 'password', placeholder: 'enter password', label: 'email'}}
        fieldStyle={{ width: '75%', maxHeight: '5rem', justifyContent: 'space-between', flexDirection: 'column'}}
        inputStyle={{...inputStyle}}
        errors={[]}
        value={passwordVal}
        onChange={handleChange}
      />
    </Box>
  )
}

export default App;