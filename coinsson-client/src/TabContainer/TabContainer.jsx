import React, { useState, useEffect } from 'react';
import tabs from './tabs';
import {
  TabHeaders,
  TabHeader,
  TabContent,
  TabWrapper,
  Underline,
  PointsContainer,
} from './styles';
import AchievementTracks from '../Achievements/AchievementTracks';
import QuestList from '../QuestCards/QuestList.jsx';
import Admin from '../Admin/Admin';
import apiCall from '../Ajax/ajax';
import dotenv from 'dotenv';

dotenv.config();

const getIsAdmin = () => {
  return process.env.REACT_APP_OLENHAN_ADMIN;
};

const fetchPoints = () => {
  const path = '/content/getPoints';
  const method = 'GET';
  return apiCall(method, path);
};

const TabContainer = ({ quests, tracks, achievements, updateTrack, updateQuests, updateAchievements }) => {
  const isAdmin = getIsAdmin();

  const [activeTab, setActiveTab] = useState('Saavutukset');
  const [points, setPoints] = useState(null);

  useEffect(() => {
    fetchPoints().then(res => setPoints(res.points));
  }, []);

  const renderTab = (tabName, quests, tracks) => {
    switch (tabName) {
      case 'Saavutukset':
        return <AchievementTracks tracks={tracks} quests={quests} completeQuest={updateQuests} />;
      case 'Tehtävät':
        return <QuestList quests={quests} tracks={tracks} />;
      case 'Admin':
        if (!isAdmin) {
          return null;
        }
        return <Admin
          tracks={tracks}
          updateTrack={updateTrack}
          quests={quests}
          updateQuests={updateQuests}
          achievements={achievements}
          updateAchievements={updateAchievements}
        />;
      default:
        return <div className="placeholder" />;
    }
  };

  const filteredTabs = isAdmin ? tabs : tabs.filter(t => t.tab !== 'Admin');

  return (
    <TabWrapper>
      <TabHeaders>
        {filteredTabs.map(tab => (
          <TabHeader
            active={activeTab === tab.tab}
            key={tab.key}
            onClick={() => setActiveTab(tab.tab)}
            value={tab.tab}
          >
            {tab.tab}
            <Underline
              pose={activeTab === tab.tab ? 'enter' : 'exit'}
              active={activeTab === tab.tab}
            />
          </TabHeader>
        ))}
        <PointsContainer>
          <h2>{points}</h2>
        </PointsContainer>
      </TabHeaders>
      <TabContent>{renderTab(activeTab, quests, tracks)}</TabContent>
    </TabWrapper>
  );
};
export default TabContainer;
