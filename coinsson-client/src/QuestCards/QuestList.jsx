import React from 'react';
import QuestCard from './QuestCard';
import PlaneLoader from '../Loader/Loader';
import { Cards } from './styles';

const Quests = ({ quests, tracks }) => {

  const getTrack = (trackId) => {
    const track = tracks.find(item => item.id === trackId)
    return track.title
  }

  if (!quests) {
    return (<PlaneLoader />)
  }

  return (
    <div>
      <h2>Quests</h2>
      <Cards>
        {quests
          .filter(quest => !quest.hidden)
          .map(quest => {
            return <QuestCard key={quest.id} quest={quest} trackTitle={getTrack(quest.trackTitle.sys.id)} />;
          })}
      </Cards>
    </div>
)};

export default Quests;
