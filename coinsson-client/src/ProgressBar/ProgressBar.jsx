import React from 'react';
import Quests from './Quests';
import { ProgressBarDiv } from './styles';

const ProgressBar = ({track, completeTrack}) => {
    return (
      <ProgressBarDiv>
        <Quests id={track} completeTrack={(track) => completeTrack()}/>
      </ProgressBarDiv>
  )
}

export default ProgressBar;
