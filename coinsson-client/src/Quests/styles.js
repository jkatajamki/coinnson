import styled, { keyframes, css } from 'styled-components';

const styles = {
  available: {
    border: '0.25em solid #004356',
    backgroundColor: '#006e90',
  }
  ,
  done: {
    border: '0.25em solid #A4A9AD',
    backgroundColor: '#A4A9AD',
  }
  ,
  highlighted: {
    border: '0.25em solid #004356',
    backgroundColor: '#947EB0',
    padding: '0.5em',
  }
  ,
};



const changeColor = keyframes`
  0% {
    background-color: #004356;
  };
  25% {
    background-color: #947EB0;
  };
  75% {
    background-color: #947EB0;
  };
  100% {
    background-color: #004356;
  }
`;


export const CardContainer = styled.div`
  border: ${props => styles[props.styleName].border};
  border-radius: 0.5em;
  width: 20em;
  margin-bottom: 0.25em;
`;

export const CardHeader = styled.div`
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  background-color: ${props => styles[props.styleName].backgroundColor};
  color: #fff;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  animation: ${props => props.styleName === 'highlighted' ? css`${changeColor} 10s linear infinite` : 'none'};
`;

export const CardBody = styled.div`
  padding: 0.5em;
  color: ${props => props.styleName === 'done' && '#A4A9AD'};
`;

export const Cards = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 50% 50%;
    grid-column-gap: 0.25em;
  }

  @media (max-width: 767px) {
    grid-template-columns: 100%;
    grid-column-gap: 0.25em;
  }
`;
