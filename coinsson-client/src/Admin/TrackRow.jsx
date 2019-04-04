import React from 'react';
import { Button, RowWrapper, ButtonWrapper } from './styles';

const TrackRow = ({ handleClick, track, quests }) => {
  const highlighted = quests.find(q => q.highlight);
  return (
    <RowWrapper justifyContent="space-between">
      <p>{track.title}</p>
      <ButtonWrapper>
        <Button id="highlight-quest-btn" onClick={() => handleClick(track.id, 'toggleHighlight')}>
          {highlighted ? 'Himmennä' : 'Korosta'}
        </Button>
        <Button id="hide-quest-btn" onClick={() => handleClick(track.id, 'toggleVisibility')}>
          {track.hidden ? 'Näytä' : 'Piilota'}
        </Button>
      </ButtonWrapper>
    </RowWrapper>
  );
};

export default TrackRow;
