import React from 'react';
import { Button } from './styles';
import PlaneLoader from '../Loader/Loader';

const ResetQuests = ({ resetQuests }) => {
  return (
    <Button width="10em" onClick={resetQuests}>
      Reset Quests
    </Button>
  );
};

export default ResetQuests;
