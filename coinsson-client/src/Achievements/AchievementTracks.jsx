import React from 'react';
import Tracks from './Tracks';
import PlaneLoader from '../Loader/Loader';

const AchievementTracks = ({ tracks, quests }) => {
  if (!tracks || !quests) {
    return (<PlaneLoader />)
  }
  return (
    <div className="achievement-tracks">
      <h2>Achievement Tracks</h2>
      <Tracks tracks={tracks} quests={quests} />
    </div>
  );
}

export default AchievementTracks;
