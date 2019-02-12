import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 0.25em solid #004356;
  border-radius: 0.5em;
  width: 20em;
  margin-bottom: 0.25em;
`;

export const CardHeader = styled.div`
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  background-color: #006e90;
  color: #fff;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardBody = styled.div`
  padding: 0.5em;
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

`
