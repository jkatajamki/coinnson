import React from 'react';
import { Row } from './styles';
import Icon from './Icon';
import { icons } from './icon-mapping';
import Transfer from './Transfer';

import dotenv from 'dotenv';

dotenv.config();

const getIsAdmin = () => {
  return process.env.REACT_APP_OLENHAN_ADMIN;
};

const Quests = ({ track, quests, completeQuest }) => {

  const handleClick = (quest, lastItem = false) => {
    // no click action for the non-admin kind ;)
    if (!getIsAdmin()) {
      return;
    }

    const currentQuest = {
      ...quest,
      done: true,
      state: 'USED'
    }

    if (lastItem) {
      completeQuest([currentQuest]);
      return;
    }

    const nextQuest = {
      ...quests.find(q => q.trackId === quest.trackId && (q.order - 1) === quest.order),
      done: false,
      state: 'AVAILABLE'
    };
    completeQuest([currentQuest, nextQuest]);
  };

  return quests.map((item, key) => {
    if (item.order === quests.length) {
      return (
        <Icon
          disabled={item.state === 'BLOCKED'}
          key={key}
          icon={icons[track.title]}
          complete={track.done}
          item={item}
          handleClick={() => handleClick(item, true)}
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
          handleClick={() => handleClick(item)}
        />
        <Transfer state={item.state} disabled={item.state === 'BLOCKED'} />
      </Row>
    );
  });
};

export default Quests;
