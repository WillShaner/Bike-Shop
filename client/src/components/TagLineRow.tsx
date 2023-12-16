import React from 'react';
import { Box, Typography } from '@mui/material';
import rowImage from '../assets/bike-row-image.jpg';
import RowButton from '../components/RowButton';

type Props = {
  tagline: string;
};

export default function TagLineRow({ tagline }: Props) {
  return (
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
        textAlign={'center'}
        className="shop-row-top-text"
        fontSize={'4em'}
        textTransform={'uppercase'}
      >
        {tagline}
      </Typography>
      <RowButton
        route="shop"
        text="Shop Now"
        color="rgb(92, 114, 149)"
        hoverColor="whiteSmoke"
      />
    </Box>
  );
}
