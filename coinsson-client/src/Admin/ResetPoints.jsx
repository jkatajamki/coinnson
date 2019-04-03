import React from 'react';
import { Button } from './styles';
import PlaneLoader from '../Loader/Loader';
import { getPointCount } from '../helpers';

const ResetPoints = ({ resetPoints }) => {
  return (
    <Button
      width="10em"
      onClick={resetPoints}>
      Reset Points
    </Button>
  );
};

export default ResetPoints;
