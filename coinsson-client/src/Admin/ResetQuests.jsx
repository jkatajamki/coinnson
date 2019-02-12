import React from 'react';
import { Mutation } from 'react-apollo';
import { RESET_QUESTS } from './queries';
import { Button } from './styles';

const ResetQuests = () => {
  return (
    <Mutation mutation={RESET_QUESTS}>
        {(resetQuests, { loading, error }) => (
          <div>
            <h2>Reset Quests</h2>
            <Button onClick={resetQuests}>Reset Quests</Button>
            {loading && <p>Loading...</p>}
          </div>
        )}
    </Mutation>
  )
}

export default ResetQuests;
