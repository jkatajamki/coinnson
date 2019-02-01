import React, { Component } from 'react';
import tabs from './tabs';
import { TabHeaders, TabHeader, TabContent, TabWrapper } from './style';
import { AchievementTracks } from '../Achievements/AchievementTracks';
import { QuestList } from '../Quests/QuestList.jsx';

export class TabContainer extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: 'Quests',
    };

    this.setTab = this.setTab.bind(this)
  }

  renderTab(tabName) {
    switch(tabName) {
      case 'Achievements':
        return <AchievementTracks />
      case 'Quests':
        return <QuestList />
      default:
        return <div className="placeholder"></div>
    }
  }

  setTab(event) {
    this.setState({
      activeTab: event.target.value
    })
  }

  render() {
    return (
      <TabWrapper>
        <TabHeaders>
          {tabs.map((tab) => (
            <TabHeader key={tab.key} onClick={this.setTab} value={tab.tab}>{tab.tab}</TabHeader>
          ))}
        </TabHeaders>
        <TabContent>
          {this.renderTab(this.state.activeTab)}
        </TabContent>
      </TabWrapper>)
  }
}
