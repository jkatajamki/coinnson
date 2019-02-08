import React from 'react';
import Quest from './Quest';
import { Query, Mutation } from 'react-apollo';
import { CHANGE_STATUS, GET_QUESTS } from './queries';

const Quests = ({ id }) => (
  <Query
    query={GET_QUESTS}
    variables={{id}}
    >
    {({ loading, error, data }) => {
      if (loading) return '';
      if (error) return `Error! ${error.message}`;
      return (
        <Mutation mutation={CHANGE_STATUS} key={id}>
            {updateQuest => (
          <Quest
            data={data}
            changeStatus={(item) => {
              updateQuest({ variables: { id: item.id, state: item.state } });
            }} />)}
        </Mutation>
      )
    }}
  </Query>
);

export default Quests;
