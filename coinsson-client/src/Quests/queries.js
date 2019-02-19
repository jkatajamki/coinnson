import gql from 'graphql-tag';

export const GET_QUESTS = gql`
  query GetQuests {
    quests(orderBy: highlight_DESC) {
      id
      header
      instructions
      points
      done
      hidden
      highlight
      track {
        id
        title
      }
    }
  }
`;
