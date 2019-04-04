import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Container } from './styles';

const Tracks = ({ tracks, quests, completeQuest }) => {
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
            completeQuest={completeQuest}
            disabled={false}
          />
        </React.Fragment>
      ))}
  </Container>)
};

export default Tracks;
