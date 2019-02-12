import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Container } from './styles';
import { Query, Mutation } from 'react-apollo';
import { GET_TRACKS, COMPLETE_TRACK } from './queries';
import Loader from 'react-loader-spinner';

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
              {data.tracks.map((track) =>(
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
