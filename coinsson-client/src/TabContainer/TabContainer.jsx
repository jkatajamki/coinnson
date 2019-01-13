import React, { Component } from 'react';
import tabs from './tabs';
import { AchievementTracks } from '../Achievements/AchievementTracks';
import { Tabs, TabPane } from './style';

export class TabContainer extends Component {
  renderTab(tabName) {
    switch(tabName) {
      case 'Achievements':
        return <AchievementTracks />
      default:
        return <div className="placeholder"></div>
    }
  }

  render() {
    return (<div className="tab-container">
      <Tabs
        defaultActiveKey="1"
        size="large"
      >
        {tabs.map((tab) => (
          <TabPane tab={tab.tab} key={tab.key}>
            {this.renderTab(tab.tab)}
          </TabPane>
        ))}
      </Tabs>
    </div>)
  }
}
