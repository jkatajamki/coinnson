import React from 'react';
import { Mutation } from 'react-apollo';
import { RESET_QUESTS } from './queries';
import { Button } from './styles';
import PlaneLoader from '../Loader/Loader';

const ResetQuests = () => {
  return (
    <Mutation mutation={RESET_QUESTS}>
        {(resetQuests, { loading, error }) => (
          <div>
            <h2>Reset Quests</h2>

            {loading ? <PlaneLoader /> : <Button onClick={resetQuests}>Reset Quests</Button>}
          </div>
        )}
    </Mutation>
  )
}

export default ResetQuests;
