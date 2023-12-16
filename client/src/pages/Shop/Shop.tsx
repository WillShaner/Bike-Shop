import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  CircularProgress,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import BikeCard from '../../components/New Components/BikeCard';
interface DataItem {
  ID: number;
  Title: string;
  Price: number;
  Size: 'large' | 'small';
  Color: string;
  Description: string;
}

type Filters = {
  minPrice?: number | null;
  maxPrice?: number | null;
};

const Shop = () => {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [filters, setFilters] = useState<Filters | null>({
    minPrice: null,
    maxPrice: null,
  });

  useEffect(() => {
    axios
      .get('http://localhost:3001/get', {
        params: { minPrice: filters?.minPrice },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [filters]);

  const handleFilters = () => {
    console.log('ran');
  };
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2em',
        padding: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginTop: '2em',
          flex: 1,
          gap: 2,
        }}
      >
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Price</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleFilters} name="All Prices" />}
              label="All Prices"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilters} name="$0-$100" />}
              label="$0-$100"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilters} name="$100-$200" />}
              label="$100-$200"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilters} name="$200-$300" />}
              label="$200-$300"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Size</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleFilters} name="Adult" />}
              label="Adult"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilters} name="Kid" />}
              label="Kid"
            />
          </FormGroup>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flex: 4,
        }}
      >
        {data !== null ? (
          data.map((x) => {
            return <BikeCard key={x.ID} bike={x} />;
          })
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Container>

    // Notes: Use skeleton prop for rectangular loading skeletons
  );
};

export default Shop;
