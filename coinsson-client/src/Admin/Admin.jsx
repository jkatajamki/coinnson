import React from 'react';
import { AdminContainer, ResetContainer } from './styles';
import ResetQuests from './ResetQuests';
import TrackRowContainer from './TrackRowContainer';
import ResetPoints from './ResetPoints';

const Admin = () => {
  return (
    <AdminContainer>
      <h2>Reset</h2>
      <ResetContainer>
        <ResetQuests />
        <ResetPoints />
      </ResetContainer>
      <TrackRowContainer />
    </AdminContainer>
  )
}

export default Admin;
