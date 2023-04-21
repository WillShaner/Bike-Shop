import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bikeImages from './data/bikeImages';
import Navigation from './layout/Header/Navigation';
import { navLinks } from './layout/Header/navLinks';
import { theme } from './context/theme';
import { ThemeProvider } from '@mui/material';
function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/get')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getImage = (val) => {
    const image = bikeImages.find((x) => x.color === val);

    return image.image;
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation navLinks={navLinks} />
        {data !== null &&
          data.map((x) => {
            return (
              <div key={x.title}>
                <img src={getImage(x.color)} />
                <li>{x.title}</li>
              </div>
            );
          })}
      </ThemeProvider>
    </div>
  );
}

export default Main;
