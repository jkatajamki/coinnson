import React, { Component } from 'react';
import tabs from './tabs';
import { TabHeaders, TabHeader, TabContent } from './style';
import { AchievementTracks } from '../Achievements/AchievementTracks';

export class TabContainer extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: 'Achievements',
    };

    this.setTab = this.setTab.bind(this)
  }

  renderTab(tabName) {
    switch(tabName) {
      case 'Achievements':
        return <AchievementTracks />
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
    return (<div className="tab-container">
      {tabs.map((tab) => (
        <TabHeaders key={tab.key}>
          <TabHeader onClick={this.setTab} value={tab.tab}>{tab.tab}</TabHeader>
        </TabHeaders>
      ))}
      <TabContent>
        {this.renderTab(this.state.activeTab)}
      </TabContent>
    </div>)
  }
}
