import gql from 'graphql-tag';

export const CHANGE_STATUS = gql`
  mutation ChangState($id: ID!, $state: State) {
    updateQuest(
      data: {
        state: $state
      }
      where: {
        id: $id
      }
    ) {
      id
      state
    }
  }
`

export const GET_QUESTS= gql`
    query GetQuests($id: ID!){
      quests(where: {
         track: {
          id: $id
        }}) {
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
`
