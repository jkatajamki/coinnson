import React from 'react';
import Icon from './Icon';
import Transfer from './Transfer'
import { Row } from './styles';
import { icons } from './icon-mapping';

const Quest = ({ data, changeStatus }) =>  data.quests.map((item) => {
  if (item.order === data.quests.length) {
    return (
    <Icon
      disabled={item.state === 'BLOCKED'}
      key={item.order}
      icon={icons[item.track.title]}
      item={item}
      handleClick={() => changeStatus(item)} />
  )}
  return (
    <Row key={item.order}>
      <Icon
        disabled={item.state === 'BLOCKED'}
        icon={icons[item.track.title]}
        item={item}
        handleClick={() => {
          const currItem = {
            id: item.id,
            state: 'USED',
            done: true
          };
          const nextItem = data.quests.find(quest => quest.order === item.order + 1);
          const nextAvailable = {
            id: nextItem.id,
            state: 'AVAILABLE',
            done: false
          }
          changeStatus(currItem);
          changeStatus(nextAvailable);
        }} />
      <Transfer state={item.state} disabled={item.state === 'BLOCKED'} />
    </Row>
)
});

export default Quest;
