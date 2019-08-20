import React from 'react';
import styled from 'styled-components';
import { color, typography, layout, flexbox, 
  grid, background, border, position, shadow } from 'styled-system'
import cleanElement from 'clean-element';
import { filterProps } from './filterProps';

const Base = props => {

  const Div = styled.div``;
  const next = filterProps(props)
  return <Div {...next}/>;
}

const Box = styled(cleanElement(Base))(
  { 
    boxSizing: 'border-box',
    minWidth: 0,
  },
  color, typography, layout, flexbox, grid, background, border, position, shadow
);

export default Box;