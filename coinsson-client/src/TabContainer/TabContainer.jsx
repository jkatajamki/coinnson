import React, { Component } from 'react';
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
import Points from './Points';

export class TabContainer extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: 'Admin',
    };
  }

  renderTab(tabName) {
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

  setTab(tab) {
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    return (
      <TabWrapper>
        <TabHeaders>
          {tabs.map(tab => (
            <TabHeader
              active={this.state.activeTab === tab.tab}
              key={tab.key}
              onClick={() => this.setTab(tab.tab)}
              value={tab.tab}
            >
              {tab.tab}
              <Underline
                pose={this.state.activeTab === tab.tab ? 'enter' : 'exit'}
                active={this.state.activeTab === tab.tab}
              />
            </TabHeader>
          ))}
          <Points />
        </TabHeaders>
        <TabContent>{this.renderTab(this.state.activeTab)}</TabContent>
      </TabWrapper>
    );
  }
}
