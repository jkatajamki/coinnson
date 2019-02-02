import React from 'react';
import {
  FaFly,
  FaAmbulance,
  FaPlaneDeparture,
  FaSpider,
  FaSmileBeam,
  FaSplotch,
  FaTeeth,
} from 'react-icons/fa';

export const achievements = [
  [
    {
      state: 'available',
      content: <FaFly />,
      order: 1,
      label: 'Tekstiä tähän',
    },
    {
      state: 'blocked',
      content: <FaAmbulance />,
      order: 2,
      label: 'Tekstiä tähän',
    },
    {
      state: 'blocked',
      content: <FaSpider />,
      order: 3,
      label: 'Tekstiä tähän',
    },
    {
      state: 'blocked',
      content: <FaPlaneDeparture />,
      order: 4,
      label: 'Tekstiä tähän',
    },
  ],
  [
    {
      state: 'available',
      content: <FaSmileBeam />,
      order: 1,
      label: 'Tekstiä tähän',
    },
    {
      state: 'blocked',
      content: <FaSplotch />,
      order: 2,
      label: 'Tekstiä tähän',
    },
    {
      state: 'blocked',
      content: <FaTeeth />,
      order: 3,
      label: 'Tekstiä tähän',
    },
  ],
];
