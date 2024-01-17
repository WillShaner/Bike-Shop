import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Button,
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
  price?: string | null;
  size?: 'Kids' | 'Adult' | null | undefined;
};

const Shop = () => {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [filters, setFilters] = useState<Filters>({
    price: null,
    size: null,
  });

  useEffect(() => {
    axios
      .get('http://localhost:3001/get')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleFilters = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = e.target;

    if (name.startsWith('$')) {
      // Handle Price checkboxes
      setFilters((prevFilters) => ({
        ...prevFilters,
        price: checked ? value : null,
      }));
    } else {
      // Handle Size checkboxes
      setFilters((prevFilters) => ({
        ...prevFilters,
        size: checked ? (name as 'Adult' | 'Kids') : null,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(filters);
    axios
      .get('http://localhost:3001/get', {
        params: { price: filters.price, size: filters.size },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    // Use filters object for filtering
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
        <FormControl
          component="form"
          variant="standard"
          onSubmit={handleSubmit}
        >
          <FormLabel component="legend">Price</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleFilters}
                  name="All Prices"
                  checked={filters.price === 'All Prices'}
                />
              }
              label="All Prices"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleFilters}
                  name="$0-$100"
                  checked={filters.price === '0 and 100'}
                  value={'0 and 100'}
                />
              }
              label="$0-$100"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleFilters}
                  name="$100-$200"
                  checked={filters.price === '100 and 200'}
                  value={'100 and 200'}
                />
              }
              label="$100-$200"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleFilters}
                  name="$200-$300"
                  checked={filters.price === '200 and 300'}
                  value={'200 and 300'}
                />
              }
              label="$200-$300"
            />
          </FormGroup>
          <FormLabel component="legend">Size</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleFilters}
                  name="Adult"
                  checked={filters.size === 'Adult'}
                />
              }
              label="Adult"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleFilters}
                  name="Kids"
                  checked={filters.size === 'Kids'}
                />
              }
              label="Kids"
            />
          </FormGroup>
          <Button type="submit" color="secondary" variant="contained">
            Search
          </Button>
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
