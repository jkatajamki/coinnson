import React, { useState, useEffect } from 'react';
import Quest from './Quest';
import PlaneLoader from '../Loader/Loader';
import apiCall from '../Ajax/ajax';
import { Row } from './styles';
import Icon from './Icon';
import { icons } from './icon-mapping';
import Transfer from './Transfer';

const fetchQuests = (trackId) => {
  const path = `/content/getTrackQuests?${trackId}`;
  return apiCall('GET', path);
}

const updateQuest = () => {
  console.log('updateQuest')
}

const Quests = ({ track, completeTrack }) => {
  const [ quests, setQuests ] = useState(null);
  useEffect(() => {
    fetchQuests(track.id).then(setQuests)
  }, []);

  if (!quests) {
    return (<PlaneLoader />)
  }
  console.log(quests)

  return quests.map((item, key) => {
    if (item.order === quests.length) {
      return (
        <Icon
          disabled={item.state === 'BLOCKED'}
          key={key}
          icon={icons[item.track.header]}
          complete={item.track.done}
          item={item}
          /*
          handleClick={() => {
            const currItem = {
              id: item.id,
              state: 'USED',
              points: item.points,
            };
            completeTrack();
            changeStatus(currItem);
          }}
          */
        />
      );
    }
    return (
      <Row key={item.order}>
        <Icon
          disabled={item.state === 'BLOCKED'}
          icon={icons[item.track.header]}
          complete={item.track.done}
          item={item}
          /*
          handleClick={() => {
            const currItem = {
              id: item.id,
              state: 'USED',
              done: true,
              points: item.points,
            };
            const nextItem = data.quests.find(
              quest => quest.order === item.order + 1
            );
            const nextAvailable = {
              id: nextItem.id,
              state: 'AVAILABLE',
              done: false,
            };
            changeStatus(currItem);
            changeStatus(nextAvailable);
          }}
          */
        />
        <Transfer state={item.state} disabled={item.state === 'BLOCKED'} />
      </Row>
    );
  });
};

export default Quests;
