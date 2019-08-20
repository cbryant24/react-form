import React, { useState } from 'react';
import Box from './styled-components/Box';
import Field from './styled-components/Field'

const App = () => {
  const [inputVal, setInputVal ] = useState('');

  const handleChange = (e) => {

    setInputVal(e.target.value);
  }


  const inputStyle = {
    appearance: 'none',
    display: 'block',
    verticalAlign: 'middle',
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
  
  const inputs = [
    {
      data: { type: 'email', name: 'email', label: 'email', placeholder: 'enter email', required: true },
      fieldStyle: { width: '75%', maxHeight: '5rem', justifyContent: 'space-between', flexDirection: 'column'},
      inputStyle: { ...inputStyle }
    },
    {
      data: { type: 'password', name: 'password', label: 'password', placeholder: 'enter password', required: true },
      fieldStyle: { width: '75%', maxHeight: '5rem', justifyContent: 'space-between', flexDirection: 'column'},
      inputStyle: { ...inputStyle }
    }
  ]

  const buttons = [
    { text: 'Submit', type: 'submit', cb: null, style: 'squareButton' },
    { text: 'Cancel', type: 'cancel', cb: null, style: 'squareButton' }
  ]

  // const form = {
  //   data: { name: 'signinForm', submit: 'signup', cb: signin },
  //   style: { height: 1, justifyContent: 'space-around', flexDirection: 'column', px: 2, fontSizeModule: [1, 2, 3, 4]},
  // }

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
        data={{ name: 'email'}}
      />
    </Box>
  )
}

export default App;