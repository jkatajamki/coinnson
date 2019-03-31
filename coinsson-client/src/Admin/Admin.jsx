import React from 'react';
import { AdminContainer, ResetContainer } from './styles';
import ResetQuests from './ResetQuests';
import TrackRowContainer from './TrackRowContainer';
import ResetPoints from './ResetPoints';

const Admin = ({ tracks }) => {
  const reset = () => {
    
  }
  return (
    <AdminContainer>
      <h2>Reset</h2>
      <ResetContainer>
        <ResetQuests resetQuests={reset} />
        <ResetPoints resetPoints={reset} />
      </ResetContainer>
      <TrackRowContainer tracks={tracks} />
    </AdminContainer>
  );
};

export default Admin;
