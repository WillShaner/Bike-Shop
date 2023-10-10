import React from 'react';
import AboutImg from '../assets/about.webp';
import { Box, Typography } from '@mui/material';
function MissionStatement() {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${AboutImg}) center center no-repeat`,
        backgroundSize: 'cover',
      }}
      minHeight={550}
      padding={'2em 3em'}
      className="about-container"
    >
      <Box className="about-text-container" maxWidth={'50%'}>
        <Typography variant="h3" color="whitesmoke">
          Our Mission
        </Typography>
        <Typography color="whitesmoke">
          At The Bike Shop, our mission is to ignite the spirit of adventure on
          two wheels. We are more than just a bike shop; we are a community of
          passionate riders, committed to enriching lives through cycling.
        </Typography>
        <Typography marginTop={2} color="whitesmoke">
          Our goal is to provide top-quality bicycles, gear, and exceptional
          service that cater to riders of all levels. We strive to create an
          inclusive space where beginners discover their love for cycling,
          enthusiasts find their dream rides, and experienced riders seek the
          thrill of the next trail.
        </Typography>
        <Typography marginTop={2} color="whitesmoke">
          We are dedicated to promoting health and sustainability through
          cycling. By organizing community rides, supporting local events, and
          championing cycling advocacy, we aim to make our town a greener,
          healthier, and more connected place.
        </Typography>
        <Typography marginTop={2} color="whitesmoke">
          At The Bike Shop, we believe that every pedal stroke is a journey,
          every trail a story, and every cyclist a friend. Our mission is to be
          your trusted companion on your cycling adventure, fostering a sense of
          freedom, camaraderie, and the sheer joy of the ride.
        </Typography>
        <Typography marginTop={2} color="whitesmoke">
          Join us at The Bike Shop, where adventure begins, and let&apos;s pedal
          together towards a brighter, healthier, and more exciting future.
        </Typography>
      </Box>
    </Box>
  );
}

export default MissionStatement;
