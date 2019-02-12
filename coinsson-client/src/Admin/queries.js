import gql from 'graphql-tag';

export const RESET_QUESTS = gql`
  mutation {
    first: updateManyQuests(data: {state:BLOCKED, done:false}) {
      count
    }
    second: updateManyQuests(data: {state:AVAILABLE} where: {order:1}) {
      count
    }
  }
`;
