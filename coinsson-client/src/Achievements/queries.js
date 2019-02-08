import gql from 'graphql-tag';

export const GET_TRACKS= gql`
    {
      tracks {
        id
        title
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
`
