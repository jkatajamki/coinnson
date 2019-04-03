import React from 'react';
import { TrackRowWrapper } from './styles';
import TrackRow from './TrackRow';
import PlaneLoader from '../Loader/Loader';

const TrackRowContainer = ({ tracks }) => {
  const handleClick = () => {
    //Tässä tehdään trackin muutokset
  };

  return (
    <div>
      <h2>Do great things with tracks</h2>
      <TrackRowWrapper>
        {tracks.map(track => (
          <TrackRow handleClick={handleClick} track={track} key={track.id} />
        ))}
      </TrackRowWrapper>
    </div>
  );
};

export default TrackRowContainer;
