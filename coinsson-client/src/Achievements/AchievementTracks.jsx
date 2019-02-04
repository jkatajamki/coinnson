import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { achievements } from './achievements';
import { Container } from './styles';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_TRACKS= gql`
    {
      tracks {
        id
        title
        quests {
          id
          header
          instructions
          points
          order
          state
          track {
            id
            title
          }
        }
      }
    }

`

const Tracks = () => (
  <Query query={GET_TRACKS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <Container>
          {data.tracks.map((track) => <ProgressBar key={track.id} content={track} disabled={false} />)}
        </Container>
      );
    }}
  </Query>
);

export const AchievementTracks = () => (
  <div className="achievement-tracks">
    <h2>AchievementTracks</h2>
    <Tracks />
  </div>
);
