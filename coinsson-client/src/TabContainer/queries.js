import gql from 'graphql-tag';

export const GET_POINTS = gql`
  query GetPoints{
    points(where:{points_not: null}) {
      id
      points
    }
  }
`;
