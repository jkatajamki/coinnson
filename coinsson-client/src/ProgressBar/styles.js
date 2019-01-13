import styled from 'styled-components';
import posed from 'react-pose';

const Transfer = posed.div({
  used: {
    backgroundColor: '#006E90',
    transition: { duration: 1000 },
  },
  available: {
    backgroundColor: '#947EB0',
    transition: { duration: 1000 },
  },
  blocked: {
    backgroundColor: '#A4A9AD',
    transition: { duration: 1000 },
  }
});

const Icon = posed.div({
  used: {
    backgroundColor: '#006E90',
    transition: { duration: 1000 },
    border: '0.25em solid rgba(0,0,0,0)',
  },
  available: {
    backgroundColor: '#947EB0',
    transition: { duration: 1000 },
    border: '0.25em solid #2C2533',
  },
  blocked: {
    backgroundColor: '#A4A9AD',
    transition: { duration: 1000 },
    border: '0em solid rgba(0,0,0,0)',
  },
  complete: {
    border: '0.25em solid #004356',
    backgroundColor: '#006E90',
    transition: { duration: 1000 },
  }
});

const colorMapping = {
  'available': '#947EB0',
  'used': '#006E90',
  'blocked': '#A4A9AD'
}

export const StyledIcon = styled(Icon)`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2em;
  padding: 0.25em;
  background-color:  ${props => colorMapping[props.state] };
`;

export const ProgressBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5em;
  margin-left: 3em;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const StyledTransfer = styled(Transfer)`
  height: 0.5em;
  width: 5em;
  background-color:  ${props => colorMapping[props.state] };
`
