import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Container } from './styles';
import { Query, Mutation } from 'react-apollo';
import { GET_TRACKS, COMPLETE_TRACK } from './queries';
<<<<<<< HEAD
import PlaneLoader from '../Loader/Loader';
=======
import Loader from 'react-loader-spinner';
>>>>>>> Add everything needed to complete a track when last item is completed

const Tracks = () => (
  <Query
    query={GET_TRACKS}
    >
    {({ loading, error, data }) => {
      if (loading) return ( <PlaneLoader /> );
      if (error) return `Error! ${error.message}`;
      return (
        <Mutation mutation={COMPLETE_TRACK}>
          {completeTrack => (
            <Container>
<<<<<<< HEAD
              {data.tracks.filter(track => !track.hidden).map((track) =>(
=======
              {data.tracks.map((track) =>(
>>>>>>> Add everything needed to complete a track when last item is completed
                <ProgressBar
                  key={track.id}
                  track={track.id}
                  completeTrack={() => completeTrack({ variables: { id: track.id, done: true } })}
                  disabled={false} />
              ))}
            </Container>)}
      </Mutation>
      );
    }}
  </Query>
);

export default Tracks;
