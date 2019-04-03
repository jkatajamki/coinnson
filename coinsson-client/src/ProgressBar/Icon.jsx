import React from 'react';
import { StyledIcon } from './styles';

const onIconClick = (disabled, item, handleClick) => {
  if (disabled || item.state !== 'AVAILABLE') {
    return;
  }
  handleClick();
};

const Icon = (props) => {
  const { item, complete, disabled, icon } = props;
  const iconState = disabled && item.state !== 'USED' ? 'BLOCKED' : item.state;
  return (
    <StyledIcon
      state={iconState}
      pose={complete ? 'COMPLETE' : iconState}
    >
      {icon}
    </StyledIcon>
  );
};

export default Icon;
