import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import RootContainer from './Layout/RootContainer';
import { theme } from './styles';
import TabContainer from './TabContainer/TabContainer';
import { createGlobalStyle } from 'styled-components';
import apiCall, { subscribeToTracks, subscribeToQuests, subscribeToAchievements } from './Ajax/ajax';

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

/* TODO:
  put these in another file
*/
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

const getAllAchievements = () => {
  const path = '/content/getAllAchievements';
  const method = 'GET';
  return apiCall(method, path);
}

const postTrack = (track) => {
  const path = '/content/updateTrack';
  const method = 'POST';
  return apiCall(method, path, {
    track
  }, 'update track');
}

const postQuests = (quests) => {
  const path = '/content/updateQuests';
  const method = 'POST';
  return apiCall(method, path, {
    quests
  }, 'update quests');
}

const postAchievements = (achievements) => {
  const path = '/content/updateAchievements';
  const method = 'POST';
  return apiCall(method, path, {
    achievements
  }, 'update achievements');
}

const App = () => {
  const [quests, setQuests] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [achievements, setAchievements] = useState(null);

  useEffect(() => {
    getAllQuests()
      .then(res => setQuests(res))
      .catch(err => console.error(err));
    getAllTracks()
      .then(res => setTracks(res))
      .catch(err => console.error(err));
    getAllAchievements()
      .then(res => setAchievements(res))
      .catch(console.error);
  }, []);

  const updateTrack = async (track) => {
    await postTrack(track);
  };

  const updateQuests = async (quests) => {
    await postQuests(quests);
  }

  const updateAchievements = async (achievements) => {
    await postAchievements(achievements);
  }

  subscribeToTracks((tracks) => {
    setTracks(tracks);
  });

  subscribeToQuests((quests) => {
    setQuests(quests);
  });

  subscribeToAchievements((achievements) => {
    setAchievements(achievements);
  });

  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <GlobalStyles />
        {!!tracks && !!quests && (
          <TabContainer
            quests={quests}
            tracks={tracks}
            achievements={achievements}
            updateTrack={updateTrack}
            updateQuests={updateQuests}
            updateAchievements={updateAchievements}
          />
        )}
      </RootContainer>
    </ThemeProvider>
  );
};

export default App;
