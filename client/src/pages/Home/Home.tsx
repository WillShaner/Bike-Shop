import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Hero from '../../components/New Components/Hero';
import rowImage from '../../assets/bike-row-image.jpg';
import './Home.css';
import differenceItems from '../../data/differenceItems';
import Difference from '../../components/Difference';
import Review from '../../components/Review';
import reviews from '../../data/reviews';
import RowButton from '../../components/RowButton';
const Home = () => {
  return (
    <Container disableGutters maxWidth="xl">
      <Hero
        Title="Welcome to the Bike Shop"
        subTitle="Get 50% off all bikes today"
      />
      <Box
        sx={{
          background:
            'linear-gradient( rgb(0 0 0 / 40%), rgb(0 0 0 / 40%) ), url(' +
            rowImage +
            ') center center no-repeat',
          minHeight: 300,
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        className="shop-row"
      >
        <Typography
          color={'white'}
          fontFamily={'inherit'}
          className="shop-row-top-text"
          fontSize={'4em'}
        >
          REACH NEW HORIZONS
        </Typography>
        <RowButton
          route="shop"
          text="Shop Now"
          color="rgb(92, 114, 149)"
          hoverColor="whiteSmoke"
        />
      </Box>
      <Review reviews={reviews} />
      <Difference differenceItems={differenceItems} />
    </Container>
  );
};

export default Home;
