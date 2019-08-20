import React from 'react'
import { color, typography, layout, flexbox, 
  grid, background, border, position, shadow } from 'styled-system'
import cleanElement from 'clean-element';

const Base = (props) => {
  const Component = styled.input``;
  const next = filterProps(props)
  return <Component {...next} />
}

const Input = styled.input` 
    boxSizing: 'border-box',
    minWidth: 0
    ${color} ${typography} ${layout} ${flexbox} 
    ${grid} ${background} ${border} ${position} ${shadow}
    `

Input.displayName = 'Input'


export default Input;