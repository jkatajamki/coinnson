import styled from 'styled-components';

export const AdminContainer = styled.div``;

export const Button = styled.button`
  padding: 0.5em;
  border-radius: 0.5em;
  border: 0.25em solid #004356;
  font-size: 1em;
  margin: 0.5em;
  background-color: #fff;
  width: ${props => (props.width ? props.width : '100%')};

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

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const TrackRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30em;
`;
