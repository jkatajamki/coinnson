import React from 'react';
import { StyledTransfer } from './styles';

const Transfer = ({ state, disabled }) => {
  const checkedState = disabled && state !== 'used' ? 'blocked' : state;
  return <StyledTransfer state={checkedState} pose={checkedState} />;
};

export default Transfer;
