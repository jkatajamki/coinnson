import styled from 'styled-components';
import { media } from '../styles';

export const AdminContainer = styled.div``;

export const Button = styled.button`
  padding: 0.5em;
  border-radius: 0.5em;
  border: 0.25em solid #004356;
  font-size: 1em;
  margin: 0.5em;
  background-color: #fff;
  width: ${props => (props.width ? props.width : '7em')};

  :active {
    background-color: #004356;
    color: #fff;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.5em;
  align-items: center;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`;

export const ButtonWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  ${media.medium`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  `}
`;

export const TrackRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30em;
`;

export const ResetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
