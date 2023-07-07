import { Container } from '@mui/material';
import React from 'react';
import Hero from '../../components/New Components/Hero';

const Home = () => {
  return (
    <Container sx={{ border: '1px solid red' }} disableGutters maxWidth="xl">
      <Hero />
    </Container>
  );
};

export default Home;
