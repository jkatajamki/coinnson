import React from 'react';
import PlaneLoader from '../Loader/Loader';
import { Row } from './styles';
import Icon from './Icon';
import { icons } from './icon-mapping';
import Transfer from './Transfer';

const Quests = ({ track, quests }) => {
  return quests.map((item, key) => {
    if (item.order === quests.length) {
      return (
        <Icon
          disabled={item.state === 'BLOCKED'}
          key={key}
          icon={icons[track.title]}
          complete={track.done}
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
      <Row key={key}>
        <Icon
          disabled={item.state === 'BLOCKED'}
          icon={icons[track.title]}
          complete={track.done}
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
