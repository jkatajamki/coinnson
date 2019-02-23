import React from 'react';
import { StyledIcon } from './styles';

export default class Icon extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onIconClick = this.onIconClick.bind(this);
  }

  onIconClick() {
    const { disabled, item, handleClick } = this.props;
    if (disabled || item.state !== 'AVAILABLE') {
      return;
    }
    handleClick();
  }

  render() {
    const { item, complete, disabled, icon } = this.props;
    const iconState =
      disabled && item.state !== 'USED' ? 'BLOCKED' : item.state;
    return (
      <StyledIcon
        state={iconState}
        onClick={this.onIconClick}
        pose={complete ? 'COMPLETE' : iconState}
      >
        {icon}
      </StyledIcon>
    );
  }
}
