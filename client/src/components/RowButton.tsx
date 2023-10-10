import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
type Props = {
  route: string;
  text: string;
  color: string;
  hoverColor: string;
};

export default function RowButton({ route, text, color, hoverColor }: Props) {
  return (
    <Link
      to={'/' + { route }}
      component={RouterLink}
      className="shop-row-btn"
      sx={{
        border: `1px solid ${hoverColor}`,
        color: hoverColor,
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: hoverColor,
          borderColor: color,

          '*': {
            color: color,
          },
        },
      }}
      underline="none"
    >
      <Typography variant={'h6'} component={'span'}>
        {text}
      </Typography>
    </Link>
  );
}
