import { Card, CardMedia, Typography, CardContent, Stack } from '@mui/material';
import React from 'react';
import { getImage } from '../../utils/functions/getImage';
type IBike = {
  title: string;
  price: number;
  size: 'standard' | 'small';
  color: string;
  description: string;
};

type Props = {
  bike: IBike;
};

export default function BikeCard({ bike }: Props) {
  return (
    <Card
      sx={{
        maxWidth: '345px',
        margin: '2em',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        image={getImage(bike.color)}
        title={bike.title}
        sx={{ width: '300px', height: 'auto', objectFit: 'contain' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          {bike.title.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary" marginBottom={3}>
          {bike.description}
        </Typography>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', margin: '0 1em' }}
        >
          <Typography>${bike.price}</Typography>
          <Typography>Size: {bike.size}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
