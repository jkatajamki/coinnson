import React from 'react';
import { AdminContainer, ResetContainer } from './styles';
import ResetQuests from './ResetQuests';
import TrackRowContainer from './TrackRowContainer';
import ResetPoints from './ResetPoints';
import apiCall from '../Ajax/ajax';

const Admin = ({ tracks, updateTrack, quests, updateQuests }) => {
  const resetPoints = () => {
    const path = '/content/resetPoints';
    const method = 'GET';
    return apiCall(method, path);
  };

  const resetQuests = () => {
    const reset = quests.map(q => {
      const blank = {
        ...q,
        done: false,
        hidden: false,
        highlight: false,
        state: 'BLOCKED',
      };

      return q.order === 1 ? { ...blank, state: 'AVAILABLE' } : blank;
    });
    updateQuests(reset);
  };

  return (
    <AdminContainer>
      <h2>Reset</h2>
      <ResetContainer>
        <ResetQuests resetQuests={resetQuests} />
        <ResetPoints resetPoints={resetPoints} />
      </ResetContainer>
      <TrackRowContainer
        tracks={tracks}
        updateTrack={updateTrack}
        quests={quests}
        updateQuests={updateQuests}
      />
    </AdminContainer>
  );
};

export default Admin;
