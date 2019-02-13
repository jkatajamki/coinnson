import gql from 'graphql-tag';

export const CHANGE_STATUS = gql`
  mutation ChangState($id: ID!, $state: State, $done: Boolean) {
    updateQuest(data: { state: $state, done: $done }, where: { id: $id }) {
      id
      state
      done
    }
  }
`;

export const GET_QUESTS = gql`
  query GetQuests($id: ID!) {
    quests(where: { track: { id: $id } }) {
      id
      header
      instructions
      points
      order
      state
      track {
        id
        title
        done
      }
    }
  }
`;
