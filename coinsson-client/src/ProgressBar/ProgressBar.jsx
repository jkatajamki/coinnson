import React from 'react';
import Quests from './Quests';
import { ProgressBarDiv } from './styles';

class ProgressBar extends React.Component {
  render() {
    return (
      <ProgressBarDiv>
        <Quests id={this.props.track}/>
      </ProgressBarDiv>
  )}
}

export default ProgressBar;
