import React from 'react';
import { Button, RowWrapper, ButtonWrapper } from './styles';

export default class TrackRow extends React.Component {

  handleClick = async (id, type) => {
    await this.props.handleTypeChange(type);
    this.props.handleMutation(id);
    this.props.refetch();
  }

  render () {
    const { track } = this.props;
    return (
      <RowWrapper justifyContent="space-between">
        <p>{track.title}</p>
        <ButtonWrapper>
          <Button width="7em" onClick={() => this.handleClick(track.id, 'highlight')}>Korosta</Button>
          <Button width="7em" onClick={() => this.handleClick(track.id, track.hidden ? 'show' : 'hide')}>{track.hidden ? 'Näytä' : 'Piilota'}</Button>
        </ButtonWrapper>
      </RowWrapper>
    )
  }
}
