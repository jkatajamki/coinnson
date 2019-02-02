import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { achievements } from './achievements';
import { Container } from './styles';

export class AchievementTracks extends Component {
  render() {
    return (
    <div className="achievement-tracks">
      <h2>AchievementTracks</h2>
      <Container>
        {achievements.map((achievement, i) => <ProgressBar key={i} content={achievement} disabled={false} />)}
      </Container>
    </div>)
  }
}
