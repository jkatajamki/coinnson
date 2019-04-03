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

const renderTab = (tabName, quests, tracks) => {
  switch (tabName) {
    case 'Saavutukset':
      return <AchievementTracks tracks={tracks} quests={quests} />;
    case 'Tehtävät':
      return <QuestList quests={quests} tracks={tracks} />;
    case 'Admin':
      return <Admin tracks={tracks} />;
    default:
      return <div className="placeholder" />;
  }
};

const fetchPoints = () => {
  const path = '/content/getPoints';
  const method = 'GET';
  return apiCall(method, path);
};

const TabContainer = ({ quests, tracks }) => {
  const [activeTab, setActiveTab] = useState('Admin');
  const [points, setPoints] = useState(null);
  useEffect(() => {
    fetchPoints().then(res => setPoints(res.points));
  }, []);

  return (
    <TabWrapper>
      <TabHeaders>
        {tabs.map(tab => (
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
