import React from 'react';
import { CardContainer, CardHeader, CardBody } from './styles';
import { StyledIcon } from '../ProgressBar/styles';

class QuestList extends React.PureComponent {
  render() {
    return (
      <CardContainer>
        <CardHeader>
          <h4>{this.props.quest.header}</h4>
          <StyledIcon>
            {this.props.quest.track}
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
