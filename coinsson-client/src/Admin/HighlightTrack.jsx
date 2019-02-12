import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_TRACKS, HIGHLIGHT_QUESTS } from './queries';
import TrackList from './TrackList';

const HighlightTrack = () => {
  return (
    <Query
      query={GET_TRACKS}
      >
      {({ loading, error, data }) => {
        if (loading) return '';
        if (error) return `Error! ${error.message}`;
        return (
          <Mutation mutation={HIGHLIGHT_QUESTS}>
              {highlightQuests => (
                <div>
                  <h2>Highlight Track(s)</h2>
                  <TrackList tracks={data.tracks} handleHighlight={(id) => {
                      highlightQuests({ variables: { id } })
                    }
                  } />
                </div>
              )}
          </Mutation>
        )
      }}
    </Query>
)};

export default HighlightTrack;
