import React from 'react';
import { IMenuLink } from '../../interfaces/IMenuLink';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from '@mui/material';
import { theme } from '../../context/theme';

type Props = {
  bottomFooterLinks: IMenuLink[];
};

export default function MyLinks({ bottomFooterLinks }: Props) {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1em 3em',
        backgroundColor: '#959d90',
      }}
    >
      <Typography>created by William Shaner</Typography>
      <Stack direction="row" spacing={2}>
        {bottomFooterLinks.map((x) => {
          return (
            <Link
              key={x.link}
              href={x.link}
              underline="none"
              sx={{
                transition: '150ms ease-in-out',
                '&:hover': { color: '#e8d9cd' },
              }}
            >
              {x.link}
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
}
