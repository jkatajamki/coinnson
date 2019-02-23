import React from 'react';
import { TrackContainer, Checkbox, CheckboxWrapper, Button } from './styles';

export default class TrackList extends React.PureComponent {
  state = {
    checkedTrack: ''
  }

  componentDidMount() {
    const checkedTrack = this.props.tracks[0].id;
    this.setState({checkedTrack});
  }

  handleCheck = (id) => {
    this.setState({checkedTrack: id})
  }

  handleHighlight = () => {
    this.props.handleHighlight(this.state.checkedTrack)
  }

  render() {
    const { tracks } = this.props;
    return (
      <TrackContainer>
        {tracks.map(track => (
          <CheckboxWrapper key={track.id}>
            <Checkbox id={track.id} onClick={() => this.handleCheck(track.id)} checked={this.state.checkedTrack === track.id} />
             {track.title}
           </CheckboxWrapper>
        ))}
        <Button onClick={this.handleHighlight}>Highlight</Button>
      </TrackContainer>
    )
  }
}
