import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from './layout/Header/Navigation';
import { navLinks } from './layout/Header/navLinks';
import { theme } from './context/theme';
import { ThemeProvider } from '@mui/material';
import Footer from './layout/Footer/Footer';
import BikeCard from './components/New Components/BikeCard';
function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/get')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navigation navLinks={navLinks} />
      <main>
        {data !== null &&
          data.map((x) => {
            return <BikeCard bike={x} key={x.id} />;
          })}
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default Main;
