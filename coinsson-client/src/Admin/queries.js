import gql from 'graphql-tag';

export const RESET_QUESTS = gql`
  mutation {
    first: updateManyQuests(
      data: { state: BLOCKED, done: false, highlight: false, hidden: false }
    ) {
      count
    }
    second: updateManyQuests(data: { state: AVAILABLE }, where: { order: 1 }) {
      count
    }
    third: updateManyTracks(data: { done: false, hidden: false }) {
      count
    }
  }
`;

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

export const HIGHLIGHT_QUESTS = gql`
  mutation Highlight($id: ID!) {
    highlight: updateManyQuests(
      data: { highlight: true }
      where: { track: { id: $id } }
    ) {
      count
    }
    unHighlight: updateManyQuests(
      data: { highlight: false }
      where: { track: { id_not: $id } }
    ) {
      count
    }
  }
`;

export const HIDE_QUESTS = gql`
  mutation Hide($id: ID!) {
    hideQuests: updateManyQuests(
      data: { hidden: true }
      where: { track: { id: $id } }
    ) {
      count
    }
    hideTracks: updateManyTracks(data: { hidden: true }, where: { id: $id }) {
      count
    }
  }
`;

export const SHOW_QUESTS = gql`
  mutation Show($id: ID!) {
    hideQuests: updateManyQuests(
      data: { hidden: false }
      where: { track: { id: $id } }
    ) {
      count
    }
    hideTracks: updateManyTracks(data: { hidden: false }, where: { id: $id }) {
      count
    }
  }
`;
