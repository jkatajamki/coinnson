import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_POINTS } from '../TabContainer/queries';
import { RESET_POINTS } from './queries';
import { Button } from './styles';
import PlaneLoader from '../Loader/Loader';
import { getPointCount } from '../helpers';

const ResetPoints = () => {
  return (
    <Query
      query={GET_POINTS}>
      {({ loading, error, data, refetch }) => {
        if (loading) return (<PlaneLoader />);
        if (error) return `Error! ${error.message}`;
        return (
          <Mutation mutation={RESET_POINTS}>
              {(resetPoints, { loading, error }) => (
                <div>
                  {loading ? <PlaneLoader /> : <Button width="10em" onClick={() => resetPoints({ variables: { points: -(getPointCount(data.points)) } })}>Reset Points</Button>}
                </div>
              )}
          </Mutation>
        )
      }}
    </Query>
  )
}

export default ResetPoints;
