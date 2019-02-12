import React from 'react';
import { CardContainer, CardHeader, CardBody } from './styles';
import { StyledIcon } from '../ProgressBar/styles';
import { icons } from '../ProgressBar/icon-mapping';

class QuestList extends React.PureComponent {
  render() {
    const { quest } = this.props;
    const style = quest.done ? 'done' : (quest.highlight ? 'highlighted' : 'available');
    return (
      <CardContainer styleName={style}>
        <CardHeader styleName={style}>
          <h4>{quest.header}</h4>
          <StyledIcon>
            {quest.done ? icons['Done'] : icons[quest.track.title]}
          </StyledIcon>
        </CardHeader>
        <CardBody styleName={style}>
          <p>{quest.instructions}</p>
          <p><b>Pisteet:</b> {quest.points}</p>
        </CardBody>
      </CardContainer>
    )
  }
}

export default QuestList;
