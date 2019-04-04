import React from 'react';
import QuestCard from './QuestCard';
import PlaneLoader from '../Loader/Loader';
import { Cards } from './styles';

// filter quests
// only show the next non-completed quest, ie.
// from one track, show only the quest with smallest 'order' number, that isn't 'done'
const getFilteredQuests = (quests, tracks) => quests
  .filter(q => !q.hidden && !tracks.find(t => t.id === q.trackId).hidden)
  .reduce((acc, next) => {
    const trackForNextQuest = tracks.find(t => t.id === next.trackId);
    const alreadyHasRepresentation = acc.find(q => q.trackId === trackForNextQuest.id && q.state === 'AVAILABLE');
    if (alreadyHasRepresentation) {
      return acc;
    }
    const previousRemoved = acc.filter(q => q.trackId !== trackForNextQuest.id)
    const newAcc = [...previousRemoved, next];
    return newAcc;
  }, [])

const Quests = ({ quests, tracks }) => {

  const getTrack = (trackId) => {
    const track = tracks.find(item => item.id === trackId)
    return track.title
  }

  if (!quests) {
    return (<PlaneLoader />)
  }

  const filteredQuests = getFilteredQuests(quests, tracks);
  return (
    <div>
      <h2>Quests</h2>
      <Cards>
        {filteredQuests.map(quest => <QuestCard key={quest.id} quest={quest} trackTitle={getTrack(quest.trackTitle.sys.id)} />)}
      </Cards>
    </div>
)};

export default Quests;
