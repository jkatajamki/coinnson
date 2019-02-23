import React from 'react';
import { AdminContainer } from './styles';
import ResetQuests from './ResetQuests';
import HighlightTrack from './HighlightTrack';

const Admin = () => {
  return (
    <AdminContainer>
      <ResetQuests />
      <HighlightTrack />
    </AdminContainer>
  )
}

export default Admin;
