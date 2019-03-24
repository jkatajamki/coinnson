import React, { useState } from 'react';
import tabs from './tabs';
import {
  TabHeaders,
  TabHeader,
  TabContent,
  TabWrapper,
  Underline,
} from './styles';
import AchievementTracks from '../Achievements/AchievementTracks';
import QuestList from '../Quests/QuestList.jsx';
import Admin from '../Admin/Admin';
import Points from '../Points/Points';
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

const TabContainer = () => {
  const [ activeTab, setActiveTab ] = useState('Admin');
  const points = useAjax('/content/getPoints', 'GET')
  console.log('points', points)

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
        <Points />
      </TabHeaders>
      <TabContent>{renderTab(activeTab)}</TabContent>
    </TabWrapper>
  );
}
export default TabContainer;
