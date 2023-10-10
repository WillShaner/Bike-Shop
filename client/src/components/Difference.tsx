import { Box, Typography } from '@mui/material';
import React from 'react';
import RowButton from './RowButton';

type IDifferenceItem = {
  id: number;
  title: string;
  content: string;
  image: React.ReactNode;
};

type Props = {
  differenceItems: Array<IDifferenceItem>;
};
function Difference({ differenceItems }: Props) {
  return (
    <Box className="difference">
      <Typography component={'h4'} variant="h4" className="difference-title">
        What Sets Us Apart
      </Typography>
      <Box className="difference-container">
        {differenceItems ? (
          differenceItems.map((x) => (
            <Box key={x.id} className="difference-container-item">
              {x.image}
              <Box>{x.title}</Box>
              <Typography>{x.content}</Typography>
            </Box>
          ))
        ) : (
          <h1>No items</h1>
        )}
      </Box>
      <RowButton
        route="about"
        text="Learn More"
        color="rgb(250, 237, 205)"
        hoverColor="black"
      />
    </Box>
  );
}

export default Difference;
