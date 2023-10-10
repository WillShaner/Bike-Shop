/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import IMAGES from '../../data/landingImages';
import '../../style/Hero.css';
import { Box, Container, Typography } from '@mui/material';

type Props = {
  Title: string;
  subTitle?: string;
};
function Hero({ Title, subTitle }: Props) {
  return (
    <Container maxWidth="xl">
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h1">
          {Title.toUpperCase()}
        </Typography>
        <Typography variant="h5" component="h2">
          {subTitle?.toUpperCase()}
        </Typography>
      </Box>
      <Box className="grid-container">
        {IMAGES.map((x) => (
          <Box
            key={x.id}
            sx={{ backgroundImage: `url(${x.image})` }}
            className={`grid-item grid-item-${x.id}`}
          >
            <Link to="/shop">
              <Typography component="span" className="shop-btn-text">
                {x.category.toUpperCase()}
              </Typography>
              <BsArrowRight className="arrow" />
            </Link>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Hero;
