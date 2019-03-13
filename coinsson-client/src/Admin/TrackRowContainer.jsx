import React, { useState, useEffect } from 'react';
import { TrackRowWrapper } from './styles';
import { Query, Mutation } from 'react-apollo';
import {
  GET_TRACKS,
  HIDE_QUESTS,
  SHOW_QUESTS,
  HIGHLIGHT_QUESTS,
} from './queries';
import TrackRow from './TrackRow';
import PlaneLoader from '../Loader/Loader';

const queries = {
  highlight: HIGHLIGHT_QUESTS,
  hide: HIDE_QUESTS,
  show: SHOW_QUESTS,
};

const TrackRowContainer = () => {
  const [ type, setType ] = useState('highlight');
  useEffect(() => {
    //TODO: Handle data fetching here
  })
  return (
    <Query query={GET_TRACKS}>
      {({ loading, error, data, refetch }) => {
        if (loading) return <PlaneLoader />;
        if (error) return `Error! ${error.message}`;
        return (
          <Mutation mutation={queries[type]}>
            {handleMutation => (
              <div>
                <h2>Do great things with tracks</h2>
                <TrackRowWrapper>
                  {data.tracks.map(track => (
                    <TrackRow
                      refetch={refetch}
                      handleTypeChange={setType}
                      handleMutation={id =>
                        handleMutation({ variables: { id: track.id } })
                      }
                      track={track}
                      key={track.id}
                    />
                  ))}
                </TrackRowWrapper>
              </div>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
}

export default TrackRowContainer;
