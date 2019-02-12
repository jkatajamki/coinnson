import React, { Component } from 'react';
import QuestCard from './QuestCard';
import { quests } from './quests';
import { Query } from 'react-apollo';
import { GET_QUESTS } from './queries';

const Quests = () => (
  <Query
    query={GET_QUESTS}
    >
    {({ loading, error, data }) => {
      if (loading) return '';
      if (error) return `Error! ${error.message}`;
      return (
        <div>
          <h2>Quests</h2>
          {data.quests.map(quest => {
            return (<QuestCard key={quest.id} quest={quest} />)
          })}
        </div>
      )
    }}
  </Query>
);

export default Quests;
