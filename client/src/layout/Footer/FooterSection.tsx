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
  row?: boolean;
};
export default function FooterSection({ title, titleSize, links, row }: Props) {
  return (
    <Stack
      direction={row ? 'row' : 'column'}
      justifyContent={row ? 'space-between' : 'center'}
      sx={{ display: 'flex', alignItems: 'center', padding: '2em 0' }}
      width={'100%'}
      maxWidth={1200}
    >
      <Typography variant={titleSize} marginBottom={'0.5em'} fontWeight={'700'}>
        {title}
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        flexWrap={'wrap'}
        justifyContent={'center'}
        marginBottom={'0.5em'}
      >
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
