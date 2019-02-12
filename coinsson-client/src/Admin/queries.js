import gql from 'graphql-tag';

export const RESET_QUESTS = gql`
  mutation {
    first: updateManyQuests(data: {state:BLOCKED, done:false, highlight: false}) {
      count
    }
    second: updateManyQuests(data: {state:AVAILABLE} where: {order:1}) {
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
    highlight: updateManyQuests(data: {
    	highlight: true
    },
    where: {
      track: {
        id: $id
      }
    }) {
      count
    }
    unHighlight: updateManyQuests(data: {
    	highlight: false
    },
    where: {
      track: {
        id_not: $id
      }
    }) {
      count
    }
  }
`
