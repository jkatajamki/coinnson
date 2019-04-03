import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Container } from './styles';

const completeTrack = (data) => {
  console.log('data', data)
}

const Tracks = ({ tracks, quests }) => {
  const getTrackQuests = (trackId) => quests
    .filter(q => q.trackId === trackId)
    .sort((a, b) => {
      if (a.order < b.order)
        return -1;
      if (a.order > b.order)
        return 1;
      return 0;
    });

  return (<Container>
    {tracks
      .filter(track => !track.hidden)
      .map((track, key) => (
        <React.Fragment key={key}>
          <ProgressBar
            track={track}
            quests={getTrackQuests(track.id)}
            completeTrack={() =>
              completeTrack({ variables: { id: track.id, done: true } })
            }
            disabled={false}
          />
        </React.Fragment>
      ))}
  </Container>)
};

export default Tracks;
