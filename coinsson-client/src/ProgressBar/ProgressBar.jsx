import React from 'react';
import Icon from './Icon';
import Transfer from './Transfer'
import { ProgressBarDiv, Row } from './styles';
import {
  FaFly,
  FaPlaneDeparture,
} from 'react-icons/fa';

const icons = {
  'Laskuvarjohyppy': <FaFly />,
  'Matka': <FaPlaneDeparture />
}

class ProgressBar extends React.Component {
  state = {
    content: [],
    complete: false,
  }

  componentWillMount() {
    this.setState({
      content: this.props.content,
    })
  }

  handleStateChange = (clickedItem) => {
    //TODO: Post to CMS to change state
    const newContent = this.state.content.map(item => {
      if (item.order === clickedItem.order) {
        return {
          ...item,
          state: 'USED'
        }
      } else if (item.order === clickedItem.order + 1) {
        return {
          ...item,
          state: 'AVAILABLE'
        }
      }
      return item;
    })
    const complete = clickedItem.order === this.state.content.length;
    this.setState({content: newContent, complete})
  }

  render() {

    const content = this.state.content.quests.map((item) => {
      console.log('item', item)
      if (item.order === this.state.content.length) {
        return (
        <Icon
          disabled={this.props.disabled}
          complete={this.state.complete}
          key={item.order}
          icon={icons[item.track.title]}
          item={item}
          handleClick={() => this.handleStateChange(item)} />
      )}
      return (
        <Row key={item.order}>
          <Icon
            disabled={this.props.disabled}
            complete={this.state.complete}
            icon={icons[item.track.title]}
            item={item}
            handleClick={() => this.handleStateChange(item)} />
          <Transfer state={item.state} disabled={this.props.disabled} />
        </Row>
    )
  });
    return (
      <ProgressBarDiv>
        {content}
      </ProgressBarDiv>
  )}
}

export default ProgressBar;
