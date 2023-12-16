import React from 'react';
import {
  bottomLinks,
  termsLinks,
  socialLinks,
  locationLinks,
} from './footerLinks';
import FooterSection from './FooterSection';
import { Stack, Box } from '@mui/material';
import { TitleSize } from './FooterSection';
function Footer() {
  return (
    <Box component="footer">
      <Stack
        sx={{ padding: '1em 3em', backgroundColor: '#959d90' }}
        alignItems={'center'}
      >
        <FooterSection
          links={locationLinks}
          title="OUR LOCATIONS"
          titleSize={TitleSize.H5}
        />
        <hr />
        <FooterSection
          links={socialLinks}
          title="FOLLOW US"
          titleSize={TitleSize.H5}
        />
        <hr />
        <FooterSection
          links={termsLinks}
          title="© 2023 The Bike Shop"
          titleSize={TitleSize.H6}
        />
        <hr />
        <FooterSection
          links={bottomLinks}
          title="created by William Shaner"
          titleSize={TitleSize.SUBTITLE1}
          row
        />
      </Stack>
    </Box>
  );
}
export default Footer;
