import React from 'react';
import { Button, RowWrapper, ButtonWrapper } from './styles';

const TrackRow = ({ handleClick, track }) => {
  return (
    <RowWrapper justifyContent="space-between">
      <p>{track.title}</p>
      <ButtonWrapper>
        <Button onClick={() => handleClick(track.id, 'highlight')}>
          Korosta
        </Button>
        <Button
          onClick={() => handleClick(track.id, track.hidden ? 'show' : 'hide')}
        >
          {track.hidden ? 'Näytä' : 'Piilota'}
        </Button>
      </ButtonWrapper>
    </RowWrapper>
  );
};

export default TrackRow;
