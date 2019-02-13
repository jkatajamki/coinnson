import React from 'react';
import QuestCard from './QuestCard';
import { Query } from 'react-apollo';
import PlaneLoader from '../Loader/Loader';
import { GET_QUESTS } from './queries';
import { Cards } from './styles';

const Quests = () => (
  <Query
    query={GET_QUESTS}
    >
    {({ loading, error, data }) => {
      if (loading) return ( <PlaneLoader /> );
      if (error) return `Error! ${error.message}`;
      return (
        <div>
          <h2>Quests</h2>
          <Cards>
            {data.quests.filter(quest => !quest.hidden).map(quest => (<QuestCard key={quest.id} quest={quest} />))}
          </Cards>
        </div>
      )
    }}
  </Query>
);

export default Quests;
