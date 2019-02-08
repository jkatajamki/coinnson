import React from 'react';
import Quests from './Quests';
import { ProgressBarDiv } from './styles';

const ProgressBar = ({track}) => {
    return (
      <ProgressBarDiv>
        <Quests id={track}/>
      </ProgressBarDiv>
  )
}

export default ProgressBar;
