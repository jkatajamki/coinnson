import gql from 'graphql-tag';

export const GET_TRACKS = gql`
  {
    tracks {
      id
      title
      hidden
      quests {
        id
        header
        instructions
        points
        order
        state
        track {
          id
          title
        }
      }
    }
  }
`;

export const COMPLETE_TRACK = gql`
  mutation completeTrack($id: ID!, $done: Boolean) {
    updateTrack(data: { done: $done }, where: { id: $id }) {
      id
      done
    }
  }
`;
