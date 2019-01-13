import React from 'react';
import { StyledIcon } from './styles';

export default class Icon extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onIconClick = this.onIconClick.bind(this);
  }

  onIconClick() {
    const { disabled, item, handleClick } = this.props;
    if (disabled || item.state !== 'available') {
      return;
    }
    handleClick();
  }

  render() {
    const { item, complete, disabled } = this.props;
    const iconState = disabled && item.state !== 'used' ? 'blocked' : item.state;
    return (
      <StyledIcon
        state={iconState}
        onClick={this.onIconClick}
        pose={complete ? 'complete' : iconState}>
        {item.content}
      </StyledIcon>
    )
  }
}
