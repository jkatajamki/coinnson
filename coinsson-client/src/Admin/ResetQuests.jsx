import React from 'react';
import { Mutation } from 'react-apollo';
import { RESET_QUESTS } from './queries';
import { ResetButton } from './styles';

const ResetQuests = () => {
  return (
    <Mutation mutation={RESET_QUESTS}>
        {(resetQuests, { loading, error }) => (
          <div>
            <ResetButton onClick={resetQuests}>Reset Quests</ResetButton>
            {loading && <p>Loading...</p>}
          </div>
        )}
    </Mutation>
  )
}

export default ResetQuests;
