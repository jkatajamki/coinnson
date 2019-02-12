import gql from 'graphql-tag';

export const GET_QUESTS = gql`
  query GetQuests {
    quests {
      id
      header
      instructions
      points
      track {
        id
        title
      }
    }
  }
`;