import React from 'react';
import { TrackRowWrapper } from './styles';
import TrackRow from './TrackRow';
import PlaneLoader from '../Loader/Loader';

const TrackRowContainer = ({ tracks, updateTrack }) => {

  const handleClick = (trackId, action) => {
    const track = tracks.find(t => t.id === trackId);

    if (action === 'toggleVisibility') {
      updateTrack({
        ...track,
        hidden: !track.hidden,
      });
    }
    if (action === 'toggleHighlight') {
      //updateTrackQuests()
    }

    //Tässä tehdään trackin muutokset
  };

  return (
    <div>
      <h2>Do great things with tracks</h2>
      <TrackRowWrapper>
        {tracks.map((track, key) => (
          <TrackRow handleClick={handleClick} track={track} key={key} />
        ))}
      </TrackRowWrapper>
    </div>
  );
};

export default TrackRowContainer;
