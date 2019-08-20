import styled from "styled-components";
import React, { useState } from 'react'

import Box from './Box';

export const Error = styled(Box).attrs({
  className: 'error',
  color: 'error',
  f: 1,
  ml: 1,
  my: 0
})`
  font-weight: normal;
  &:before { content: '—'; }
`

const handleErrorMessages = errorMessages => {
  return errorMessages.map( errorMessage => <Box as="item" key={errorMessage}><Error>{errorMessage}</Error></Box> )
}

const Field = ({ data: { name, type, placeholder, label }, fieldStyle, inputStyle, ...props }) => {
  const [shown, setShown] = useState(false);
  const errorColor = props.errors.length >= 1 ? '#e95667' : null; 
  const {display, ...inputStyleContainer } = inputStyle;
  const {border, borderTop, borderRight, borderBottom, borderLeft, ...inputStyleNoBorder } = inputStyle;
  
  const inputType =
    {
      select: 'select',
      slider: 'slider',
      textarea: 'textarea'
    }[type] || 'input'
    
    return (
    <Box display="flex" {...fieldStyle}>
      <Box 
        alignItems="flex-end"
      >
        <Box as="label" for={name} id={name}>
          {label}
        </Box>
        {props.errors.length >= 1 ? <Box as="list" ml="2rem" color={errorColor} fontSize="1.2rem">{handleErrorMessages(props.errors)}</Box> : ''}
      </Box>
      <Box
        {...inputStyleContainer}
        display="flex"
        borderColor={errorColor}
        focusColor={errorColor} 
        foucsBoxShadowColor={errorColor}
      >
        <Box
          {...props}
          {...inputStyleNoBorder}
          border="none"
          forwardedAs={inputType}
          name={name}
          type={shown && type === "password" ? 'text' : type} 
          placeholder={placeholder}
        />
        { type === "password" ? 
        <Box
          as="p"
          fontSize="12px"
          m="auto"
          onClick={() => setShown(!shown)}
          caps
          cursor='pointer'
        >
          {shown ? 'hide':'show'}
        </Box> : '' }
      </Box>
    </Box>
  );
};

Field.displayName = 'Field';

export default Field