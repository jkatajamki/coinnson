import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Container } from './styles';
import { Query, Mutation } from 'react-apollo';
import { GET_TRACKS, COMPLETE_TRACK } from './queries';
import PlaneLoader from '../Loader/Loader';
import apiCall from '../Ajax/ajax';

const fetchTracks = () => {
  const path = '/content/getAllTracks'
  return apiCall('GET', path);
}

const completeTrack = (data) => {
  console.log('data', data)
}

const Tracks = () => {
  const [ tracks, setTracks ] = useState(null);
  useEffect(() => {
    fetchTracks().then(setTracks)
  }, []);

  if (!tracks) {
    return (<PlaneLoader />)
  }

  return (<Container>
    {tracks
      .filter(track => !track.hidden)
      .map(track => (
        <React.Fragment key={track.id}>
          <ProgressBar
            track={track}
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
