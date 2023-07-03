import React from 'react';
import { IMenuLink } from '../../interfaces/IMenuLink';
import { Typography, Stack, Link } from '@mui/material';

export enum TitleSize {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  SUBTITLE1 = 'subtitle1',
  SUBTITLE2 = 'subtitle2',
  BODY1 = 'body1',
  BODY2 = 'body2',
  CAPTION = 'caption',
  OVERLINE = 'overline',
}

type Props = {
  title: string;
  titleSize?: TitleSize;
  links: IMenuLink[];
};
export default function FooterSection({ title, titleSize, links }: Props) {
  return (
    <Stack
      direction="column"
      sx={{ display: 'flex', alignItems: 'center', padding: '2em 0' }}
    >
      <Typography variant={titleSize} marginBottom={'1em'} fontWeight={'700'}>
        {title}
      </Typography>
      <Stack direction="row" spacing={2}>
        {links.map((x) => {
          if (x.icon) {
            return (
              <Link
                key={x.link}
                href={x.url}
                underline="none"
                sx={{
                  transition: '150ms ease-in-out',
                  '&:hover': { color: '#e8d9cd' },
                }}
                fontSize={'44px'}
              >
                {x.icon}
              </Link>
            );
          } else {
            return (
              <Link
                key={x.link}
                href={x.url}
                underline="none"
                sx={{
                  transition: '150ms ease-in-out',
                  '&:hover': { color: '#e8d9cd' },
                }}
              >
                {x.link}
              </Link>
            );
          }
        })}
      </Stack>
    </Stack>
  );
}
