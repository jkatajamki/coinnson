import React from 'react';
import Quests from './Quests';
import { ProgressBarDiv } from './styles';

const ProgressBar = ({ track, quests, completeTrack }) => {
  return (
    <ProgressBarDiv>
      <Quests
        track={track}
        quests={quests}
        completeTrack={completeTrack}
      />
    </ProgressBarDiv>
  );
};

export default ProgressBar;
