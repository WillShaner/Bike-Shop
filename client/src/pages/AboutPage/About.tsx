import React, { useEffect } from 'react';
import Founders from '../../components/Founders';
import MissionStatement from '../../components/MissionStatement';

import { Box } from '@mui/material';
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box className="about-page-container">
      <Founders />
      <hr style={{ margin: '0.5em auto' }} />
      <MissionStatement />
    </Box>
  );
}
