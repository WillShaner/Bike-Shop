import React from 'react';
import FounderImg from '../assets/founder.webp';
import '../style/Founder.css';
import { Box, Typography } from '@mui/material';

function Founders() {
  return (
    <Box className="founder-container p-4">
      <img src={FounderImg} className="founder-image rounded" alt="founder" />
      <Box className="founder-text px-5">
        <Typography variant="h3" className="founder-title">
          The Visionary Behind the Wheels
        </Typography>
        <Typography>
          John Smith, the visionary behind The Bike Shop, has transformed a
          lifelong passion for cycling into a thriving local bike shop. His
          journey began in a family of avid cyclists, instilling in him a deep
          love for two-wheel adventures. In 2010, John turned this passion into
          a reality by founding The Bike Shop with a clear vision: to provide
          top-quality bikes and exceptional customer service to riders of all
          levels.
        </Typography>
        <Typography marginTop={2} marginBottom={2}>
          Over the years, The Bike Shop has become a beloved community
          institution, thanks to John&apos;s unwavering dedication. He not only
          runs a successful business but also actively promotes cycling&apos;s
          many benefits. John organizes community rides, sponsors local events,
          and supports cycling advocacy groups, emphasizing the importance of
          health and sustainability.
        </Typography>
        <Typography>
          Today, John&apos;s legacy extends beyond a mere bike shop owner. He is
          a symbol of a movement that celebrates the joy of cycling and the
          spirit of adventure. Through The Bike Shop, John Smith has brought the
          thrill of two wheels to countless lives while fostering a tight-knit
          cycling community.
        </Typography>
      </Box>
    </Box>
  );
}

export default Founders;
