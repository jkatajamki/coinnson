import React from 'react';
import { CardContainer, CardHeader, CardBody } from './styles';
import { StyledIcon } from '../ProgressBar/styles';
import { icons } from '../ProgressBar/icon-mapping';


  const QuestCard = (props) => {
    const { quest } = props;
    const style = quest.done
      ? 'done'
      : quest.highlight
      ? 'highlighted'
      : 'available';
    return (
      <CardContainer
        styleName={style}
        pose={quest.highlight ? 'highlight' : 'normal'}
      >
        <CardHeader styleName={style}>
          <h4>{quest.header}</h4>
          <StyledIcon>
            {quest.done ? icons['Done'] : icons[props.trackTitle]}
          </StyledIcon>
        </CardHeader>
        <CardBody styleName={style}>
          <p>{quest.instructions}</p>
          <p>
            <b>Pisteet:</b> {quest.points}
          </p>
        </CardBody>
      </CardContainer>
    );
  }


export default QuestCard;
