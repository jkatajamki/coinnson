import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { achievements } from './achievements';

export class AchievementTracks extends Component {
  render() {
    return (<div className="achievement-tracks">
      <h2>AchievementTracks</h2>
      {achievements.map(achievement => <ProgressBar content={achievement} disabled={false} />)}
    </div>)
  }
}
