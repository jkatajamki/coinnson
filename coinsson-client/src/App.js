import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import RootContainer from './Layout/RootContainer';
import { theme } from './styles';
import TabContainer from './TabContainer/TabContainer';
import { createGlobalStyle } from 'styled-components';
import apiCall, { getSocket, subscribeToTracks } from './Ajax/ajax';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Staatliches');
    font-family: 'Montserrat', sans-serif;
  }
  h1, h2, h3, h4, h5, button {
    font-family: 'Staatliches', sans-serif;
    letter-spacing: 0.1em;
  }
`;

const getAllQuests = () => {
  const path = '/content/getAllQuests';
  const method = 'GET';
  return apiCall(method, path);
};

const getAllTracks = () => {
  const path = '/content/getAllTracks';
  const method = 'GET';
  return apiCall(method, path);
};

const postTrack = (track) => {
  const path = '/content/updateTrack';
  const method = 'POST';
  return apiCall(method, path, {
    track
  }, 'update track');
}


const App = () => {
  const [quests, setQuests] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    getAllQuests()
      .then(res => setQuests(res))
      .catch(err => console.error(err));
    getAllTracks()
      .then(res => setTracks(res))
      .catch(err => console.error(err));
  }, []);

  const updateTrack = async (track) => {
    await postTrack(track);
  };

  subscribeToTracks((tracks) => {
    setTracks(tracks);
  });

  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <GlobalStyles />
        {!!tracks && !!quests && (
          <TabContainer
            quests={quests}
            tracks={tracks}
            updateTrack={updateTrack}
          />
        )}
      </RootContainer>
    </ThemeProvider>
  );
};

export default App;
