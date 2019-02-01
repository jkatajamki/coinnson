import React, { Component } from 'react';
import tabs from './tabs';
import { TabHeaders, TabHeader, TabContent, TabWrapper, Underline } from './style';
import { AchievementTracks } from '../Achievements/AchievementTracks';
import { QuestList } from '../Quests/QuestList.jsx';
import posed,  { PoseGroup }  from 'react-pose';


export class TabContainer extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: 'Achievements',
    };
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

  setTab(tab) {
    this.setState({
      activeTab: tab,
    })
  }

  render() {
    return (
      <TabWrapper>
        <TabHeaders>
          {tabs.map((tab) => (
            <TabHeader active={this.state.activeTab === tab.tab} key={tab.key} onClick={() => this.setTab(tab.tab)} value={tab.tab}>
              {tab.tab}
              <Underline pose={this.state.activeTab === tab.tab ? 'enter' : 'exit'} active={this.state.activeTab === tab.tab} />
            </TabHeader>
          ))}
        </TabHeaders>
        <TabContent>
          {this.renderTab(this.state.activeTab)}
        </TabContent>
      </TabWrapper>)
  }
}
