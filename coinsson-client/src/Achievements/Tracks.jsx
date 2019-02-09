import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Container } from './styles';
import { Query } from 'react-apollo';
import { GET_TRACKS } from './queries';
import Loader from 'react-loader-spinner';

const Tracks = () => (
  <Query
    query={GET_TRACKS}
    >
    {({ loading, error, data }) => {
      if (loading) return (
        <Loader
          type="Plane"
           color="#006E90"
           height="100"
           width="100"
          />
      );
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
