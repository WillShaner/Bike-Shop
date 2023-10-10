import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Grid, Typography, Box } from '@mui/material'; // Import the necessary Material-UI components
import reviewImage from '../assets/review-section-image.jpg';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type IReview = {
  id: number;
  review: string;
  reviewerName: string;
};

type Props = {
  reviews: Array<IReview>;
};

const Review = ({ reviews }: Props) => {
  const [currentReview, setCurrentReview] = useState(1);

  // Find the review with the current ID
  const currentReviewData = reviews.find((x) => x.id === currentReview);

  const nextReview = () => {
    setCurrentReview(currentReview === reviews.length ? 1 : currentReview + 1);
  };
  const prevReview = () => {
    setCurrentReview(currentReview === 1 ? reviews.length : currentReview - 1);
  };
  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        spacing={2}
        width={'100%'}
        padding={'1em 3em'}
      >
        <Grid
          item
          maxWidth={'50%'}
          minWidth={'50%'}
          display={'flex'}
          justifyContent={'space-between'}
          flexDirection={'column'}
        >
          <Box sx={{ fontSize: 48 }}>
            <AiFillStar fill="rgb(209,168,116)" />
            <AiFillStar fill="rgb(209,168,116)" />
            <AiFillStar fill="rgb(209,168,116)" />
            <AiFillStar fill="rgb(209,168,116)" />
            <AiFillStar fill="rgb(209,168,116)" />
          </Box>
          {currentReviewData ? (
            <Box>
              <Typography fontSize={20}>
                &quot;{currentReviewData.review}&quot;
              </Typography>
              <Typography marginTop={3}>
                <em> - {currentReviewData.reviewerName}</em>
              </Typography>
            </Box>
          ) : (
            <Typography>No review found for ID {currentReview}</Typography>
          )}
          <Box>
            <ChevronLeftIcon onClick={prevReview} />
            <ChevronRightIcon onClick={nextReview} />
          </Box>
        </Grid>
        <Grid item maxWidth={'50%'}>
          <img
            src={reviewImage}
            alt="Snow Bike"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Review;
