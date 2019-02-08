import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Container } from './styles';
import { Query } from 'react-apollo';
import { GET_TRACKS } from './queries';

const Tracks = () => (
  <Query
    query={GET_TRACKS}
    >
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <Container>
          {data.tracks.map((track) =>(
            <ProgressBar
              key={track.id}
              track={track.id}
              disabled={false} />
          ))}
        </Container>
      );
    }}
  </Query>
);

export default Tracks;
