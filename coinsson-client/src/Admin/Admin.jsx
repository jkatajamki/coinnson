import React from 'react';
import { AdminContainer } from './styles';
import ResetQuests from './ResetQuests';
import TrackRowContainer from './TrackRowContainer';

const Admin = () => {
  return (
    <AdminContainer>
      <ResetQuests />
      <TrackRowContainer />
    </AdminContainer>
  )
}

export default Admin;
