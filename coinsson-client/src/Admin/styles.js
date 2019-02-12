import styled from 'styled-components';

export const AdminContainer = styled.div`

`
export const Button = styled.button`
  padding: 0.5em;
  border-radius: 0.5em;
  border: 0.25em solid #004356;
  font-size: 1em;
  background-color: #FFF;
  width: 100%;

  :active {
    background-color: #004356;
    color: #FFF;
  }
`

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.5em;
  align-items: center;
`

export const Checkbox = styled.div`
  border-radius: 1em;
  width: 1em;
  height: 1em;
  border: 0.15em solid black;
  background-color: ${props => props.checked ? '#004356' : '#FFF'};
  margin-right: 0.25em;

`
