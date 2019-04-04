import React from 'react';
import Quests from './Quests';
import { ProgressBarDiv } from './styles';

const ProgressBar = ({ track, quests, completeQuest }) => {
  return (
    <ProgressBarDiv>
      <Quests
        track={track}
        quests={quests}
        completeQuest={completeQuest}
      />
    </ProgressBarDiv>
  );
};

export default ProgressBar;
