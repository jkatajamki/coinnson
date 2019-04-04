import React from 'react';
import { AdminContainer, ResetContainer } from './styles';
import ResetQuests from './ResetQuests';
import TrackRowContainer from './TrackRowContainer';
import ResetPoints from './ResetPoints';
import apiCall from '../Ajax/ajax';

const Admin = ({ tracks, updateTrack }) => {
  const resetPoints = () => {
    const path = '/content/resetPoints';
    const method = 'GET';
    return apiCall(method, path);
  };

  const resetQuests = () => {};

  return (
    <AdminContainer>
      <h2>Reset</h2>
      <ResetContainer>
        <ResetQuests resetQuests={resetQuests} />
        <ResetPoints resetPoints={resetPoints} />
      </ResetContainer>
      <TrackRowContainer tracks={tracks} updateTrack={updateTrack} />
    </AdminContainer>
  );
};

export default Admin;
