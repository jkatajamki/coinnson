import React from 'react';
import { TrackRowWrapper } from './styles';
import { Query, Mutation } from 'react-apollo';
import { GET_TRACKS, HIDE_QUESTS, SHOW_QUESTS, HIGHLIGHT_QUESTS  } from './queries';
import TrackRow from './TrackRow';
import PlaneLoader from '../Loader/Loader';

export default class TrackRowContainer extends React.PureComponent {
  state = {
    type: 'highlight',
    queries: {
      'highlight': HIGHLIGHT_QUESTS,
      'hide': HIDE_QUESTS,
      'show': SHOW_QUESTS
    }
  }

  handleTypeChange = (action) => {
    this.setState({ type: action })
  }

  render() {
    return (
      <Query
        query={GET_TRACKS}
        >
        {({ loading, error, data, refetch }) => {
          if (loading) return (<PlaneLoader />);
          if (error) return `Error! ${error.message}`;
          return (
            <Mutation mutation={this.state.queries[this.state.type]}>
                {handleMutation => (
                <div>
                  <h2>Do great things with tracks</h2>
                  <TrackRowWrapper>
                    {data.tracks.map(track => <TrackRow refetch={refetch} handleTypeChange={this.handleTypeChange} handleMutation={(id) => handleMutation({ variables: { id: track.id } })} track={track} key={track.id} />)}
                  </TrackRowWrapper>
                </div>
              )}
            </Mutation>
            )
        }}
      </Query>
    )
  }
}
