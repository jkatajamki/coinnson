import styled from 'styled-components';
import posed from 'react-pose';

const Animation = posed.div({
  enter: {
    x: '0%',
    opacity: 1,
    transition: {
      opacity: { type: 'spring', stiffness: 100 },
      x: { type: 'spring', stiffness: 100 },
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      opacity: { type: 'spring', stiffness: 100 },
      x: { type: 'spring', stiffness: 100 },
    },
  },
});

export const TabHeaders = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabHeader = styled.div`
  padding: 2em;
  font-weight: bold;
  font-family: 'Staatliches', sans-serif;
  letter-spacing: 0.1em;
  color: ${props => (props.active ? '#2C2533' : '#A4A9AD')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Underline = styled(Animation)`
  height: 0.25em;
  margin-top: 0.25em;
  width: 85%;
  background-color: ${props => (props.active ? '#2C2533' : '#A4A9AD')};
`;

export const TabContent = styled.div``;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PointsContainer = styled.div`
  color: #006e90;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
