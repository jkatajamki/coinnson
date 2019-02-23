import React from 'react';
import { Query } from 'react-apollo';
import { GET_POINTS } from './queries';
import { PointsContainer } from './styles';

const getCount = (data) => {
  return data.points.reduce((acc, curr) => {
    const newAcc = acc + curr.points;
    return newAcc;
  }, 0);
}

const Points = () => (
  <Query
    query={GET_POINTS}
    pollInterval={500}
    >
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error.message}`;
      return (
        <PointsContainer>
          <h2>{getCount(data)}</h2>
        </PointsContainer>
      )
    }}
  </Query>
)

export default Points;
