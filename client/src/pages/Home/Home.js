import React, { useContext, useEffect } from 'react';
import TopSellerCarousel from '../../components/TopSellerCarousel';
import Hero from '../../components/Hero';
import Difference from '../../components/Difference';
import IMAGES from '../../data/landingImages';
import EmailSignUp from '../../components/EmailSignUp';
import { CartContext } from '../../context/CartContext';
import './Home.css';
import topBikes from '../../data/topBikes';

function Home() {
  // const [welcomeUser, setWelcomeUser] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // eslint-disable-next-line consistent-return

  const { emailPopup, setEmailPopup } = useContext(CartContext);

  return (
    <main className="d-flex align-items-center flex-column">
      <Hero arr={IMAGES} />
      <TopSellerCarousel arr={topBikes} />
      {emailPopup && <EmailSignUp setEmailPopup={setEmailPopup} />}
      <Difference />
    </main>
  );
}

export default Home;
