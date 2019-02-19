import gql from 'graphql-tag';

export const CHANGE_STATUS = gql`
  mutation ChangeState($id: ID!, $state: State, $done: Boolean, $points: Int) {
    quest: updateQuest(data: { state: $state, done: $done }, where: { id: $id }) {
      id
      state
      done
    },
    points: createPoint(data: { points: $points }) {
      points
    },
    deleteNull: deleteManyPoints(where: {points: null}) {
      count
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
      hidden
      track {
        id
        title
        done
      }
    }
  }
`;
