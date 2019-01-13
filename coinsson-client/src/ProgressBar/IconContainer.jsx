import React from 'react';
import { ContainerColumn } from './styles';
import Icon from './Icon';

const IconContainer = ({item, handleClick, complete, disabled}) => {
  return (
    <ContainerColumn>
      <Icon
        disabled={disabled}
        complete={complete}
        item={item}
        handleClick={() => handleClick(item)} />
      {item.label}
    </ContainerColumn>
  )
}

export default IconContainer;
