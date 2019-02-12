import React from 'react';
import Quest from './Quest';
import { Query, Mutation } from 'react-apollo';
import { CHANGE_STATUS, GET_QUESTS } from './queries';
import PlaneLoader from '../Loader/Loader';

const Quests = ({ id, completeTrack }) => (
  <Query
    query={GET_QUESTS}
    variables={{id}}
    >
    {({ loading, error, data }) => {
      if (loading) return (<PlaneLoader />);
      if (error) return `Error! ${error.message}`;
      return (
        <Mutation mutation={CHANGE_STATUS} key={id}>
            {updateQuest => (
          <Quest
            data={data}
            completeTrack={completeTrack}
            changeStatus={(item) => {
              updateQuest({ variables: { id: item.id, state: item.state, done: item.done } });
            }} />)}
        </Mutation>
      )
    }}
  </Query>
);

export default Quests;
