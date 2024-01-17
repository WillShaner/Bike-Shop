import { Container } from '@mui/material';
import React from 'react';
import Hero from '../../components/New Components/Hero';
import './Home.css';
import differenceItems from '../../data/differenceItems';
import Difference from '../../components/Difference';
import Review from '../../components/Review';
import reviews from '../../data/reviews';
import TagLineRow from '../../components/TagLineRow';
const Home = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Hero
        Title="Welcome to the Bike Shop"
        subTitle="Get 50% off all bikes today"
      />
      <TagLineRow tagline="Reach New Horizons" />
      <Review reviews={reviews} />
      <Difference differenceItems={differenceItems} />
    </Container>
  );
};

export default Home;
