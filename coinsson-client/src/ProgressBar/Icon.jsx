import React from 'react';
import { StyledIcon } from './styles';

const Icon = ({item, handleClick, complete, disabled}) => {
  const state = disabled && item.state !== 'used' ? 'blocked' : item.state;
  return (
    <StyledIcon
      state={state}
      onClick={() => !disabled && item.state === 'available' && handleClick()}
      pose={complete ? 'complete' : state}>
      {item.content}
    </StyledIcon>)
}

export default Icon;
