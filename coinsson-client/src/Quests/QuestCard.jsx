import React from 'react';
import { CardContainer, CardHeader, CardBody } from './styles';
import { StyledIcon } from '../ProgressBar/styles';
import { icons } from '../ProgressBar/icon-mapping';

class QuestList extends React.PureComponent {
  render() {
    return (
      <CardContainer>
        <CardHeader>
          <h4>{this.props.quest.header}</h4>
          <StyledIcon>
            {icons[this.props.quest.track.title]}
          </StyledIcon>
        </CardHeader>
        <CardBody>
          <p>{this.props.quest.instructions}</p>
          <p><b>Pisteet:</b> {this.props.quest.points}</p>
        </CardBody>
      </CardContainer>
    )
  }
}

export default QuestList;
