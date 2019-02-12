import React from 'react';
import { CardContainer, CardHeader, CardBody } from './styles';
import { StyledIcon } from '../ProgressBar/styles';
import { icons } from '../ProgressBar/icon-mapping';

class QuestList extends React.PureComponent {
  render() {
    return (
      <CardContainer done={this.props.quest.done}>
        <CardHeader done={this.props.quest.done}>
          <h4>{this.props.quest.header}</h4>
          <StyledIcon>
            {this.props.quest.done ? icons['Done'] : icons[this.props.quest.track.title]}
          </StyledIcon>
        </CardHeader>
        <CardBody done={this.props.quest.done}>
          <p>{this.props.quest.instructions}</p>
          <p><b>Pisteet:</b> {this.props.quest.points}</p>
        </CardBody>
      </CardContainer>
    )
  }
}

export default QuestList;
