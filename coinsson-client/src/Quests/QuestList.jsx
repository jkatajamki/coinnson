import React, { Component } from 'react';
import QuestCard from './QuestCard';
import { quests } from './quests';

export class QuestList extends Component {
  render() {
    return (
      <div>
        <h2>Quests</h2>
        {quests.map(quest => {
          return (<QuestCard key={quest.key} quest={quest} />)
        })}
      </div>
    )
  }
}
