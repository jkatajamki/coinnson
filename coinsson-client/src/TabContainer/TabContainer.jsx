import React, { useState } from 'react';
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
import QuestList from '../Quests/QuestList.jsx';
import Admin from '../Admin/Admin';
import { useAjax } from '../use-ajax';

const renderTab = (tabName) => {
  switch (tabName) {
    case 'Saavutukset':
      return <AchievementTracks />;
    case 'Tehtävät':
      return <QuestList />;
    case 'Admin':
      return <Admin />;
    default:
      return <div className="placeholder" />;
  }
}


const getPoints = () => {
  const response = useAjax('/content/getPoints', 'GET');
  return response ? response.points : null;
}

const TabContainer = () => {
  const [ activeTab, setActiveTab ] = useState('Admin');
  const points = getPoints();
  console.log(points)

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
      <TabContent>{renderTab(activeTab)}</TabContent>
    </TabWrapper>
  );
}
export default TabContainer;
